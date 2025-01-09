import React, {useState} from 'react';
import {Modal} from 'antd';
import "../theme-modals/theme-modals.scss"
import ActionModal from "../action-modal/ActionModal";

export default function VideoStreamModal(options) {
    const [loader,setLoader]= useState(false)
    const [closeStream, setCloseStream] = useState(false)

    function handleCloseStream(){
        setCloseStream(true)
    }
    return (
        <>
            <Modal
                title={options.title}
                centered
                footer={false}
                open={options.open}
                onOk={() => options.close(false)}
                onCancel={handleCloseStream}
                wrapClassName={"theme-modals video-stream"}
                width={options.width ? options.width : 420}
                maskClosable={false}
            >
                {options.content}
            </Modal>
            <ActionModal
                show={closeStream}
                close={setCloseStream}
                modalHeading={'Leave Livestream'}
                modalText={'Are you sure you want to leave the livestreaming?'}
                cancelBTnText={'Cancel'}
                actionBTnText={'Leave'}
                // loader={loader}
                actionBtnFunc={() => {
                    setLoader(true)
                    setTimeout(()=>{
                        setLoader(false)
                        setCloseStream(false)
                        options.close(false)
                    },[1000])
                }}
                loader={loader}
            />
        </>
    );
};
