import React from 'react';
import Spinner from '../../lib/components/Spinner';

const ExampleStyle = {
    border: '1px solid #eeeeee',
};

function SpinnerExample() {
    return (
        <div className="container">
            <h1>Spinners</h1>
            <p>A Spinner will use it's current text color</p>
            <div style={ExampleStyle}>
                <Spinner color="primary" />
                <Spinner color="secondary" />
                <Spinner color="error" />
                <Spinner color="info" />
            </div>
            <h4>With Halo</h4>
            <div style={ExampleStyle}>
                <Spinner halo={true} color="primary" />
                <Spinner halo={true} color="secondary" />
                <Spinner halo={true} color="error" />
                <Spinner halo={true} color="info" />
            </div>
            <h4>Size Variants</h4>
            <div style={ExampleStyle}>
                <Spinner color="info" size="s" />
                <Spinner color="info" />
                <Spinner color="info" size="l" />
            </div>
            <h4>With Rotation</h4>
            <div style={ExampleStyle}>
                <Spinner color="info" rotate={true} />
                <Spinner color="error" rotate={true} halo={true} />
            </div>
            <h4>With Custom style</h4>
            You can also pass classNames or styles to set the width/height/color
            directly
            <div style={ExampleStyle}>
                <Spinner
                    // color="error"
                    rotate={true}
                    halo={true}
                    style={{
                        height: '2.5rem',
                        width: '2.5rem',
                        color: 'hotpink',
                    }}
                />
            </div>
        </div>
    );
}

export default SpinnerExample;
