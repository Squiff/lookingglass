import React, { useRef, useState } from 'react';

import TabEx1 from '../examples/tabs/TabEx1';
import TabEx2 from '../examples/tabs/TabEx2';

function TabsExample() {
    return (
        <div className="container">
            <h2>Tabs</h2>
            <p>
                Tabs are composed of Tab and Panel Components. Each component
                should be uniquely identified with the tabId prop.
            </p>
            <TabEx1 />
            <h2>Controlled Tabs</h2>
            <p>
                By assigning an "active" prop, Tabs becomes a controlled
                component. The tab with tabId = active will be displayed.
                <br />
                The onChange callback will be fired when a tab is clicked.
            </p>
            <TabEx2 />
        </div>
    );
}

export default TabsExample;
