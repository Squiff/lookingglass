import Flex from '../lib/components/Flex';
import CSS from '../lib/components/CSS';
import { cleanArgs } from './helpers/utils';

export const argTypes = {
    cols: {
        control: {
            type: 'select',
            options: [
                'auto',
                'equal',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
            ],
        },
    },
    justify: {
        control: {
            type: 'select',
            options: ['default', 'center', 'start', 'end', 'between', 'around', 'evenly'],
        },
    },
    align: {
        control: {
            type: 'select',
            options: ['default', 'start', 'end', 'center', 'baseline'],
        },
    },
    direction: { control: { type: 'radio', options: ['default', 'columns'] } },
    wrap: { control: { type: 'radio', options: ['default', 'nowrap'] } },
};

const Content = ({ children }) => {
    return (
        <CSS
            div
            backgroundColor="primary"
            color="white"
            border="1"
            borderColor="dark"
            textAlign="center"
            padding="2"
        >
            {children}
        </CSS>
    );
};

const Template = (args) => {
    const cArgs = cleanArgs(args);

    return (
        <>
            <Flex {...cArgs}>
                <Flex.Child>
                    <Content>Child 1</Content>
                </Flex.Child>
                <Flex.Child>
                    <Content>Child 2</Content>
                </Flex.Child>
                <Flex.Child>
                    <Content>Child 3</Content>
                </Flex.Child>
                <Flex.Child>
                    <Content>Child 4</Content>
                </Flex.Child>
            </Flex>
        </>
    );
};

/* -------- ALL PROPS ---------------- */
export const AllProps = Template.bind({});

AllProps.args = {
    cols: 'equal',
};

AllProps.parameters = {
    options: { showPanel: true },
};

/* -------- Default ---------------- */
export const FlexDefault = Template.bind({});

/* -------- Equal Width ---------------- */
export const Equal = Template.bind({});

Equal.args = {
    cols: 'equal',
};

/* -------- Columns ---------------- */
export const Columns = Template.bind({});
Columns.args = { cols: '2' };

/* -------- Auto ---------------- */
export const Justify = Template.bind({});
Justify.args = { cols: 'auto', justify: 'center' };

/* --------------- RESPONSIVE FLEX ------------------- */

export const Responsive = Template.bind({});
Responsive.args = {
    cols: { s: '1', m: 'equal' },
};

/* --------------- FLEX CHILDREN ------------------- */
export const ChildrenColumns = (args) => (
    <Flex cols="1">
        <Flex.Child>
            <Content>Child 1</Content>
        </Flex.Child>
        <Flex.Child cols="8">
            <Content>Child 2</Content>
        </Flex.Child>
        <Flex.Child cols="4">
            <Content>Child 3</Content>
        </Flex.Child>
        <Flex.Child>
            <Content>Child 4</Content>
        </Flex.Child>
        <Flex.Child>
            <Content>Child 5</Content>
        </Flex.Child>
    </Flex>
);

/* --------------- RESPONSIVE FLEX CHILDREN ------------------- */
export const ResponsiveChildren = (args) => (
    <Flex cols="1">
        <Flex.Child>
            <Content>Child 1</Content>
        </Flex.Child>
        <Flex.Child cols={{ m: '6' }}>
            <Content>Child 2</Content>
        </Flex.Child>
        <Flex.Child cols={{ m: '6' }}>
            <Content>Child 3</Content>
        </Flex.Child>
        <Flex.Child>
            <Content>Child 4</Content>
        </Flex.Child>
    </Flex>
);
