import Lookingglass from '../../lib/components/Lookingglass';
import Flex from '../../lib/components/Flex';
import { UpdateArgTable } from '../helpers/utils';
import { argTypes as lookingglassArgs } from './lookingglass.storyconfig';

// Note: directly exporting from a function is an issue for storybook
const _argTypes = UpdateArgTable(lookingglassArgs, {
    enable: ['shadow'],
});

export const argTypes = _argTypes;

export const Shadow = (args) => (
    <Lookingglass
        {...args}
        div
        padding="5"
        margin="5"
        backgroundColor="white"
        border="1"
        borderRadius="2"
        borderColor="light"
    ></Lookingglass>
);

Shadow.args = {
    shadow: '1',
};

export const ShadowExamples = (args) => (
    <Flex cols="equal">
        <Lookingglass
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
        </Lookingglass>
        <Lookingglass
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
        </Lookingglass>

        <Lookingglass
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
        </Lookingglass>

        <Lookingglass
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
        </Lookingglass>

        <Lookingglass
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
        </Lookingglass>
    </Flex>
);
