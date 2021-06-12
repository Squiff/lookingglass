import CSS from '../../lib/components/CSS';
import Flex from '../../lib/components/Flex';
import { UpdateArgTable } from '../helpers/utils';
import { argTypes as lookingglassArgs } from './lookingglass.storyconfig';

// Note: directly exporting from a function is an issue for storybook
const _argTypes = UpdateArgTable(lookingglassArgs, {
    enable: ['shadow'],
});

export const argTypes = _argTypes;

export const Shadow = (args) => (
    <CSS
        {...args}
        div
        padding="5"
        margin="5"
        backgroundColor="white"
        border="1"
        borderRadius="2"
        borderColor="light"
    ></CSS>
);

Shadow.args = {
    shadow: '1',
};

Shadow.parameters = {
    options: { showPanel: true },
};

export const ShadowExamples = (args) => (
    <Flex cols="equal">
        <CSS
            shadow="0"
            div
            padding="5"
            margin="2"
            backgroundColor="white"
            border="1"
            borderRadius="2"
            borderColor="light"
            textAlign="center"
        >
            0
        </CSS>
        <CSS
            shadow="2"
            div
            padding="5"
            margin="2"
            backgroundColor="white"
            border="1"
            borderRadius="2"
            borderColor="light"
            textAlign="center"
        >
            2
        </CSS>

        <CSS
            shadow="5"
            div
            padding="5"
            margin="2"
            backgroundColor="white"
            border="1"
            borderRadius="2"
            borderColor="light"
            textAlign="center"
        >
            5
        </CSS>

        <CSS
            shadow="10"
            div
            padding="5"
            margin="2"
            backgroundColor="white"
            border="1"
            borderRadius="2"
            borderColor="light"
            textAlign="center"
        >
            10
        </CSS>

        <CSS
            shadow="20"
            div
            padding="5"
            margin="2"
            backgroundColor="white"
            border="1"
            borderRadius="2"
            borderColor="light"
            textAlign="center"
        >
            20
        </CSS>
    </Flex>
);
