import React from 'react';
import Button from '../../lib/components/Button';
import ButtonEx1 from '../examples/button/ButtonEx1';
import ButtonEx2 from '../examples/button/ButtonEx2';
import ButtonEx3 from '../examples/button/ButtonEx3';
import ButtonEx4 from '../examples/button/ButtonEx4';

function ButtonExample() {
    return (
        <div className="container">
            <h1>Button</h1>
            <h4>Varieties</h4>
            <ButtonEx1 />
            <h4>Outline</h4>
            <ButtonEx2 />
            <h4>No Styling</h4>
            <ButtonEx3 />
            <h4>Sizes</h4>
            <ButtonEx4 />
            <h4>Block</h4>
            <Button size="l" btnStyle="outline" color="primary" block={true}>
                Block Button
            </Button>
        </div>
    );
}

export default ButtonExample;
