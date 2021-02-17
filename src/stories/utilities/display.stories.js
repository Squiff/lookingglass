import Lookingglass from '../../lib/components/Lookingglass';

export default {
    component: Lookingglass,
    title: 'Utilities/Display',
};

const Template = (args) => (
    <Lookingglass {...args} padding="2">
        <div>The quick brown fox jumps over the lazy dog</div>
    </Lookingglass>
);

export const Basic = Template.bind({});

Basic.args = {
    display: 'block',
};

Basic.argTypes = {
    display: { control: { type: 'select', options: ['none', 'block', 'inline-block'] } },
};

export const Responsive = Template.bind({});
Responsive.args = {
    display: { s: 'none', m: 'block' },
};
