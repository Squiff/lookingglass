import Switch from '../lib/components/Switch';
import Alert from '../lib/components/Alert';
import Spinner from '../lib/components/Spinner';

export const argTypes = {
    value: {
        control: { type: 'select', options: ['success', 'error', 'loading'] },
    },
};

/* -------- All Props ---------------- */
export const AllProps = (args) => (
    <Switch {...args}>
        <Switch.Case value="success">
            <Alert color="success">Complete!</Alert>
        </Switch.Case>
        <Switch.Case value="error">
            <Alert color="error">Error!</Alert>
        </Switch.Case>
        <Switch.Case value="loading">
            <Spinner />
        </Switch.Case>
    </Switch>
);

AllProps.args = {
    value: 'success',
};

AllProps.parameters = {
    options: { showPanel: true },
};

//* -------- Booleans ---------------- */
export const Booleans = (args) => {
    const status = 'error';

    return (
        <Switch>
            <Switch.Case value={status === 'success'}>
                <Alert color="success">Complete!</Alert>
            </Switch.Case>
            <Switch.Case value={status === 'error'}>
                <Alert color="error">Error!</Alert>
            </Switch.Case>
            <Switch.Case value={status === 'loading'}>
                <Spinner />
            </Switch.Case>
        </Switch>
    );
};

Booleans.parameters = {
    docs: {
        source: {
            code: `
const status = 'error';

return (
    <Switch>
        <Switch.Case value={status === 'success'}>
            <Alert color="success">Complete!</Alert>
        </Switch.Case>
        <Switch.Case value={status === 'error'}>
            <Alert color="error">Error!</Alert>
        </Switch.Case>
        <Switch.Case value={status === 'loading'}>
            <Spinner />
        </Switch.Case>
    </Switch>
);`,
        },
    },
};

//* -------- SINGLE ---------------- */
export const Single = (args) => {
    return (
        <Switch single>
            <Switch.Case value={true}>
                <Alert color="success">Success</Alert>
            </Switch.Case>
            <Switch.Case value={true}>
                <Alert color="success">ONLY FIRST COMPONENT IS VISIBLE</Alert>
            </Switch.Case>
            <Switch.Case value={true}>
                <Alert color="success">ONLY FIRST COMPONENT IS VISIBLE</Alert>
            </Switch.Case>
        </Switch>
    );
};

//* -------- SINGLE ---------------- */
export const Fallback = (args) => {
    const error = false;
    const loading = false;
    const content = 'Loading Complete. No Errors!';

    return (
        <Switch single>
            <Switch.Case value={error}>
                <Alert color="error">Error</Alert>
            </Switch.Case>
            <Switch.Case value={loading}>
                <Spinner />
            </Switch.Case>
            <Switch.Case fallback>
                <h5 color="success">{content}</h5>
            </Switch.Case>
        </Switch>
    );
};

// SB does not render booleans correctly
Fallback.parameters = {
    docs: {
        source: {
            code: `
const error = false;
const loading = false;
const content = 'Loading Complete. No Errors!';

return (
    <Switch single>
        <Switch.Case value={error}>
            <Alert color="error">Error</Alert>
        </Switch.Case>
        <Switch.Case value={loading}>
            <Spinner />
        </Switch.Case>
        <Switch.Case fallback>
            <h5>{content}</h5>
        </Switch.Case>
    </Switch>
);`,
        },
    },
};
