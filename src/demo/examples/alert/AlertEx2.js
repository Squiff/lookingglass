import React from 'react';
import Alert from '/src/lib/components/alert';

function AlertEx2() {
    const style = { marginBottom: '10px' };

    return (
        <>
            <Alert color="primary" alertStyle="solid" style={style}>
                This is a primary alert
            </Alert>
            <Alert color="secondary" alertStyle="solid" style={style}>
                This is a secondary alert
            </Alert>
            <Alert color="success" alertStyle="solid" style={style}>
                This is a success alert
            </Alert>
            <Alert color="error" alertStyle="solid" style={style}>
                This is an error alert
            </Alert>
            <Alert color="warning" alertStyle="solid" style={style}>
                This is a warning alert
            </Alert>
            <Alert color="info" alertStyle="solid" style={style}>
                This is an info alert
            </Alert>
        </>
    );
}

export default AlertEx2;
