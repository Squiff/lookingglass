import CSS from '../../lib/components/CSS';
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
        <CSS {...cArgs}>
            <ScrollContainer />
        </CSS>
    );
};

ScrollbarProps.args = {};

ScrollbarProps.parameters = {
    options: { showPanel: true },
};

/*----------- Scrollbar Colors --------- */
export const Colors = (args) => {
    return (
        <Flex cols="auto">
            <CSS scrollbarColor="light">
                <ScrollContainer />
            </CSS>
            <CSS scrollbarColor="dark">
                <ScrollContainer />
            </CSS>
        </Flex>
    );
};

/*----------- Scrollbar Sizes --------- */
export const Sizes = (args) => {
    return (
        <Flex cols="auto">
            <ScrollContainer />
            <CSS scrollbarSize="s">
                <ScrollContainer />
            </CSS>
            <CSS scrollbarSize="none">
                <ScrollContainer>Scroll Me!</ScrollContainer>
            </CSS>
        </Flex>
    );
};

/*----------- Rounded --------- */
export const Rounded = (args) => (
    <Flex cols="auto">
        <CSS scrollbarColor="light">
            <ScrollContainer />
        </CSS>
        <CSS scrollbarStyle="rounded">
            <ScrollContainer />
        </CSS>
        <CSS scrollbarStyle="rounded" scrollbarSize="s">
            <ScrollContainer />
        </CSS>
    </Flex>
);

/*----------- Track --------- */
export const Track = (args) => (
    <div style={{ display: 'flex' }}>
        <CSS {...args}>
            <ScrollContainer />
        </CSS>
        <CSS scrollbarTrack="none" {...args}>
            <ScrollContainer />
        </CSS>
    </div>
);
