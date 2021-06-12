import CSS from '../../lib/components/CSS';
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
    <CSS {...args} backgroundColor="primary" color="white" div>
        The quick brown fox jumps over the lazy dog
    </CSS>
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
            <CSS padding="2" margin="auto" backgroundColor="light" color="dark" div>
                Margin Auto
            </CSS>
        </Flex>
        <Flex cols="auto">
            <CSS padding="2" marginLeft="auto" backgroundColor="light" color="dark" div>
                Margin Left Auto
            </CSS>
        </Flex>
        <Flex cols="auto">
            <CSS padding="2" marginRight="auto" backgroundColor="light" color="dark" div>
                Margin Right Auto
            </CSS>
        </Flex>
    </>
);
