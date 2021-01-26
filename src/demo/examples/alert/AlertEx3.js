import React from 'react';
import Alert from '/src/lib/components/alert';

function AlertEx3() {
    return (
        <div>
            <p>
                By adding onClose={'{true}'} we add a close button that will
                close the alert when clicked
            </p>
            <Alert color="primary" onClose={true}>
                This Alert has a close button
            </Alert>
        </div>
    );
}

export default AlertEx3;
