import Flex from '../lib/components/Flex';
import SideScroller from '../lib/components/SideScroller';
import CSS from '../lib/components/CSS';

export const argTypes = {};

function Content() {
    return (
        <CSS marginTop="4" marginBottom="4">
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
        </CSS>
    );
}

function ContentCard() {
    return (
        <CSS
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
