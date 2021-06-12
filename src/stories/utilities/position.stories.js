import CSS from '../../lib/components/CSS';
import Button from '../../lib/components/Button';
import Alert from '../../lib/components/Alert';
import { cleanArgs, UpdateArgTable } from '../helpers/utils';
import { argTypes as lookingglassArgs } from './lookingglass.storyconfig';
import { useRef, useState } from 'react';

// Note: directly exporting from a function is an issue for storybook
const _argTypes = UpdateArgTable(lookingglassArgs, {
    enable: ['position', 'left', 'right', 'top', 'bottom', 'absolute'],
});

export const argTypes = _argTypes;

const Template = (args) => {
    const cArgs = cleanArgs(args);

    return (
        <CSS
            position="relative"
            backgroundColor="light"
            width="50vw"
            height="50vh"
            margin="auto"
            marginTop="5"
        >
            <div>
                <CSS {...cArgs} backgroundColor="dark" borderRadius="rounded">
                    <div style={{ height: '50px', width: '50px' }}></div>
                </CSS>
            </div>
        </CSS>
    );
};

/* --------- Position Props -----------*/
export const PositionProps = (args) => {
    const cArgs = cleanArgs(args);

    return (
        <CSS position="relative" backgroundColor="light" width="50vw" height="50vh" margin="5" div>
            <CSS
                div
                {...cArgs}
                backgroundColor="dark"
                borderRadius="rounded"
                style={{ height: '50px', width: '50px' }}
            />
            <CSS div absolute="middle" fontSize="15" fontWeight="600">
                Position Relative
            </CSS>
        </CSS>
    );
};

PositionProps.args = {
    position: 'absolute',
    left: '0',
};

PositionProps.parameters = {
    options: { showPanel: true },
};

/* --------- Fixed -----------*/
export const Fixed = (args) => {
    const [showFixed, setShowFixed] = useState(false);

    return (
        <>
            <h6>Hide/Show Alert (Bottom Right)</h6>
            <Button
                color="primary"
                onClick={() => {
                    setShowFixed(!showFixed);
                }}
            >
                Show Fixed Element
            </Button>
            {showFixed && (
                <CSS position="fixed" bottom="0" right="0" margin="4">
                    <Alert color="warning">Position Fixed</Alert>
                </CSS>
            )}
        </>
    );
};

Fixed.parameters = {
    docs: { source: { type: 'code' } },
};

/* --------- Sticky -----------*/
export const Sticky = (args) => {
    const containerStyles = { height: '250px', overflow: 'auto' };
    const childStyles = { height: '750px' };

    return (
        <>
            <div style={containerStyles}>
                <CSS position="sticky" top="0">
                    <Alert color="error">Position Sticky</Alert>
                </CSS>
                <div style={childStyles}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam iure deleniti
                    velit vitae illo amet hic assumenda tempore quaerat adipisci. Deserunt mollitia,
                    repellendus at atque cupiditate ea? Quaerat voluptatibus, animi accusamus
                    eveniet quibusdam voluptates maiores libero nemo laudantium? Officiis iste nemo
                    voluptatem asperiores eum similique? Nemo amet veniam maxime optio!
                </div>
            </div>
        </>
    );
};

/* --------- Absolute -----------*/
const Circle = () => {
    return (
        <CSS
            div
            borderRadius="rounded"
            backgroundColor="dark"
            style={{ height: '20px', width: '20px' }}
        />
    );
};

export const Absolute = (args) => {
    const containerStyles = { height: '100px' };

    return (
        <>
            <CSS position="relative" backgroundColor="light" margin="5" div style={containerStyles}>
                <CSS div absolute="top-left">
                    <Circle />
                </CSS>
                <CSS div absolute="top-middle">
                    <Circle />
                </CSS>
                <CSS div absolute="top-right">
                    <Circle />
                </CSS>
                <CSS div absolute="middle-left">
                    <Circle />
                </CSS>
                <CSS div absolute="middle">
                    <Circle />
                </CSS>
                <CSS div absolute="middle-right">
                    <Circle />
                </CSS>
                <CSS div absolute="bottom-left">
                    <Circle />
                </CSS>
                <CSS div absolute="bottom-middle">
                    <Circle />
                </CSS>
                <CSS div absolute="bottom-right">
                    <Circle />
                </CSS>
            </CSS>
        </>
    );
};

/* --------- Absolute Button-----------*/
export const AbsoluteButton = (args) => {
    const notificationStyles = { height: '20px', width: '20px' };

    return (
        <CSS position="relative">
            <Button color="primary">
                Click
                <CSS
                    div
                    absolute="top-right"
                    backgroundColor="success"
                    color="white"
                    borderRadius="rounded"
                    fontSize="075"
                    fontWeight="500"
                    border="1"
                    borderColor="white"
                    style={notificationStyles}
                >
                    <CSS absolute="middle">
                        <span>1</span>
                    </CSS>
                </CSS>
            </Button>
        </CSS>
    );
};
