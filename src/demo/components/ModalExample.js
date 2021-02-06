import React, { useState } from 'react';
import Button from '../../lib/components/Button';
import Modal from '../../lib/components/Modal';

function ModalExample() {
    const [show, setShow] = useState(false);

    return (
        <div className="container">
            <h1>Modals</h1>
            <Modal
                show={show}
                onClose={() => {
                    setShow(false);
                }}
            >
                <div>Modal Content</div>
            </Modal>
            <Button
                onClick={() => {
                    setShow(true);
                }}
            >
                Show Modal
            </Button>
        </div>
    );
}

export default ModalExample;
