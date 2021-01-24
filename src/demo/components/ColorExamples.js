import React from 'react';
import Swatch from './Swatch';

function ColorExamples() {
    return (
        <>
            <h1>Theme Colors</h1>
            <div className="bg-primary color-example color-secondary">
                Primary background secondary text
            </div>
            <div className="bg-secondary color-example"></div>
            <div className="bg-success color-example"></div>
            <div className="bg-error color-example"></div>
            <div className="bg-warning color-example"></div>
            <div className="bg-info color-example"></div>
            <h1>Additional Colors</h1>
            <div className="bg-white color-example"></div>
            <div className="bg-black color-example"></div>
            <div className="bg-dark color-example"></div>
            <div className="bg-light color-example"></div>
            <h1>Color Variants</h1>
            <Swatch variant="primary" variantCount="4" />
            <Swatch variant="secondary" variantCount="4" />
        </>
    );
}

export default ColorExamples;
