import React, { useRef, useState } from 'react';
import Button from '../lib/components/Button';
import Tooltip from '../lib/components/Tooltip';
import Lookingglass from '../lib/components/Lookingglass';
import Flex from '../lib/components/Flex';

export const argTypes = {
    text: { control: 'text' },
    targetRef: { control: null },
    placement: {},
    distance: {},
    arrow: {},
    show: {},
    trigger: { control: null },
    triggerDelay: { control: null },
};

const TargetElement = React.forwardRef(({ children }, ref) => {
    const style = {
        height: '100px',
        width: '100px',
        backgroundColor: '#272635',
    };

    return (
        <Lookingglass color="white" padding="2" textAlign="center" fontWeight="600" borderRadius="2">
            <Flex justify="center" align="center" ref={ref} style={style}>
                {children}
            </Flex>
        </Lookingglass>
    );
});

TargetElement.displayName = 'TargetElement';

/* -------- ALL PROPS ---------------- */
export const AllProps = (args) => {
    const targetRef = useRef(null);
    const { text, ...tooltipArgs } = args;

    // storybook controls can pass in null
    if (args.distance === null) args.distance = undefined;

    return (
        <Flex cols="auto" justify="center" align="center" style={{ height: '300px' }}>
            <TargetElement ref={targetRef}>Target Element</TargetElement>
            <Tooltip targetRef={targetRef} {...tooltipArgs}>
                {text}
            </Tooltip>
        </Flex>
    );
};

AllProps.args = {
    text: 'This is the tooltip content',
    trigger: 'hover',
    placement: 'bottom',
    arrow: false,
    show: true,
};

/* -------- Scrolling -------------- */
export const Scrolling = (args) => {
    const targetRef = useRef();
    const scrollContainer = {
        height: '300px',
        width: '300px',
        overflow: 'auto',
        position: 'relative', // important - makes tooltip relative to this container
    };
    const innerContainerStyle = { height: '600px', width: '600px', paddingTop: '50px', paddingLeft: '50px' };

    return (
        <div style={scrollContainer}>
            <div style={innerContainerStyle}>
                <TargetElement ref={targetRef}>Target Element</TargetElement>
            </div>
            <Tooltip targetRef={targetRef} show={true} arrow={true} placement="top">
                Placement Top
            </Tooltip>
        </div>
    );
};

/* -------- Placements -------------- */
export const Placements = (args) => {
    const leftBtn = useRef();
    const rightBtn = useRef();
    const topBtn = useRef();
    const bottomBtn = useRef();

    return (
        <Flex cols="auto" justify="around">
            <Button ref={rightBtn} btnStyle="none">
                Right
            </Button>
            <Button ref={leftBtn} btnStyle="none">
                Left
            </Button>
            <Button ref={topBtn} btnStyle="none">
                Top
            </Button>
            <Button ref={bottomBtn} btnStyle="none">
                Bottom
            </Button>

            <Tooltip targetRef={rightBtn} placement="right" triggerDelay={0}>
                Right
            </Tooltip>
            <Tooltip targetRef={leftBtn} placement="left" triggerDelay={0}>
                Left
            </Tooltip>
            <Tooltip targetRef={topBtn} placement="top" triggerDelay={0}>
                Top
            </Tooltip>
            <Tooltip targetRef={bottomBtn} placement="bottom" triggerDelay={0} distance={0}>
                Bottom
            </Tooltip>
        </Flex>
    );
};

Placements.parameters = {
    // show hooks in source view
    docs: {
        source: {
            type: 'code',
        },
    },
};

/* -------- Triggers -------------- */
export const Triggers = (args) => {
    const hoverBtn = useRef();
    const focusBtn = useRef();
    const hoverDelayBtn = useRef();
    const focusDelayBtn = useRef();

    return (
        <>
            <h6>Trigger - No Delay</h6>
            <Button ref={hoverBtn} btnStyle="none">
                Hover
            </Button>
            <Button ref={focusBtn} btnStyle="none">
                Focus
            </Button>
            <Lookingglass marginTop="3">
                <h6>Trigger - 1000ms Delay</h6>
            </Lookingglass>
            <Button ref={hoverDelayBtn} btnStyle="none">
                Hover
            </Button>
            <Button ref={focusDelayBtn} btnStyle="none">
                Focus
            </Button>

            <Tooltip targetRef={hoverBtn} trigger="hover" triggerDelay={0}>
                Hover Tooltip
            </Tooltip>
            <Tooltip targetRef={focusBtn} trigger="focus" triggerDelay={0}>
                Focus Tooltip
            </Tooltip>

            <Tooltip targetRef={hoverDelayBtn} trigger="hover" triggerDelay={1000}>
                Hover Tooltip
            </Tooltip>
            <Tooltip targetRef={focusDelayBtn} trigger="focus" triggerDelay={1000}>
                Focus Tooltip
            </Tooltip>
        </>
    );
};

Triggers.parameters = {
    // show hooks in source view
    docs: {
        source: {
            type: 'code',
        },
    },
};

/* -------- CONTROLLED -------------- */
export const Controlled = (args) => {
    const [show, setShow] = useState(false);
    const targetRef = useRef();

    return (
        <>
            <Button
                btnStyle="none"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Toggle Tooltip
            </Button>

            <TargetElement ref={targetRef}>Target Element</TargetElement>

            <Tooltip targetRef={targetRef} show={show} arrow={true} placement="right">
                Controlled Tooltip
            </Tooltip>
        </>
    );
};

Controlled.parameters = {
    // show hooks in source view
    docs: {
        source: {
            type: 'code',
        },
    },
};

/* -------- STYLED -------------- */
export const Styled = (args) => {
    const targetRef = useRef(null);

    const tooltipStyles = {
        backgroundColor: 'purple',
        color: '#fff',
    };

    // storybook controls can pass in null
    if (args.distance === null) args.distance = undefined;

    return (
        <>
            <TargetElement ref={targetRef}>Target Element</TargetElement>
            <Tooltip targetRef={targetRef} style={tooltipStyles} show={true} placement="right">
                A custom styled tooltip
            </Tooltip>
        </>
    );
};
