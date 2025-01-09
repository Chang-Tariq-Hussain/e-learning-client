import React from 'react';
import {Modal} from 'antd';
import "../theme-modals/theme-modals.scss"

export default function VideoRecordingModal(options) {
    return (
        <>
            <Modal
                title={options.title}
                centered
                footer={false}
                open={options.open}
                onOk={() => options.close(false)}
                onCancel={()=>{options.close(false)}}
                wrapClassName={"theme-modals video-stream"}
                width={options.width ? options.width : 420}
                maskClosable={false}
            >
                {options.content}
            </Modal>
        </>
    );
};
