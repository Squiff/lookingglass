import React, { useState } from 'react';
import Button from '../../../lib/components/Button';
import Tabs from '../../../lib/components/Tabs';

function TabEx2() {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <Tabs active={activeTab} onChange={(tabId) => setActiveTab(tabId)}>
            <Tabs.Tab tabId="1">Tab 1</Tabs.Tab>
            <Tabs.Tab tabId="2">Tab 2</Tabs.Tab>
            <Tabs.Tab tabId="3">Tab 3</Tabs.Tab>
            <Tabs.Panel tabId="1">
                <div>Click Tab or the button</div>
                <Button
                    onClick={() => {
                        setActiveTab('2');
                    }}
                >
                    Go to tab 2
                </Button>
            </Tabs.Panel>
            <Tabs.Panel tabId="2">
                <div>Click Tab or the button</div>
                <Button
                    onClick={() => {
                        setActiveTab('3');
                    }}
                >
                    Go to tab 3
                </Button>
            </Tabs.Panel>
            <Tabs.Panel tabId="3">
                <div>Click Tab or the button</div>
                <Button
                    onClick={() => {
                        setActiveTab('1');
                    }}
                >
                    Go to tab 1
                </Button>
            </Tabs.Panel>
        </Tabs>
    );
}

export default TabEx2;
