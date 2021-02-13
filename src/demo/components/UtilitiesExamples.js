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
            <h2>Margin &amp; padding</h2>
            <Lookingglass padding="3" margin="3">
                <div>MARGIN AND PADDING</div>
            </Lookingglass>
            <h2>Color</h2>
            <Lookingglass backgroundColor="primary-l4" color="primary-d1">
                <div>BACKGROUND AND TEXT COLOR</div>
            </Lookingglass>

            <h2>Border</h2>
            <ul>
                Utility classes are included for:
                <li>Border Width</li>
                <li>Border Color</li>
                <li>Border Radius</li>
            </ul>

            <Lookingglass border="2" borderLeft={5} borderColor="warning" borderRadius="rounded">
                <div>BORDER WIDTH/COLOR/RADIUS</div>
            </Lookingglass>

            <h2>Shadow</h2>
            <p>Shadow takes a value from 0 to 24. A higher number represents a higher elevation.</p>
            <Lookingglass shadow="2">
                <div>shadow</div>
            </Lookingglass>

            <div style={{ height: '200px' }}></div>
        </div>
    );
}

export default UtilitiesExamples;
