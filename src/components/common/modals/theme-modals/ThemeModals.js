import React, {useState} from 'react';
import {Modal} from 'antd';
import "./theme-modals.scss"

export default function ThemeModals(options) {

    const [modal2Open, setModal2Open] = useState(false);
    if (!options.open) {
        return null; // Return null if the modal should not be rendered
    }
    return (
        <>
            <Modal
                title={options.title}
                centered
                footer={false}
                open={options.open}
                onOk={() => options.close(false)}
                onCancel={() => options.close(false)}
                wrapClassName={"theme-modals"}
                className={options.className}
                width={options.width ? options.width : 550}
                maskClosable={false}
            >
                {options.content}
            </Modal>
        </>
    );
};
