import Lookingglass from '../../lib/components/Lookingglass';
import Flex from '../../lib/components/Flex';
import { UpdateArgTable } from '../helpers/utils';
import { argTypes as lookingglassArgs } from './lookingglass.storyconfig';

// Note: directly exporting from a function is an issue for storybook
const _argTypes = UpdateArgTable(lookingglassArgs, {
    enable: [
        'margin',
        'marginX',
        'marginY',
        'marginTop',
        'marginRight',
        'marginBottom',
        'marginLeft',
        'padding',
        'paddingX',
        'paddingY',
        'paddingTop',
        'paddingRight',
        'paddingBottom',
        'paddingLeft',
    ],
});

export const argTypes = _argTypes;

/* ---------- Spacing Props ------------- */
export const SpacingProps = (args) => (
    <Lookingglass {...args} backgroundColor="primary" color="white" div>
        The quick brown fox jumps over the lazy dog
    </Lookingglass>
);

SpacingProps.args = {
    margin: '2',
    padding: '2',
};

SpacingProps.parameters = {
    options: { showPanel: true },
};

/* ---------- Spacing Examples ------------- */
export const MarginAuto = (args) => (
    <>
        <Flex cols="auto">
            <Lookingglass padding="2" margin="auto" backgroundColor="light" color="dark" div>
                Margin Auto
            </Lookingglass>
        </Flex>
        <Flex cols="auto">
            <Lookingglass padding="2" marginLeft="auto" backgroundColor="light" color="dark" div>
                Margin Left Auto
            </Lookingglass>
        </Flex>
        <Flex cols="auto">
            <Lookingglass padding="2" marginRight="auto" backgroundColor="light" color="dark" div>
                Margin Right Auto
            </Lookingglass>
        </Flex>
    </>
);
