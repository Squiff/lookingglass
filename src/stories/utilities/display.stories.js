import Lookingglass from '../../lib/components/Lookingglass';
import { UpdateArgTable } from '../helpers/utils';
import { argTypes as lookingglassArgs } from './lookingglass.storyconfig';

// Note: directly exporting from a function is an issue for storybook
const _argTypes = UpdateArgTable(lookingglassArgs, { enable: ['display'] });
export const argTypes = _argTypes;

const Template = (args) => (
    <Lookingglass {...args} padding="2">
        <div>The quick brown fox jumps over the lazy dog</div>
    </Lookingglass>
);

/* --------- Display Props --------- */
export const DisplayProps = Template.bind({});

DisplayProps.args = {
    display: 'block',
    backgroundColor: 'light',
};

/* --------- Display Breakpoints --------- */
export const Responsive = (args) => (
    <>
        <Lookingglass display={{ s: 'none', l: 'block' }} backgroundColor="light" color="dark" padding="2" div>
            Small: None | Large: Block
        </Lookingglass>
        <Lookingglass display={{ s: 'block', l: 'none' }} backgroundColor="dark" color="light" padding="2" div>
            Small: Block | Large: None
        </Lookingglass>
    </>
);
