import Flex from '../lib/components/Flex';

const tableDisable = { table: { disable: true } };
const tableEnable = { table: { disable: false } };

export const argTypes = {
    cols: {
        control: {
            type: 'select',
            options: ['auto', 'equal', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        },
        ...tableDisable,
    },
    justify: { ...tableDisable },
    align: { ...tableDisable },
};

const Content = ({ children }) => {
    return <div className="bg--light bdr bdr--1 text-align--center p--2">{children}</div>;
};

const Template = (args) => (
    <Flex {...args}>
        <Flex.Child>
            <Content>Child 1</Content>
        </Flex.Child>
        <Flex.Child>
            <Content>Child 1</Content>
        </Flex.Child>
        <Flex.Child>
            <Content>Child 3</Content>
        </Flex.Child>
        <Flex.Child>
            <Content>Child 4</Content>
        </Flex.Child>
    </Flex>
);

/* -------- ALL PROPS ---------------- */
export const AllProps = Template.bind({});

AllProps.argTypes = {
    cols: { ...tableEnable },
    justify: { ...tableEnable },
    align: { ...tableEnable },
};

/* -------- Equal Width ---------------- */
export const Equal = Template.bind({});

/* -------- Columns ---------------- */
export const Columns = Template.bind({});
Columns.args = { cols: '2' };

/* -------- Auto ---------------- */
export const Auto = Template.bind({});
Auto.args = { cols: 'auto', justify: 'center' };

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
