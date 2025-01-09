import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import "./action-modal.scss"
import ThemeButton from "../../theme-button/ThemeButton";

export default function ActionModal(options) {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        options.close(false)
    }
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal
                show={options.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                dialogClassName="action-modal"
                centered
            >
                {/*<Modal.Header closeButton>*/}
                {/*    <Modal.Title>Modal title</Modal.Title>*/}
                {/*</Modal.Header>*/}
                <Modal.Body>
                    <div className={'action-modal-content'}>
                        <h3>{options.modalHeading}</h3>
                        <p>{options.modalText}</p>
                    </div>
                    <div className={'action-modal-btns'}>
                        <ThemeButton
                            type={'button'}
                            text={options.cancelBTnText ? options.cancelBTnText : 'Cancel'}
                            className={'btn btn-text'}
                            onClick={handleClose}
                        />
                        <ThemeButton
                            type={'button'}
                            text={options.actionBTnText}
                            className={'btn btn-light-modal'}
                            onClick={options.actionBtnFunc}
                            loader={options.loader}
                        />
                    </div>
                </Modal.Body>
                {/*<Modal.Footer>*/}
                {/*    <Button variant="secondary" onClick={handleClose}>*/}
                {/*        Close*/}
                {/*    </Button>*/}
                {/*    <Button variant="primary">Understood</Button>*/}
                {/*</Modal.Footer>*/}
            </Modal>
        </>
    );
}
