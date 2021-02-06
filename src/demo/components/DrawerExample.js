import React, { useEffect, useRef, useState } from 'react';
import Button from '../../lib/components/Button';
import Drawer from '../../lib/components/Drawer';

const spacerStyle = {
    backgroundColor: '#eeeeee',
    height: '700px',
    fontSize: '28px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50px',
};

const demoContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50px',
    border: '1px solid #eeeeee',
    padding: '50px 0',
};

function DrawerExample() {
    const [open, setOpen] = useState(false);
    const [direction, setDirection] = useState('left');

    let drawerContentStyle = { padding: '20px' };
    let drawerContent;
    switch (direction) {
        case 'left':
            drawerContentStyle.width = '350px';
            drawerContent = 'Out of left Field';
            break;
        case 'right':
            drawerContentStyle.width = '350px';
            drawerContent = 'Right as rain';
            break;
        case 'top':
            drawerContentStyle.height = '250px';
            drawerContent = 'Top of the Morning';

            break;
        case 'bottom':
            drawerContentStyle.height = '250px';
            drawerContent = 'Bottoms Up!';
            break;
        default:
    }

    return (
        <div className="container">
            <h1>Drawers</h1>
            <p>
                Use the dropdown to control the direction the drawer should
                appear from.
            </p>
            <div style={demoContainerStyle}>
                <select
                    name="direction"
                    onChange={(e) => setDirection(e.target.value)}
                    value={direction}
                >
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                </select>
                <Button onClick={() => setOpen(true)}>Open Drawer</Button>
            </div>
            <div style={spacerStyle}> Spacer to demonstrate scroll removal</div>

            <Drawer
                show={open}
                direction={direction}
                onClose={() => setOpen(!open)}
            >
                <div style={drawerContentStyle}>
                    <h2>{drawerContent}</h2>
                </div>
            </Drawer>
        </div>
    );
}

export default DrawerExample;
