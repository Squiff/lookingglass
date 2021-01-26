import React, { useState } from 'react';
import Alert from '/src/lib/components/alert';

function AlertEx4() {
    const [show, setShow] = useState(true);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <div>
            <p>
                you can use the <span style={{ fontWeight: 'bold' }}>show</span>
                prop to control the alert visibility.
            </p>
            <Alert color="error" show={show}>
                Use the button below to toggle this alert
            </Alert>
            <button onClick={toggleShow}>Toggle Show</button>
        </div>
    );
}

export default AlertEx4;
