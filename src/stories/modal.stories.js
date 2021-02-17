import { useState } from 'react';
import Button from '../lib/components/Button';
import Modal from '../lib/components/Modal';

export default {
    component: Modal,
    title: 'Modal',
};

const StoryBookContent = () => (
    <div>
        <h3>Modal Content</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi unde nulla est aspernatur iusto ex cum magni
            nihil vitae! A.
        </p>
    </div>
);

const TemplateButton = (args) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Modal
                show={show}
                onClose={() => {
                    setShow(false);
                }}
            >
                <StoryBookContent />
            </Modal>
            <Button
                onClick={() => {
                    setShow(true);
                }}
            >
                Show Modal
            </Button>
        </>
    );
};

const Template = (args) => (
    <>
        <h5>Toggle the show prop and review callbacks in the Actions tab</h5>
        <Modal {...args}>
            <StoryBookContent />
        </Modal>
    </>
);

export const Basic = TemplateButton.bind({});
Basic.argTypes = {
    closeOnClick: { table: { disable: true } },
};

export const Callbacks = Template.bind({});

Callbacks.args = {
    show: false,
};

Callbacks.argTypes = {
    onClose: { action: 'OnClose Fired' },
    onClosed: { action: 'onClosed Fired' },
    onOpened: { action: 'onOpened Fired' },
};
