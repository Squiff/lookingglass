import { useState } from 'react';
import Tabs from '../lib/components/Tabs';
import Button from '../lib/components/Button';


export const argTypes = {
    active: {control: null},
    tabId: {control: true, 
        description:'ID set on the Tab and Panel Subcomponents',
        table: {
        category: 'Subcomponent',
        type: {summary: 'any'}
    },}
}

/* -------- ALL PROPS ---------------- */
export const AllProps = (args) => (
    <Tabs>
        <Tabs.Tab tabId="1">Tab 1</Tabs.Tab>
        <Tabs.Tab tabId="2">Tab 2</Tabs.Tab>
        <Tabs.Tab tabId="3">Tab 3</Tabs.Tab>
        <Tabs.Tab tabId="4">Tab 4</Tabs.Tab>

        <Tabs.Panel tabId="1">
            <h2>Panel 1</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, repellendus blanditiis voluptas quaerat
                nemo molestias ipsum vitae deleniti esse fuga voluptatem quos autem consequuntur eveniet magni
                consequatur et enim nulla.
            </p>
        </Tabs.Panel>
        <Tabs.Panel tabId="2">
            <h2>Panel 2</h2>
        </Tabs.Panel>
        <Tabs.Panel tabId="3">
            <h2>Panel 3</h2>
        </Tabs.Panel>
        <Tabs.Panel tabId="4">
            <h2>Panel 4</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere omnis modi quia quae fuga voluptatum
                maxime eaque sunt, iure iusto. Molestiae quod facere aliquam doloribus dolore et tempora debitis
                aliquid!
            </p>
        </Tabs.Panel>
    </Tabs>
);

AllProps.parameters = {
    options: {showPanel: true}
}


/* -------- CONTROLLED ---------------- */
export const Controlled = (args) => {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <Tabs active={activeTab} onChange={(tabId) => setActiveTab(tabId)}>
            <Tabs.Tab tabId="1">Tab 1</Tabs.Tab>
            <Tabs.Tab tabId="2">Tab 2</Tabs.Tab>
            <Tabs.Tab tabId="3">Tab 3</Tabs.Tab>
            <Tabs.Panel tabId="1">
                <h5>Click Tab or the button</h5>
                <Button onClick={() => {setActiveTab('2')}} color="primary">Go to tab 2</Button>
            </Tabs.Panel>
            <Tabs.Panel tabId="2">
                <h5>Click Tab or the button</h5>
                <Button onClick={() => {setActiveTab('3')}} color="primary">Go to tab 3</Button>
            </Tabs.Panel>
            <Tabs.Panel tabId="3">
                <h5>Click Tab or the button</h5>
                <Button onClick={() => {setActiveTab('1')}} color="primary">Go to tab 1</Button>
            </Tabs.Panel>
        </Tabs>
    );
};

Controlled.parameters = {
    options: {showPanel: false},
    // show hooks in source view
    docs: {
        source: {
            type: 'code',
        },
    },
};
