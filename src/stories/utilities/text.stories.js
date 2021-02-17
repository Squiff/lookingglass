import Lookingglass from '../../lib/components/Lookingglass';

export default {
    component: Lookingglass,
    title: 'Utilities/Text',
};

const Template = (args) => (
    <Lookingglass {...args}>
        <div>The quick brown fox jumps over the lazy dog</div>
    </Lookingglass>
);

export const FontSize = (args) => (
    <>
        <Lookingglass fontSize="075">
            <div>The quick brown fox jumps over the lazy dog</div>
        </Lookingglass>
        <Lookingglass fontSize="0875">
            <div>The quick brown fox jumps over the lazy dog</div>
        </Lookingglass>
        <Lookingglass fontSize="1">
            <div>The quick brown fox jumps over the lazy dog</div>
        </Lookingglass>
        <Lookingglass fontSize="125">
            <div>The quick brown fox jumps over the lazy dog</div>
        </Lookingglass>
        <Lookingglass fontSize="15">
            <div>The quick brown fox jumps over the lazy dog</div>
        </Lookingglass>
        <Lookingglass fontSize="2">
            <div>The quick brown fox jumps over the lazy dog</div>
        </Lookingglass>
        <Lookingglass fontSize="25">
            <div>The quick brown fox jumps over the lazy dog</div>
        </Lookingglass>
        <Lookingglass fontSize="3">
            <div>The quick brown fox jumps over the lazy dog</div>
        </Lookingglass>
    </>
);

export const FontWeight = Template.bind({});

FontWeight.args = {
    fontWeight: 600,
};

export const TextDecoration = Template.bind({});

TextDecoration.args = {
    textDecoration: 'underline',
};

TextDecoration.argTypes = {
    textDecoration: { control: { type: 'select', options: ['underline', 'strike', 'none'] } },
};

export const TextTransform = Template.bind({});

TextTransform.args = {
    textTransform: 'uppercase',
};

TextTransform.argTypes = {
    textTransform: { control: { type: 'select', options: ['capitalize', 'uppercase', 'lowercase'] } },
};

export const TextAlign = Template.bind({});

TextAlign.args = {
    textAlign: 'center',
};

TextAlign.argTypes = {
    textAlign: { control: { type: 'select', options: ['left', 'right', 'center'] } },
};
