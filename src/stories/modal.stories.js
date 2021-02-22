import { useState } from 'react';
import Button from '../lib/components/Button';
import Modal from '../lib/components/Modal';

// export default {
//     component: Modal,
//     title: 'Modal',
// };

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
}

export const AllProps = (args) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Modal
                {...args}
                show={show}
                onClose={() => {setShow(false)}}>

                <h3>Modal Content</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi unde nulla est aspernatur iusto ex cum magni
                    nihil vitae! A.
                </p>
                <Button 
                    btnStyle="none"
                    block={true}
                    onClick={() => {setShow(false)}}>
                        Close
                </Button>
            </Modal>
            <Button
                onClick={() => {setShow(true)}}>
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

