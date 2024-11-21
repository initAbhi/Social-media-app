import React, { useState } from 'react';
import { Toast, ToastContainer, Button } from 'react-bootstrap';

const ToastExample = () => {
    const [show, setShow] = useState(false);

    const toggleShow = () => setShow(!show);

    return (
        <>
            <Button onClick={toggleShow}>
                Toggle Toast
            </Button>
            <ToastContainer position="bottom-start" className="p-3">
                <Toast show={show} onClose={toggleShow} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Home</strong>
                        <small>Just now</small>
                    </Toast.Header>
                    <Toast.Body>Post Created</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
};

export default ToastExample;
