import React, { useEffect, useRef, useState } from 'react';
import Overlay from './Overlay';
import { CSSTransition } from 'react-transition-group';
import useTransitionEnd from '../utilities/hooks/useTransitionEnd';
import PropTypes from 'prop-types';

// direction: orientation of the drawer
// show: to open/close the drawer
// onClose: called when the overlay is clicked or escape key pressed
//          will not close itself - user has to use this to set the 'show' prop to false when this is fired
// onClosed/onOpened events fired when the open/close transitions have completed

/**
 * A modal component that slides content into and out of view
 */
function Drawer({ children, direction, show, onClose, onClosed, onOpened, closeOnClick }) {
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

Drawer.propTypes = {
    /** The direction the  drawer appears from*/
    direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    /** used to show or hide the drawer */
    show: PropTypes.bool,
    /** Callback fired when close starts */
    onClose: PropTypes.func,
    /** Callback fired when finished closing */
    onClosed: PropTypes.func,
    /** Callback fired when opening starts */
    onOpened: PropTypes.func,
    /** Control whether clicking on the overlay triggers the onClose callback */
    closeOnClick: PropTypes.bool,
};

Drawer.defaultProps = {
    closeOnClick: true,
    direction: 'left',
};

export default Drawer;
