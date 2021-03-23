import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import useTransitionEnd from '../utilities/hooks/useTransitionEnd';
import Overlay from './Overlay';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/** A dialog box that needs to be interacted with before other content */
function Modal({ children, className, style, show, onClose, onClosed, onOpened, closeOnClick, ...props }) {
    const modalRef = useRef();
    const transitionEnd = useTransitionEnd(modalRef);

    const classStr = classNames('modal', className);

    return (
        <CSSTransition
            in={show}
            classNames={transitionClasses}
            nodeRef={modalRef}
            addEndListener={transitionEnd}
            onExited={onClosed}
            onEntered={onOpened}
        >
            <Overlay show={show} onClose={onClose} closeOnClick={closeOnClick} className="modal__overlay" {...props}>
                <div className={classStr} style={style} ref={modalRef}>
                    {children}
                </div>
            </Overlay>
        </CSSTransition>
    );
}

// get class names to be used in the CSSTransition
const transitionClasses = {
    enter: `modal--opening`,
    enterActive: `modal--open`,
    exit: `modal--closed`,
    exitDone: `modal--closed`,
};

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
