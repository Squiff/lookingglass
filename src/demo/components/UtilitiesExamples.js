import React from 'react';
import Lookingglass from '../../lib/components/Lookingglass';

function UtilitiesExamples() {
    return (
        <div className="container">
            <h1>Utilities</h1>
            <p>A set of CSS utility classes are included for things like padding, margin, borders, colors.</p>
            <h2>Lookingglass</h2>
            <p>
                The Lookingglass Component is a utility that generates a set of class names based on the provided props
                and passes the classes to it's child.
                <br />
                Any classes that are already on the child will be merged
            </p>
            <h2>Border</h2>
            <ul>
                Utility classes are included for:
                <li>Border Width</li>
                <li>Border Color</li>
                <li>Border Radius</li>
            </ul>

            <Lookingglass border="2" borderLeft={5} borderColor="warning">
                <div>
                    I am lookingglass Content
                    <div>nested 1</div>
                </div>
            </Lookingglass>
        </div>
    );
}

export default UtilitiesExamples;
