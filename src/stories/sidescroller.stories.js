import { useState } from 'react';
import Tabs from '../lib/components/Tabs';
import Button from '../lib/components/Button';
import Card from '../lib/components/Card';
import Flex from '../lib/components/Flex';
import SideScroller from '../lib/components/SideScroller';
import LG from '../lib/components/Lookingglass';

export const argTypes = {};

function Content() {
    return (
        <LG marginTop="4" marginBottom="4">
            <Flex wrap="nowrap" cols="4">
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
            </Flex>
        </LG>
    );
}

function ContentCard({ children }) {
    return (
        <LG
            marginRight="3"
            padding="5"
            shadow="2"
            backgroundColor="primary-d3"
            borderRadius="2"
            div
            className="testcard"
            style={{ height: '100px' }}
        />
    );
}

/* -------- ALL PROPS ---------------- */
export const AllProps = (args) => (
    <SideScroller {...args}>
        <Content />
    </SideScroller>
);
