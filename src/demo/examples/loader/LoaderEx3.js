import React, { useState } from 'react';
import Button from '../../../lib/components/Button';
import Loader from '../../../lib/components/Loader';
import Spinner from '../../../lib/components/Spinner';
import Alert from '/src/lib/components/alert';

function LoaderEx3() {
    const [status, setStatus] = useState(null);

    function handleClick(succeed) {
        setStatus('loading');

        if (succeed) {
            setTimeout(() => {
                setStatus('complete');
            }, 1500);
        } else {
            setTimeout(() => {
                setStatus('error');
            }, 1500);
        }
    }

    return (
        <div>
            <Loader status={status}>
                <Loader.Complete>
                    <Alert color="success">Loading Complete</Alert>
                </Loader.Complete>
                <Loader.Loading>
                    <div>
                        <Spinner size="s" color="primary" />
                    </div>
                </Loader.Loading>
                <Loader.Error>
                    <Alert color="error">Oops there was a problem</Alert>
                </Loader.Error>
            </Loader>
            <Button
                onClick={() => {
                    handleClick(true);
                }}
            >
                Click to Succeed
            </Button>
            <Button
                onClick={() => {
                    handleClick(false);
                }}
            >
                Click to Fail
            </Button>
        </div>
    );
}

export default LoaderEx3;
