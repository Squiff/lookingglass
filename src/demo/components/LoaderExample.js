import React from 'react';
import LoaderEx2 from '../examples/loader/LoaderEx2';
import LoaderEx3 from '../examples/loader/LoaderEx3';

function LoaderExample() {
    return (
        <div className="container">
            <h1>Loaders</h1>
            <p>
                Loaders are a helpful switch component that are used to display
                their children based on one of three statuses: Complete, loading
                and Error
            </p>
            <ul>
                By default the loader will display:
                <li>Complete: all children</li>
                <li>Loading: A spinner that is centered in it's container</li>
                <li>Error: Nothing</li>
                <li>null: when status is null it will never display</li>
            </ul>
            <LoaderEx2 />

            <h2>Displaying Custom Components</h2>
            <p>
                You can provide custom components for loader to display for each
                status
            </p>
            <LoaderEx3 />
        </div>
    );
}

export default LoaderExample;
