import { useState } from 'react';
import Loader from '../lib/components/Loader';
import Alert from '../lib/components/Alert';
import Button from '../lib/components/Button';
import Progress from '../lib/components/Progress';
import Lookingglass from '../lib/components/Lookingglass';

/* -------- All Props ---------------- */
export const AllProps = (args) => (
    <Loader {...args}>
        <Loader.Complete>
            <Alert color="success">Complete!</Alert>
        </Loader.Complete>
        <Loader.Error>
            <Alert color="error">Error!</Alert>
        </Loader.Error>
    </Loader>
);

AllProps.args = {
    status: 'loading',
};

AllProps.parameters = {
    options: { showPanel: true },
};

/* -------- With Components ---------------- */

export const CustomComponents = (args) => {
    const [status, setStatus] = useState(null);

    const handleClick = (status) => {
        if (status !== 'loading') {
            setStatus('loading');
            setTimeout(() => {
                setStatus(status);
            }, 2000);
        }
    };

    return (
        <>
            <Lookingglass marginRight="1" marginBottom="2">
                <Button
                    color="success"
                    onClick={() => {
                        handleClick('complete');
                    }}
                >
                    Succeed at Something
                </Button>
            </Lookingglass>
            <Button
                color="error"
                onClick={() => {
                    handleClick('error');
                }}
            >
                Fail at Something
            </Button>

            <Loader status={status}>
                <Loader.Complete>
                    <Alert color="success">SUCCESS!</Alert>
                </Loader.Complete>
                <Loader.Loading>
                    <Progress indeterminate />
                </Loader.Loading>
                <Loader.Error>
                    <Alert color="error">Oops!</Alert>
                </Loader.Error>
            </Loader>
        </>
    );
};
