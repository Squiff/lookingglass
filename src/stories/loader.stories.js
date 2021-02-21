import { useState } from 'react';
import Loader from '../lib/components/Loader';
import Alert from '../lib/components/Alert';
import Button from '../lib/components/Button';
import Spinner from '../lib/components/Spinner';

/* -------- All Props ---------------- */
export const AllProps = (args) => (
    <Loader {...args}>
        <Loader.Complete>
            <h1>Status Complete</h1>
        </Loader.Complete>
        <Loader.Error>
            <h1>Status Error</h1>
        </Loader.Error>
    </Loader>
);

AllProps.args = {
    status: 'loading',
};

/* -------- Basic ---------------- */
export const basic = (args) => (
    <Loader>
        <h1>Success!</h1>
    </Loader>
);

/* -------- With Components ---------------- */
export const CustomComponents = (args) => {
    const [status, setStatus] = useState(null);

    const handleClick = (status) => {
        if (status !== 'loading') {
            setStatus('loading');
            setTimeout(() => {
                setStatus(status);
            }, 1000);
        }
    };

    return (
        <>
            <div>
                <Button
                    color="success"
                    onClick={() => {
                        handleClick('complete');
                    }}
                >
                    Succeed at Something
                </Button>
                <Button
                    color="error"
                    onClick={() => {
                        handleClick('error');
                    }}
                >
                    Fail at Something
                </Button>
            </div>
            <Loader status={status}>
                <Loader.Complete>
                    <Alert color="success">SUCCESS!</Alert>
                </Loader.Complete>
                <Loader.Loading>
                    <Spinner size="l" />
                </Loader.Loading>
                <Loader.Error>
                    <Alert color="error">Oops!</Alert>
                </Loader.Error>
            </Loader>
        </>
    );
};
