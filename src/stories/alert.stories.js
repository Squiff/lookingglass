import { useState } from 'react';
import Alert from '../lib/components/Alert';
import Button from '../lib/components/Button';
import { themeColors } from './helpers/utils';

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
    alertStyle: {
        control: {
            type: 'radio',
            options: ['default', 'solid'],
        },
        ...tableDisable,
    },
    show: { control: 'none', ...tableDisable },
    onClose: { ...tableDisable },
};

/**
 * Storybook controls do not allow an arg/prop to be set to undefined once a value has been selected
 * Workaround is to define a value that represents the default state
 * i.e. alertStyle = 'default' really means alertStyle = undefined
 */
function alertArgs(args) {
    const output = { ...args };

    if (args.alertStyle === 'default') {
        output.alertStyle = undefined;
    }

    return output;
}

/* -------- ALL PROPS ---------------- */
export const AllProps = (args) => {
    const props = alertArgs(args);

    return <Alert {...props}>Try updating the props in the controls below</Alert>;
};

AllProps.args = {
    color: 'primary',
    alertStyle: 'default',
};

AllProps.argTypes = {
    color: { ...tableEnable },
    alertStyle: { ...tableEnable },
    show: { ...tableEnable },
    onClose: { ...tableEnable },
};

AllProps.Name = 'All Properties';

/* --------  COLORS ---------------- */
export const Colors = (args) => (
    <>
        <Alert color="primary">This is a primary alert</Alert>
        <Alert color="secondary">This is a secondary alert</Alert>
        <Alert color="success">This is a success alert</Alert>
        <Alert color="error">This is an error alert</Alert>
        <Alert color="warning">This is a warning alert</Alert>
        <Alert color="info">This is an info alert</Alert>
    </>
);

/* --------  SOLID COLORS ---------------- */
export const Solid = (args) => (
    <>
        <Alert color="primary" alertStyle="solid">
            This is a primary alert
        </Alert>
        <Alert color="secondary" alertStyle="solid">
            This is a secondary alert
        </Alert>
        <Alert color="success" alertStyle="solid">
            This is a success alert
        </Alert>
        <Alert color="error" alertStyle="solid">
            This is an error alert
        </Alert>
        <Alert color="warning" alertStyle="solid">
            This is a warning alert
        </Alert>
        <Alert color="info" alertStyle="solid">
            This is an info alert
        </Alert>
    </>
);

/* --------  Close Button ---------------- */
export const CloseButton = (args) => (
    <Alert color="primary" closeBtn={true}>
        This Alert has a close button
    </Alert>
);

/* --------  Controlled ---------------- */
export const Controlled = (args) => {
    const [show, setShow] = useState(true);

    return (
        <>
            <Button onClick={() => setShow(false)}>Hide</Button>
            <Button onClick={() => setShow(true)}>Show</Button>

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
