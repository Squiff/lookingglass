import Flex from '../lib/components/Flex';

export default {
    component: Flex,
    title: 'Flex',
};

const FlexItem = ({ children }) => {
    return <div className="bg--light bdr bdr--1 text-align--center p--2">{children}</div>;
};

const Template = (args) => (
    <Flex {...args}>
        <Flex.Child>
            <FlexItem>Child 1</FlexItem>
        </Flex.Child>
        <Flex.Child>
            <div className="bg--light bdr bdr--1 text-align--center p--2">Child 2</div>
        </Flex.Child>
        <Flex.Child>
            <FlexItem>Child 3</FlexItem>
        </Flex.Child>
        <Flex.Child>
            <FlexItem>Child 4</FlexItem>
        </Flex.Child>
    </Flex>
);

export const Default = Template.bind({});

export const Stack = Template.bind({});
Stack.args = { type: 'stack' };

export const Columns = Template.bind({});
Columns.args = { cols: '2' };

export const Auto = Template.bind({});
Auto.args = { type: 'auto' };

/* --------------- RESPONSIVE FLEX ------------------- */

export const Responsive = Template.bind({});
Responsive.args = {
    s: { type: 'stack' },
    m: { type: 'equal' },
};

/* --------------- FLEX CHILDREN ------------------- */
const ChildrenTemplate = (args) => (
    <Flex>
        <Flex.Child cols="8">
            <FlexItem>Child 1</FlexItem>
        </Flex.Child>
        <Flex.Child {...args}>
            <FlexItem>Child 2</FlexItem>
        </Flex.Child>
        <Flex.Child cols="4">
            <FlexItem>Child 3</FlexItem>
        </Flex.Child>
        <Flex.Child cols="8">
            <FlexItem>Child 4</FlexItem>
        </Flex.Child>
    </Flex>
);

// combine columns and auto
export const ChildrenColumns = ChildrenTemplate.bind({});

ChildrenColumns.args = {
    cols: '4',
};

/* --------------- RESPONSIVE FLEX CHILDREN ------------------- */
export const ResponsiveChildren = (args) => (
    <Flex>
        <Flex.Child s="4" m="2">
            <FlexItem>Child 1</FlexItem>
        </Flex.Child>
        <Flex.Child s="8" m="4">
            <FlexItem>Child 2</FlexItem>
        </Flex.Child>
        <Flex.Child s="8" m="4">
            <FlexItem>Child 3</FlexItem>
        </Flex.Child>
        <Flex.Child s="4" m="2">
            <FlexItem>Child 4</FlexItem>
        </Flex.Child>
    </Flex>
);
