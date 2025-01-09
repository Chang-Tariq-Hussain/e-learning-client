import React, {useState} from "react"
import {message, Spin, Upload} from "antd";
import {FiCamera} from "react-icons/fi";


export default function SingleImageUploader() {
    const [loading, setLoading] = useState()
    const [file, setFile] = useState()
    const [image, setImage] = useState('')
    const handleImageChange = async (event) => {
        const file = event.file;
        setLoading(true);
        if (file.type !== "image/jpeg" && file.type !== "image/png") {
            message.error("You can only upload JPG/PNG files!");
            setLoading(false); // Stop loading
            return;
        }
        if (file.size / 1024 / 1024 >= 2) {
            message.error("Image must be smaller than 2MB!");
            setLoading(false); // Stop loading
            return;
        }


        const reader = new FileReader();
        reader.onload = function () {
            const output = reader.result;
            setImage(output);
            setFile(file);
            console.log(file, 'file ')
            console.log(output, 'file output ')
            // console.log(file, 'file')
            // console.log(image, 'image')
        };
        setLoading(false);
        reader.readAsDataURL(file);
    };

    const uploadButton = <div>{loading ? <Spin /> :  <div><FiCamera style={{fontSize:'22px'}} /></div> }</div>;
    return(
        <div>
            <Upload
                // name="avatar"
                listType="picture-card"
                // className="avatar-uploader"
                showUploadList={false}
                accept="image/*"
                onChange={handleImageChange}
                beforeUpload={() => {
                    /* update state here */
                    return false;
                }}
            >
                {image ? (
                    <img
                        src={image}
                        alt="avatar"
                        style={{
                            width: "90px",
                            height: "90px",
                            objectFit: 'cover',
                            borderRadius:'50%',
                        }}
                    />
                ) : (
                    uploadButton
                )}
            </Upload>
        </div>
    )
}