import Button from '../lib/components/Button';

export default {
    component: Button,
    title: 'Button',
    argTypes: {
        color: { control: { type: 'select', options: ['primary', 'secondary'] } },
    },
};

const Template = (args) => <Button {...args}>Click</Button>;

export const Solid = Template.bind({});
Solid.args = {
    color: 'primary',
};
