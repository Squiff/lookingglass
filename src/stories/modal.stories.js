import { useState } from 'react';
import Button from '../lib/components/Button';
import Modal from '../lib/components/Modal';
import Flex from '../lib/components/Flex';
import CSS from '../lib/components/CSS';
import BodyPortal from './helpers/BodyPortal';

export const argTypes = {
    show: { control: null },
    onClose: {
        table: {
            category: 'Events',
        },
    },
    onClosed: {
        table: {
            category: 'Events',
        },
    },
    onOpened: {
        table: {
            category: 'Events',
        },
    },
};

export const AllProps = (args) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <>
            <BodyPortal>
                <Modal {...args} show={show} onClose={toggleShow} aria-label="Modal Example">
                    <h5>Modal Content</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi unde nulla
                        est aspernatur iusto ex cum magni nihil vitae! A.
                    </p>
                    <Button color="error" btnStyle="outline" block={true} onClick={toggleShow}>
                        Close
                    </Button>
                </Modal>
            </BodyPortal>
            <Button block color="info" onClick={toggleShow}>
                Show Modal
            </Button>
        </>
    );
};

AllProps.parameters = {
    options: { showPanel: true },
    docs: {
        source: {
            type: 'code', // shows event handlers correcly in the docs
        },
    },
};

/* ---------- Closing ----------- */
export const Closing = (args) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <>
            <BodyPortal>
                <Modal
                    {...args}
                    show={show}
                    onClose={toggleShow}
                    closeOnClick={false}
                    aria-label="Delete Confirmation"
                >
                    <CSS div fontWeight="600" paddingX="1" marginBottom="3">
                        Are you sure you want to delete
                    </CSS>
                    <Flex wrap="nowrap">
                        <CSS marginRight="3">
                            <Button
                                color="success"
                                btnStyle="outline"
                                onClick={toggleShow}
                                size="s"
                                block
                            >
                                Cancel
                            </Button>
                        </CSS>
                        <Button
                            color="error"
                            btnStyle="outline"
                            onClick={toggleShow}
                            size="s"
                            block
                        >
                            Delete
                        </Button>
                    </Flex>
                </Modal>
            </BodyPortal>
            <Button color="error" onClick={toggleShow}>
                Delete
            </Button>
        </>
    );
};

Closing.parameters = {
    docs: {
        source: {
            type: 'code', // shows event handlers correcly in the docs
        },
    },
};
