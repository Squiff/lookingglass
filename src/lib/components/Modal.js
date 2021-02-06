import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import useTransitionEnd from '../utilities/hooks/useTransitionEnd';
import Overlay from './Overlay';

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
            <Overlay
                show={show}
                onClose={onClose}
                closeOnClick={closeOnClick}
                center={true}
            >
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

Modal.defaultProps = {
    closeOnClick: true,
};

export default Modal;
