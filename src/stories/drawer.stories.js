import { useState } from 'react';
import Button from '../lib/components/Button';
import Drawer from '../lib/components/Drawer';

export default {
    component: Drawer,
    title: 'Drawer',
};

const TemplateBasic = (args) => (
    <>
        <h5>Toggle show prop and review callbacks in the Action tab</h5>
        <Drawer {...args}>
            <div className="p--2">
                <h2>DRAWER CONTENT</h2>
            </div>
        </Drawer>
    </>
);

const TemplateButton = (args) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Drawer</Button>

            <Drawer show={open} onClose={() => setOpen(!open)} {...args}>
                <div className="p--2">
                    <h2>DRAWER CONTENT</h2>
                </div>
            </Drawer>
        </>
    );
};

export const Basic = TemplateButton.bind({});
Basic.args = {
    direction: 'left',
};

Basic.argTypes = {
    closeOnClick: { table: { disable: true } },
};

export const Callbacks = TemplateBasic.bind({});

Callbacks.args = {
    direction: 'left',
    show: false,
};

Callbacks.argTypes = {
    onClose: { action: 'OnClose Fired' },
    onClosed: { action: 'onClosed Fired' },
    onOpened: { action: 'onOpened Fired' },
};
