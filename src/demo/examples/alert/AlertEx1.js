import React from 'react';
import Alert from '/src/lib/components/alert';

function AlertEx1() {
    const style = { marginBottom: '10px' };

    return (
        <>
            <Alert color="primary" style={style}>
                This is a primary alert
            </Alert>
            <Alert color="secondary" style={style}>
                This is a secondary alert
            </Alert>
            <Alert color="success" style={style}>
                This is a success alert
            </Alert>
            <Alert color="error" style={style}>
                This is an error alert
            </Alert>
            <Alert color="warning" style={style}>
                This is a warning alert
            </Alert>
            <Alert color="info" style={style}>
                This is an info alert
            </Alert>
        </>
    );
}

export default AlertEx1;
