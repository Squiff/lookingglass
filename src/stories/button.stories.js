import Button from '../lib/components/Button';

export default {
    component: Button,
    title: 'Button',
    argTypes: {
        onClick: { action: 'clicked', table: { disable: true } },
    },
};

const Template = (args) => <Button {...args}>Click</Button>;

export const Solid = Template.bind({});
Solid.args = {
    color: 'primary',
    shadow: true,
};

Solid.argTypes = {
    block: { table: { disable: true } },
    size: { table: { disable: true } },
    btnStyle: { table: { disable: true } },
};

export const Outline = Template.bind({});
Outline.args = {
    color: 'primary',
    btnStyle: 'outline',
};

Outline.argTypes = {
    block: { table: { disable: true } },
    size: { table: { disable: true } },
    btnStyle: { table: { disable: true } },
    shadow: { table: { disable: true } },
};

export const NoStyle = Template.bind({});
NoStyle.args = {
    btnStyle: 'none',
};

NoStyle.argTypes = {
    color: { table: { disable: true } },
    block: { table: { disable: true } },
    size: { table: { disable: true } },
    btnStyle: { table: { disable: true } },
    shadow: { table: { disable: true } },
};

export const Sizes = Template.bind({});
Sizes.args = {
    color: 'primary',
    size: 'l',
    block: false,
};

Sizes.argTypes = {
    btnStyle: { table: { disable: true } },
    shadow: { table: { disable: true } },
};
