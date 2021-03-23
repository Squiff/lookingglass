import { useState } from 'react';
import Button from '../lib/components/Button';
import Modal from '../lib/components/Modal';
import Flex from '../lib/components/Flex';
import Lookingglass from '../lib/components/Lookingglass';

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
            <Modal {...args} show={show} onClose={toggleShow} aria-label="Modal Example">
                <h5>Modal Content</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi unde nulla est aspernatur iusto ex
                    cum magni nihil vitae! A.
                </p>
                <Button color="error" block={true} onClick={toggleShow}>
                    Close
                </Button>
            </Modal>
            <Button block color="info" onClick={toggleShow}>
                Show Modal
            </Button>
        </>
    );
};

AllProps.parameters = {
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
            <Modal {...args} show={show} onClose={toggleShow} closeOnClick={false} aria-label="Delete Confirmation">
                <Lookingglass div fontWeight="600" paddingX="1" marginBottom="2">
                    Are you sure you want to delete
                </Lookingglass>
                <Flex wrap="nowrap">
                    <Lookingglass marginRight="1">
                        <Button color="success" onClick={toggleShow} size="s" block>
                            Cancel
                        </Button>
                    </Lookingglass>
                    <Button color="error" onClick={toggleShow} size="s" block>
                        Delete
                    </Button>
                </Flex>
            </Modal>
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

/* ---------- MaxWidth ----------- */
export const Sizing = (args) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    const modalStyle = {
        maxWidth: '750px',
    };

    return (
        <>
            <Modal style={modalStyle} show={show} onClose={toggleShow} aria-label="Size Example">
                <h5>Modal Header</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id officia unde amet voluptates sit
                    doloremque commodi quo? Ab ducimus officiis veniam officia inventore totam similique sit nihil,
                    culpa facilis obcaecati quia suscipit nulla ad excepturi esse in consectetur. Tempora, beatae sint
                    possimus quam deleniti temporibus culpa quasi blanditiis eligendi pariatur, repellendus ipsum. Enim
                    optio voluptatum libero, aspernatur blanditiis id incidunt natus consectetur distinctio iste ab ad,
                    quos laborum earum eligendi! Dicta maxime excepturi ab ut provident sint, aliquam eius saepe
                    nesciunt odio praesentium numquam iure eligendi at molestiae dolorum ducimus non perferendis sunt
                    perspiciatis cumque ipsa temporibus. Porro laborum veritatis numquam. Excepturi officia, maiores
                    molestias totam minus quas cum voluptatibus laboriosam eum cupiditate molestiae facilis, non
                    mollitia error deleniti asperiores nam quidem exercitationem, aperiam numquam. Dolore illum dolorum,
                    soluta quas, ut ex earum perspiciatis impedit nisi, eos animi veritatis hic? Nobis perferendis ea
                    nulla quia distinctio mollitia molestiae vel necessitatibus debitis dolore deserunt quos doloremque,
                    voluptate quaerat! Dolorem magni ab odio vel. Voluptate eos error recusandae id dolorum doloribus
                    beatae itaque aperiam, ratione suscipit aut iure, porro culpa deleniti unde? Odit eveniet, vel non
                    quisquam perferendis ipsum, maiores quis alias harum nesciunt a, aliquid illum laboriosam qui culpa
                    quae sint!
                </p>

                <Button color="error" onClick={toggleShow} size="s" btnStyle="outline" block>
                    Close
                </Button>
            </Modal>
            <Button color="info" block size="s" onClick={toggleShow}>
                Open Modal
            </Button>
        </>
    );
};

Sizing.parameters = {
    docs: {
        source: {
            type: 'code', // shows event handlers correcly in the docs
        },
    },
};
