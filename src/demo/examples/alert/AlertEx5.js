import React, { useState } from 'react';
import Alert from '/src/lib/components/alert';

function AlertEx5() {
    const [show, setShow] = useState(true);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <>
            <p>
                If you are using show to control visibility, you can pass an
                onclick handler to the onClose Prop
            </p>
            <Alert color="info" show={show} onClose={toggleShow}>
                Close this Alert via the button below or through the alert close
                button
            </Alert>
            <button onClick={toggleShow}>Toggle Show</button>
        </>
    );
}

export default AlertEx5;
