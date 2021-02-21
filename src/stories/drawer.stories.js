import { useState } from 'react';
import Button from '../lib/components/Button';
import Drawer from '../lib/components/Drawer';

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

/* -------- ALL PROPS ---------------- */
export const AllProps = (args) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)} btnStyle="none">
                Open Drawer
            </Button>
            <Drawer {...args} show={open} onClose={() => setOpen(false)}>
                <div className="p--2">
                    <h2>DRAWER CONTENT</h2>
                    <Button onClick={() => setOpen(false)} block={true} color="primary">
                        Close Drawer
                    </Button>
                </div>
            </Drawer>
        </>
    );
};

AllProps.args = {
    direction: 'left',
};

AllProps.parameters = {
    docs: {
        source: {
            type: 'code', // shows event handlers correcly in the docs
        },
    },
};

/* -------- Scrolling ---------------- */
export const Scrolling = (args) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)} btnStyle="none">
                Open Drawer
            </Button>
            <Drawer direction="left" show={open} onClose={() => setOpen(false)}>
                <div style={{ height: '150vh', backgroundColor: '#eeeeee', padding: '20px' }}>
                    <h2>DRAWER CONTENT</h2>
                </div>
                <Button onClick={() => setOpen(false)} block={true} color="primary">
                    Close Drawer
                </Button>
            </Drawer>
        </>
    );
};

Scrolling.parameters = {
    docs: {
        source: {
            type: 'code', // shows event handlers correcly in the docs
        },
    },
};
