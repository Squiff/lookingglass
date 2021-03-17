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
        ...tableDisable,
    },
    show: { control: 'none', ...tableDisable },
    onClose: { ...tableDisable },
};

const Spacer = () => <Lookingglass div margin="2" />;

/* -------- ALL PROPS ---------------- */
export const AllProps = (args) => {
    const props = cleanArgs(args);

    return <Alert {...props}>Try updating the props in the controls below</Alert>;
};

AllProps.args = {
    color: 'success',
};

AllProps.argTypes = {
    color: { ...tableEnable },
    show: { ...tableEnable },
    onClose: { ...tableEnable },
};

AllProps.Name = 'All Properties';

/* --------  COLORS ---------------- */
export const Colors = (args) => (
    <>
        <Alert color="success">This is a success alert</Alert>
        <Spacer />
        <Alert color="error">This is an error alert</Alert>
        <Spacer />
        <Alert color="warning">This is a warning alert</Alert>
        <Spacer />
        <Alert color="info">This is an info alert</Alert>
        <Spacer />
        <Alert color="primary">This is a primary alert</Alert>
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

            <Alert color="error" show={show} onClose={() => setShow(false)} closeBtn={true}>
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
