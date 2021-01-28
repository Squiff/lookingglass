import React from 'react';
import Button from '../../lib/components/Button';
import ButtonEx1 from '../examples/button/ButtonEx1';
import ButtonEx2 from '../examples/button/ButtonEx2';
import ButtonEx3 from '../examples/button/ButtonEx3';
import ButtonEx4 from '../examples/button/ButtonEx4';

function ButtonExample() {
    return (
        <div className="container">
            <h1>Varieties</h1>
            <ButtonEx1 />
            <h1>Outline</h1>
            <ButtonEx2 />
            <h1>No Styling</h1>
            <ButtonEx3 />
            <h1>Sizes</h1>
            <ButtonEx4 />
        </div>
    );
}

export default ButtonExample;
