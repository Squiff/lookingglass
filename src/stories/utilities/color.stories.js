import Lookingglass from '../../lib/components/Lookingglass';
import { UpdateArgTable } from '../helpers/utils';
import { argTypes as lookingGlassArgs } from './lookingglass.storyconfig';

// Note: directly exporting from a function is an issue for storybook
const _argTypes = UpdateArgTable(lookingGlassArgs, { enable: ['backgroundColor', 'color'] });
export const argTypes = _argTypes;

/* ---------- Color Props -------------- */
export const ColorProps = (args) => (
    <Lookingglass {...args} div>
        The quick brown fox jumps over the lazy dog
    </Lookingglass>
);

ColorProps.args = {
    backgroundColor: 'primary',
    color: 'white',
    padding: '3',
};

/* ---------- Theme Colors -------------- */
export const ThemeColors = (args) => (
    <>
        <Lookingglass div padding="3" margin="1" backgroundColor="primary" color="white">
            Primary
        </Lookingglass>
        <Lookingglass div padding="3" margin="1" backgroundColor="success">
            Success
        </Lookingglass>
        <Lookingglass div padding="3" margin="1" backgroundColor="error">
            Error
        </Lookingglass>
        <Lookingglass div padding="3" margin="1" backgroundColor="warning">
            Warning
        </Lookingglass>
        <Lookingglass div padding="3" margin="1" backgroundColor="info">
            Info
        </Lookingglass>
    </>
);

/* ---------- Additional Colors -------------- */
export const AdditionalColors = (args) => (
    <>
        <Lookingglass div padding="3" margin="1" backgroundColor="white" color="black">
            White
        </Lookingglass>
        <Lookingglass div padding="3" margin="1" backgroundColor="black" color="white">
            Black
        </Lookingglass>
        <Lookingglass div padding="3" margin="1" backgroundColor="dark" color="white">
            Dark
        </Lookingglass>
        <Lookingglass div padding="3" margin="1" backgroundColor="light" color="black">
            Light
        </Lookingglass>
    </>
);

/* ---------- Tints and Shades -------------- */
export const TintsAndShades = (args) => (
    <>
        <Lookingglass div padding="3" backgroundColor="primary-l4" color="primary-d4">
            Primary-l4
        </Lookingglass>
        <Lookingglass div padding="3" backgroundColor="primary-l3" color="primary-d4">
            Primary-l3
        </Lookingglass>
        <Lookingglass div padding="3" backgroundColor="primary-l2" color="primary-d4">
            Primary-l2
        </Lookingglass>
        <Lookingglass div padding="3" backgroundColor="primary-l1" color="primary-d4">
            Primary-l1
        </Lookingglass>
        <Lookingglass div padding="3" backgroundColor="primary" color="white">
            Primary
        </Lookingglass>
        <Lookingglass div padding="3" backgroundColor="primary-d1" color="white">
            Primary-d1
        </Lookingglass>
        <Lookingglass div padding="3" backgroundColor="primary-d2" color="white">
            Primary-d2
        </Lookingglass>
        <Lookingglass div padding="3" backgroundColor="primary-d3" color="white">
            Primary-d3
        </Lookingglass>
        <Lookingglass div padding="3" backgroundColor="primary-d4" color="white">
            Primary-d4
        </Lookingglass>
    </>
);
