import React from 'react';
import Button from '/src/lib/components/Button';

function ButtonEx2() {
    const style = { marginRight: '10px' };

    return (
        <div>
            <Button color="primary" btnStyle="outline" style={style}>
                Primary
            </Button>
            <Button color="secondary" btnStyle="outline" style={style}>
                Secondary
            </Button>
            <Button color="success" btnStyle="outline" style={style}>
                Success
            </Button>
            <Button color="error" btnStyle="outline" style={style}>
                Error
            </Button>
            <Button color="warning" btnStyle="outline" style={style}>
                Warning
            </Button>
            <Button color="info" btnStyle="outline" style={style} disabled>
                Info
            </Button>
        </div>
    );
}

export default ButtonEx2;
