import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import "./theme-modal.scss"
import {AiOutlineClose} from "react-icons/ai";

export default function ThemeModal(options) {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        options.close(false)
    }
    const handleShow = () => setShow(true);

    // useEffect(() => {
    //     if (options.show) {
    //         document.body.style.overflowY = 'unset';
    //     } else {
    //         document.body.style.overflowY = 'unset';
    //     }
    // }, [options.show]);

    return (
        <>
            <Modal
                show={options.show}
                onHide={handleClose}
                // backdrop="static"
                keyboard={false}
                dialogClassName={`theme-modal ${options.className}`}
                size={options.size}
                backdrop="static"
                scrollable={options.scrollable}
                centered
            >
                {/*<Modal.Header closeButton>*/}
                {/*    <Modal.Title>Modal title</Modal.Title>*/}
                {/*</Modal.Header>*/}
                <Modal.Body>
                    <div className={'theme-modal-header'}>
                        <h3 style={{fontSize:options.headingSize}}>{options.modalHeading} <span onClick={handleClose} className={'modal-close'}><AiOutlineClose/></span></h3>
                    </div>
                    <div className={'theme-modal-body'}>
                        {options.children}
                    </div>
                    {/*<div className={'theme-modal-btns'}>*/}
                    {/*    <button className={'btn btn-text'} onClick={handleClose}>{options.cancelBTnText}</button>*/}
                    {/*    <button className={'btn btn-light-modal'}>{options.actionBTnText}</button>*/}
                    {/*</div>*/}
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
