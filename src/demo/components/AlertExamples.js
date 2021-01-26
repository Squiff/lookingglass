import React from 'react';
import AlertEx1 from '../examples/alert/AlertEx1';
import AlertEx2 from '../examples/alert/AlertEx2';
import AlertEx3 from '../examples/alert/AlertEx3';
import AlertEx4 from '../examples/alert/AlertEx4';
import AlertEx5 from '../examples/alert/AlertEx5';

function AlertExamples() {
    return (
        <div className="container">
            <h1>Variations</h1>
            <AlertEx1 />
            <h1>Solid Variations</h1>
            <AlertEx2 />
            <h1>With Close Button</h1>
            <AlertEx3 />
            <h1>Visibility Control</h1>
            <AlertEx4 />

            <h1>Show &amp; onClose</h1>
            <AlertEx5 />
        </div>
    );
}

export default AlertExamples;

// add an optional closeButton
