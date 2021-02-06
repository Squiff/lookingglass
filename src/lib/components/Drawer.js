import React, { useEffect, useRef, useState } from 'react';
import Overlay from './Overlay';
import { CSSTransition } from 'react-transition-group';
import useTransitionEnd from '../utilities/hooks/useTransitionEnd';

// direction: orientation of the drawer
// show: to open/close the drawer
// onClose: called when the overlay is clicked or escape key pressed
//          will not close itself - user has to use this to set the 'show' prop to false when this is fired
// onClosed/onOpened events fired when the open/close transitions have completed

function Drawer({
    children,
    direction,
    show,
    onClose,
    onClosed,
    onOpened,
    closeOnClick,
}) {
    const drawerRef = useRef();
    const transitionEnd = useTransitionEnd(drawerRef);
    const transitionClassNames = transitionClasses(direction);
    const classes = ['drawer', `drawer--${direction}`];

    const classStr = classes.join(' ');

    return (
        <CSSTransition
            in={show}
            classNames={transitionClassNames}
            nodeRef={drawerRef}
            addEndListener={transitionEnd}
            onExited={onClosed}
            onEntered={onOpened}
        >
            <Overlay show={show} onClose={onClose} closeOnClick={closeOnClick}>
                <div className={classStr} ref={drawerRef}>
                    {children}
                </div>
            </Overlay>
        </CSSTransition>
    );
}

// get class names to be used in the CSSTransition
function transitionClasses(direction) {
    const prefix = `drawer--${direction}--`;

    const enter = `${prefix}opening`;
    const enterActive = `${prefix}open`;
    const exit = `${prefix}closed`;
    const exitDone = `${prefix}closed`;

    return {
        enter,
        enterActive,
        exit,
        exitDone,
    };
}

Drawer.defaultProps = {
    closeOnClick: true,
};

export default Drawer;
