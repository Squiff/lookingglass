import CSS from '../../lib/components/CSS';
import { UpdateArgTable } from '../helpers/utils';
import { argTypes as lookingGlassArgs } from './lookingglass.storyconfig';

// Note: directly exporting from a function is an issue for storybook
const _argTypes = UpdateArgTable(lookingGlassArgs, { enable: ['backgroundColor', 'color'] });
export const argTypes = _argTypes;

/* ---------- Color Props -------------- */
export const ColorProps = (args) => (
    <CSS {...args} div>
        The quick brown fox jumps over the lazy dog
    </CSS>
);

ColorProps.args = {
    backgroundColor: 'primary',
    color: 'white',
    padding: '3',
};

ColorProps.parameters = {
    options: { showPanel: true },
};

/* ---------- Theme Colors -------------- */
export const ThemeColors = (args) => (
    <>
        <CSS div padding="3" margin="1" backgroundColor="primary" color="white">
            Primary
        </CSS>
        <CSS div padding="3" margin="1" backgroundColor="success">
            Success
        </CSS>
        <CSS div padding="3" margin="1" backgroundColor="error">
            Error
        </CSS>
        <CSS div padding="3" margin="1" backgroundColor="warning">
            Warning
        </CSS>
        <CSS div padding="3" margin="1" backgroundColor="info">
            Info
        </CSS>
    </>
);

/* ---------- Additional Colors -------------- */
export const AdditionalColors = (args) => (
    <>
        <CSS div padding="3" margin="1" backgroundColor="white" color="black">
            White
        </CSS>
        <CSS div padding="3" margin="1" backgroundColor="black" color="white">
            Black
        </CSS>
        <CSS div padding="3" margin="1" backgroundColor="dark" color="white">
            Dark
        </CSS>
        <CSS div padding="3" margin="1" backgroundColor="light" color="black">
            Light
        </CSS>
    </>
);

/* ---------- Tints and Shades -------------- */
export const TintsAndShades = (args) => (
    <>
        <CSS div padding="3" backgroundColor="primary-l4" color="primary-d4">
            Primary-l4
        </CSS>
        <CSS div padding="3" backgroundColor="primary-l3" color="primary-d4">
            Primary-l3
        </CSS>
        <CSS div padding="3" backgroundColor="primary-l2" color="primary-d4">
            Primary-l2
        </CSS>
        <CSS div padding="3" backgroundColor="primary-l1" color="primary-d4">
            Primary-l1
        </CSS>
        <CSS div padding="3" backgroundColor="primary" color="white">
            Primary
        </CSS>
        <CSS div padding="3" backgroundColor="primary-d1" color="white">
            Primary-d1
        </CSS>
        <CSS div padding="3" backgroundColor="primary-d2" color="white">
            Primary-d2
        </CSS>
        <CSS div padding="3" backgroundColor="primary-d3" color="white">
            Primary-d3
        </CSS>
        <CSS div padding="3" backgroundColor="primary-d4" color="white">
            Primary-d4
        </CSS>
    </>
);
