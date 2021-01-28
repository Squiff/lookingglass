import React from 'react';
import Button from '/src/lib/components/Button';

function ButtonEx1() {
    const style = { marginRight: '10px' };

    return (
        <>
            <Button color="primary" style={style} shadow={true}>
                Button 1
            </Button>
            <Button color="secondary" style={style}>
                Button 1
            </Button>
            <Button color="success" style={style}>
                Button 1
            </Button>
            <Button color="error" style={style}>
                Button 1
            </Button>
            <Button color="warning" style={style}>
                Button 1
            </Button>
            <Button color="info" style={style} disabled>
                Button 1
            </Button>
        </>
    );
}

export default ButtonEx1;
