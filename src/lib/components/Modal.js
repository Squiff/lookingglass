import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import useTransitionEnd from '../utilities/hooks/useTransitionEnd';
import Overlay from './Overlay';
import PropTypes from 'prop-types';

/** A pop up dialog that needs to be interacted with before other content */
function Modal({ children, show, onClose, onClosed, onOpened, closeOnClick }) {
    const modalRef = useRef();
    const transitionEnd = useTransitionEnd(modalRef);
    const transitionClassNames = transitionClasses();
    const classes = ['modal'];

    const classStr = classes.join(' ');

    return (
        <CSSTransition
            in={show}
            classNames={transitionClassNames}
            nodeRef={modalRef}
            addEndListener={transitionEnd}
            onExited={onClosed}
            onEntered={onOpened}
        >
            <Overlay show={show} onClose={onClose} closeOnClick={closeOnClick} center={true}>
                <div className={classStr} ref={modalRef}>
                    {children}
                </div>
            </Overlay>
        </CSSTransition>
    );
}

// get class names to be used in the CSSTransition
function transitionClasses() {
    const prefix = `modal--`;

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

Modal.propTypes = {
    /** Show or hide the modal */
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

Modal.defaultProps = {
    closeOnClick: true,
};

export default Modal;
