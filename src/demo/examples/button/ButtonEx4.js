import React from 'react';
import Button from '/src/lib/components/Button';

function ButtonEx4() {
    const style = { marginRight: '10px' };

    return (
        <div>
            <Button size="s" color="primary" style={style}>
                Small
            </Button>
            <Button color="primary" style={style}>
                Normal
            </Button>
            <Button size="l" color="primary" style={style}>
                Large
            </Button>
        </div>
    );
}

export default ButtonEx4;
