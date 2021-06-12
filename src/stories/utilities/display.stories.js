import CSS from '../../lib/components/CSS';
import { UpdateArgTable } from '../helpers/utils';
import { argTypes as lookingglassArgs } from './lookingglass.storyconfig';

// Note: directly exporting from a function is an issue for storybook
const _argTypes = UpdateArgTable(lookingglassArgs, { enable: ['display'] });
export const argTypes = _argTypes;

const Template = (args) => (
    <CSS {...args} padding="2">
        <div>The quick brown fox jumps over the lazy dog</div>
    </CSS>
);

/* --------- Display Props --------- */
export const DisplayProps = Template.bind({});

DisplayProps.args = {
    display: 'block',
    backgroundColor: 'light',
};

DisplayProps.parameters = {
    options: { showPanel: true },
};

/* --------- Display Breakpoints --------- */
export const Responsive = (args) => (
    <>
        <CSS
            display={{ s: 'none', l: 'block' }}
            backgroundColor="light"
            color="dark"
            padding="2"
            div
        >
            Small: None | Large: Block
        </CSS>
        <CSS
            display={{ s: 'block', l: 'none' }}
            backgroundColor="dark"
            color="light"
            padding="2"
            div
        >
            Small: Block | Large: None
        </CSS>
    </>
);
