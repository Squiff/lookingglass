import Lookingglass from '../../lib/components/Lookingglass';
import Flex from '../../lib/components/Flex';
import { cleanArgs, UpdateArgTable } from '../helpers/utils';
import { argTypes as lookingglassArgs } from './lookingglass.storyconfig';

// Note: directly exporting from a function is an issue for storybook
const _argTypes = UpdateArgTable(lookingglassArgs, {
    enable: ['scrollbarColor', 'scrollbarSize', 'scrollbarStyle', 'scrollbarTrack'],
});

export const argTypes = _argTypes;

const ScrollContainer = ({ children, className }) => {
    const parentStyle = {
        height: '300px',
        width: '50px',
        overflow: 'auto',
        border: '1px solid black',
        marginRight: '25px',
    };

    const childStyle = {
        height: '1000px',
    };

    return (
        <div className={className} style={parentStyle}>
            <div style={childStyle}>{children}</div>
        </div>
    );
};

/*----------- Scrollbar Props --------- */
export const ScrollbarProps = (args) => {
    const cArgs = cleanArgs(args);

    return (
        <Lookingglass {...cArgs}>
            <ScrollContainer />
        </Lookingglass>
    );
};

ScrollbarProps.args = {};

/*----------- Scrollbar Colors --------- */
export const Colors = (args) => {
    return (
        <Flex cols="auto">
            <Lookingglass scrollbarColor="light">
                <ScrollContainer />
            </Lookingglass>
            <Lookingglass scrollbarColor="dark">
                <ScrollContainer />
            </Lookingglass>
        </Flex>
    );
};

/*----------- Scrollbar Sizes --------- */
export const Sizes = (args) => {
    return (
        <Flex cols="auto">
            <ScrollContainer />
            <Lookingglass scrollbarSize="s">
                <ScrollContainer />
            </Lookingglass>
            <Lookingglass scrollbarSize="none">
                <ScrollContainer>Scroll Me!</ScrollContainer>
            </Lookingglass>
        </Flex>
    );
};

/*----------- Rounded --------- */
export const Rounded = (args) => (
    <Flex cols="auto">
        <Lookingglass scrollbarColor="light">
            <ScrollContainer />
        </Lookingglass>
        <Lookingglass scrollbarStyle="rounded">
            <ScrollContainer />
        </Lookingglass>
        <Lookingglass scrollbarStyle="rounded" scrollbarSize="s">
            <ScrollContainer />
        </Lookingglass>
    </Flex>
);

/*----------- Track --------- */
export const Track = (args) => (
    <div style={{ display: 'flex' }}>
        <Lookingglass {...args}>
            <ScrollContainer />
        </Lookingglass>
        <Lookingglass scrollbarTrack="none" {...args}>
            <ScrollContainer />
        </Lookingglass>
    </div>
);
