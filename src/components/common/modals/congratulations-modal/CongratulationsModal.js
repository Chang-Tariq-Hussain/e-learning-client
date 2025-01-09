import {Modal} from 'antd'
import React from 'react'
import {useNavigate} from "react-router";

import sucess from "../../../../../assets/images/coins.png"
import "../success-modal/success-modal.scss"
import ThemeButton from "../../theme-button/ThemeButton";

const CongratulationsModal = (options) => {

    const navigate = useNavigate();
    const handleVerificationFunction = () => {

        // notification.success({
        //     message: "Success",
        //     description: "OTP Code Verified",
        //     placement: "bottomRight",
        //     icon: <RoundedCheck />,
        //     duration: 2,
        // });
        options.setSucessModal(false);
        // navigate("/");
        // setTimeout(function () {


        // }, 3000);
    };

    return (
        <>
            <Modal
                title="Congratulation!"
                centered
                open={options.sucessModal}
                onOk={handleVerificationFunction}
                onCancel={() => options.setSucessModal(false)}
                cancelButtonProps={{
                    disabled: false,
                    show: false,
                    className: "d-none",
                }}
                okButtonProps={{ className: "fw-500  m-0" }}
                closeIcon={true}
                closable={true}
                wrapClassName={"success-modal"}
                // okText={"Sign In"}
                maskClosable={false}
                footer={false}
            >

                <div className="sucessContainer">
                    <img src={sucess} alt="sucess" className='img-fluid' />
                    <h3 className='fw-700'>{options.heading}</h3>
                    <h4 className='fw-400'>{options.des}</h4>
                    <ThemeButton
                        type={'button'}
                        text={options.buttonText}
                        className={'btn-light-lg'}
                        onClick={options.onButtonClick}
                    />
                </div>
            </Modal>
        </>
    )
}

export default CongratulationsModal