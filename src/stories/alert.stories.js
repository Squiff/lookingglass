import { useState } from 'react';
import Alert from '../lib/components/Alert';
import Button from '../lib/components/Button';
import Lookingglass from '../lib/components/Lookingglass';
import { cleanArgs, themeColors } from './helpers/utils';

const tableDisable = { table: { disable: true } };
const tableEnable = { table: { disable: false } };

export const argTypes = {
    color: {
        control: {
            type: 'select',
            options: themeColors,
        },
    },
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

const Spacer = () => <Lookingglass div margin="2" />;

/* -------- ALL PROPS ---------------- */
export const AlertProps = (args) => {
    const props = cleanArgs(args);

    return (
        <Alert {...props}>
            <Alert.Header>Alert Header</Alert.Header>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat adipisci eligendi tempore, ullam sapiente
            officiis!
        </Alert>
    );
};

AlertProps.args = {
    color: 'success',
};

AlertProps.parameters = {
    options: { showPanel: true },
};

/* --------  COLORS ---------------- */
export const Colors = (args) => (
    <>
        <Alert color="success">
            This is a success alert with a <a href="#">Link</a>
        </Alert>
        <Spacer />
        <Alert color="error">
            This is an error alert with a <a href="#">Link</a>
        </Alert>
        <Spacer />
        <Alert color="warning">
            This is a warning alert with a <a href="#">Link</a>
        </Alert>
        <Spacer />
        <Alert color="info">
            This is an info alert with a <a href="#">Link</a>
        </Alert>
        <Spacer />
        <Alert color="primary">
            This is a primary alert with a <a href="#">Link</a>
        </Alert>
    </>
);

/* --------  Headers ---------------- */
export const Header = (args) => (
    <>
        <Alert color="info">
            <Alert.Header>Info Alert Heading</Alert.Header>
            This is a success alert
        </Alert>
    </>
);

/* --------  Close Button ---------------- */
export const CloseButton = (args) => (
    <Alert color="error" closeBtn={true}>
        This Alert has a close button
    </Alert>
);

/* --------  Controlled ---------------- */
export const Controlled = (args) => {
    const [show, setShow] = useState(true);

    return (
        <>
            <Button btnStyle="none" hoverEffect="dark" onClick={() => setShow(false)}>
                Hide
            </Button>
            <Button btnStyle="none" hoverEffect="dark" onClick={() => setShow(true)}>
                Show
            </Button>
            <Spacer />
            <Alert color="error" show={show} onClose={() => setShow(false)} closeBtn>
                Use the buttons to show or hide the alert
            </Alert>
        </>
    );
};

Controlled.parameters = {
    docs: {
        source: {
            type: 'code', // shows event handlers correcly in the docs
        },
    },
};
