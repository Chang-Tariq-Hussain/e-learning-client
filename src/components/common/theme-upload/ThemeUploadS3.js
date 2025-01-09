import React, {useState} from 'react';
import {Modal, Upload} from 'antd';
import {CameraIcon} from "../../../../assets/icons/defaultIcons";
import profileImage from "../../../../assets/images/avatar.png";
import {S3Service} from "../../../services/s3-api.service";


const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

export default function ThemeUploadS3 () {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: profileImage,
        },
    ]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const handleCustomRequest = async (options) => {
        try {
            const data = {
                contentType: options.file.type
            };
            const signedUrlResponse = await S3Service.getPreSignedUrl(data);
            const fields = signedUrlResponse.data.result.fields;
            const uploadFileUrl = signedUrlResponse.data.result.url;
            const fileUrl = signedUrlResponse.data.url;

            const formData = new FormData();
            for (const key in fields) {
                formData.append(key, fields[key]);
            }
            formData.append("file", options.file);
            const response = await S3Service.uploadFileToS3(uploadFileUrl, formData);
            if (response.status === 204) {
                options.onSuccess({}, options.file);
                setFileList([...fileList, { uid: options.file.uid, name: options.file.name, status: 'done', url: fileUrl }]);
            } else {
                options.onError(new Error('Upload failed'));
            }
        } catch (error) {
            options.onError(error);
        }
    };

    const uploadButton = (
        <div>
            <CameraIcon/>
        </div>
    );

    return (
        <div className={'theme-upload'}>
            <Upload
                listType="picture-circle"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                customRequest={handleCustomRequest} // Use custom request for S3 upload
                maxCount={1}
            >
                {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img
                    alt="example"
                    style={{ width: '100%' }}
                    src={previewImage}
                />
            </Modal>
        </div>
    );
};
