import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import "./notification-modal.scss"

export default function Notification(options) {
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
                // backdrop="static"
                keyboard={false}
                dialogClassName="notification-modal"
                scrollable={true}
            >
                {/*<Modal.Header closeButton>*/}
                {/*    <Modal.Title>Modal title</Modal.Title>*/}
                {/*</Modal.Header>*/}
                <Modal.Body>
                    {options.content}
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
