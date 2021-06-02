import { useState } from 'react';
import Tabs from '../lib/components/Tabs';
import Button from '../lib/components/Button';

export const argTypes = {
    active: { control: null },
    tabId: {
        control: true,
        description: 'ID set on the Tab and Panel Subcomponents',
        table: {
            category: 'Subcomponent',
            type: { summary: 'any' },
        },
    },
};

function PanelContent({ header }) {
    return (
        <>
            <h2>{header}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quas neque aliquid
                inventore voluptate veniam obcaecati voluptas architecto dolor magni adipisci
                nesciunt illum fugit nostrum rerum explicabo, unde aperiam. Provident quae enim,
                commodi adipisci iste sed totam beatae perspiciatis repudiandae exercitationem
                fugiat rem et accusantium ut quisquam. Aspernatur, officia aut?
            </p>
        </>
    );
}

/* -------- ALL PROPS ---------------- */
export const AllProps = (args) => (
    <Tabs>
        <Tabs.Tab tabId="1">Tab One</Tabs.Tab>
        <Tabs.Tab tabId="2">Tab Two</Tabs.Tab>
        <Tabs.Tab tabId="3">Tab Three</Tabs.Tab>
        <Tabs.Tab tabId="4">Tab Four</Tabs.Tab>
        <Tabs.Panel tabId="1">
            <PanelContent header="Panel One" />
        </Tabs.Panel>
        <Tabs.Panel tabId="2">
            <PanelContent header="Panel Two" />
        </Tabs.Panel>
        <Tabs.Panel tabId="3">
            <PanelContent header="Panel Three" />
        </Tabs.Panel>
        <Tabs.Panel tabId="4">
            <PanelContent header="Panel Four" />
        </Tabs.Panel>
    </Tabs>
);

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
                <Button
                    onClick={() => {
                        setActiveTab('2');
                    }}
                    color="primary"
                >
                    Go to tab 2
                </Button>
            </Tabs.Panel>
            <Tabs.Panel tabId="2">
                <h5>Click Tab or the button</h5>
                <Button
                    onClick={() => {
                        setActiveTab('3');
                    }}
                    color="primary"
                >
                    Go to tab 3
                </Button>
            </Tabs.Panel>
            <Tabs.Panel tabId="3">
                <h5>Click Tab or the button</h5>
                <Button
                    onClick={() => {
                        setActiveTab('1');
                    }}
                    color="primary"
                >
                    Go to tab 1
                </Button>
            </Tabs.Panel>
        </Tabs>
    );
};

Controlled.parameters = {
    // show hooks in source view
    docs: {
        source: {
            type: 'code',
        },
    },
};

/* -------- Scrolling ---------------- */
export const Scrolling = (args) => {
    return (
        <Tabs>
            <Tabs.Tab tabId="1">Tab Item One</Tabs.Tab>
            <Tabs.Tab tabId="2">Tab Item Two</Tabs.Tab>
            <Tabs.Tab tabId="3">Tab Item Three</Tabs.Tab>
            <Tabs.Tab tabId="4">Tab Item Four</Tabs.Tab>
            <Tabs.Tab tabId="5">Tab Item Five</Tabs.Tab>
            <Tabs.Tab tabId="6">Tab Item Six</Tabs.Tab>
            <Tabs.Tab tabId="7">Tab Item Seven</Tabs.Tab>
            <Tabs.Tab tabId="8">Tab Item Eight</Tabs.Tab>
            <Tabs.Tab tabId="9">Tab Item Nine</Tabs.Tab>
            <Tabs.Tab tabId="10">Tab Item Ten</Tabs.Tab>
        </Tabs>
    );
};
