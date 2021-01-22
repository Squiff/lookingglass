import React from 'react';
import Component1 from '../lib/components/Component1';

import '../lib/sass/main.scss';

function DemoApp() {
    let spreaders = { x: 'x', y: 'y', z: 'z' };
    return (
        <div>
            <h1>H1</h1>
            <h2>H2</h2>
            <h3>H3</h3>
            <h4>H4</h4>
            <h5>H5</h5>
            <h6>H6</h6>
            <Component1 />
        </div>
    );
}

export default DemoApp;
