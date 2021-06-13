import React, { useRef, useState } from 'react';
import Button from '../lib/components/Button';
import Popup from '../lib/components/Popup';
import CSS from '../lib/components/CSS';
import Flex from '../lib/components/Flex';

export const argTypes = {
    targetRef: { control: null },
    show: {},
    placement: {},
    distance: {},
    onClose: {},
    clickAway: { control: null },
    escape: { control: null },
    popupClassName: { control: null },
    popupStyles: { control: null },
    arrow: { control: null },
    arrowClassName: { control: null },
};

const TargetElement = React.forwardRef(({ children }, ref) => {
    const style = {
        height: '100px',
        width: '100px',
        backgroundColor: '#272635',
    };

    return (
        <CSS color="white" padding="2" textAlign="center" fontWeight="600" borderRadius="2">
            <Flex justify="center" align="center" ref={ref} style={style}>
                {children}
            </Flex>
        </CSS>
    );
});

TargetElement.displayName = 'TargetElement';

const PopupContent = ({ children }) => (
    <CSS
        div
        // style={{ width: '50px' }}
        backgroundColor="primary-d3"
        color="white"
        padding="3"
        borderRadius="2"
    >
        {children}
    </CSS>
);

/* -------- ALL PROPS ---------------- */
export const AllProps = (args) => {
    const targetRef = useRef(null);

    // storybook controls can pass in null
    if (args.distance === null) args.distance = undefined;

    return (
        <Flex cols="auto" justify="center" align="center" style={{ height: '300px' }}>
            <TargetElement ref={targetRef}>Target Element</TargetElement>
            <Popup targetRef={targetRef} {...args}>
                <PopupContent>Popup Content</PopupContent>
            </Popup>
        </Flex>
    );
};

AllProps.args = {
    show: true,
    placement: 'right-start',
    distance: 10,
};

AllProps.parameters = {
    options: { showPanel: true },
};

/* -------- Scrolling -------------- */
export const Scrolling = (args) => {
    const targetRef = useRef();
    const scrollContainer = {
        height: '300px',
        width: '300px',
        overflow: 'auto',
        position: 'relative', // important - makes popup relative to this container
    };
    const innerContainerStyle = {
        height: '600px',
        width: '600px',
        paddingTop: '80px',
        paddingLeft: '50px',
    };

    return (
        <div style={scrollContainer}>
            <div style={innerContainerStyle}>
                <TargetElement ref={targetRef}>Target Element</TargetElement>
            </div>
            <Popup targetRef={targetRef} show={true} placement="top" distance="4">
                <PopupContent>
                    <h6>Popup Content</h6>
                </PopupContent>
            </Popup>
        </div>
    );
};

Scrolling.parameters = {
    // show hooks in source view
    docs: {
        source: {
            type: 'code',
        },
    },
};

/* -------- Placements -------------- */
export const Placements = (args) => {
    const targetRef = useRef();

    return (
        <Flex cols="auto" justify="center" align="center" style={{ minWidth: '500px' }}>
            <TargetElement ref={targetRef}>Target Element</TargetElement>
            <Popup targetRef={targetRef} placement="left" distance={5} show={true}>
                <PopupContent>
                    <div>placement left</div>
                    <div>distance 5px</div>
                </PopupContent>
            </Popup>
            <Popup targetRef={targetRef} placement="right" distance={20} show={true}>
                <PopupContent>
                    <div>placement right</div>
                    <div>distance 20px</div>
                </PopupContent>
            </Popup>
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

/* -------- CALLBACKS -------------- */
export const Callbacks = (args) => {
    const [show, setShow] = useState(true);
    const targetRef = useRef();

    return (
        <>
            <Button
                btnStyle="none"
                hoverEffect="dark"
                onClick={() => {
                    setShow(!show);
                }}
                style={{ marginBottom: '1rem' }}
            >
                Toggle Popup
            </Button>

            <TargetElement ref={targetRef}>Target Element</TargetElement>

            <Popup
                targetRef={targetRef}
                show={show}
                placement="right"
                distance={10}
                onClose={() => setShow(false)}
            >
                <PopupContent>Popup Content</PopupContent>
            </Popup>
        </>
    );
};

Callbacks.parameters = {
    // show hooks in source view
    docs: {
        source: {
            type: 'code',
        },
    },
};
