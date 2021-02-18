import Alert from '../lib/components/Alert';

export default {
    component: Alert,
    title: 'Alert',
};

const Template = (args) => <Alert></Alert>;

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

export const CloseButton = (args) => (
    <Alert color="primary" onClose={true}>
        This Alert has a close button
    </Alert>
);

export const Controlled = (args) => (
    <Alert color="error" {...args}>
        Use the show prop to toggle the alert
    </Alert>
);

Controlled.args = {
    show: true,
};
