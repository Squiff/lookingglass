import React from 'react';
import Button from '/src/lib/components/Button';

function ButtonEx3() {
    return (
        <>
            <Button btnStyle="none">No Styling</Button>
            <Button btnStyle="none" disabled>
                Disabled
            </Button>
        </>
    );
}

export default ButtonEx3;
