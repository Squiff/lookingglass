import React, { useRef, useState } from 'react';
import CloseButton from './CloseButton';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import useTransitionEnd from '../utilities/hooks/useTransitionEnd';

/**
 * Displays a message with the supplied color scheme
 */
function Alert({ children, className, color, alertStyle, show, closeBtn, onClose, onClosed, onOpened, ...props }) {
    const [showInternal, setShowInternal] = useState(true);
    const alertRef = useRef();
    const transitionEnd = useTransitionEnd(alertRef);

    // use "show" if supplied
    const _show = show !== undefined ? show : showInternal;

    // providing "show" makes Alert a controlled component
    function handleClick() {
        if (show !== undefined) {
            if (onClose) onClose();
        } else {
            setShowInternal(false);
        }
    }

    let classes = ['alert'];

    classes.push(`alert-${color}`);

    let alertCloseBtn;
    if (closeBtn) {
        alertCloseBtn = <CloseButton onClick={handleClick} />;
        classes.push('alert--closebtn');
    }

    const classStr = classNames(classes, className);

    // do not transition, immediately unmount

    return (
        <CSSTransition
            in={_show}
            classNames={alertTransitionClasses}
            nodeRef={alertRef}
            addEndListener={transitionEnd}
            onExited={onClosed}
            onEntered={onOpened}
            unmountOnExit={true}
        >
            <div ref={alertRef} className={classStr} {...props}>
                <div className="alert__content">{children}</div>
                {alertCloseBtn}
            </div>
        </CSSTransition>
    );
}

Alert.propTypes = {
    /** The color scheme of the alert */
    color: PropTypes.string.isRequired,
    /** show or hide the Alert */
    show: PropTypes.bool,
    /** Callback fired when close is requested */
    onClose: PropTypes.func,
    /** Callback fired when finished closing */
    onClosed: PropTypes.func,
    /** Callback fired when opening starts */
    onOpened: PropTypes.func,
};

const alertTransitionClasses = {
    enter: 'alert--opening',
    enterActive: 'alert--open',
    enterDone: 'alert--open',
    exit: 'alert--closing',
};

Alert.Header = ({ className, children, ...props }) => {
    const classes = classNames('alert__header', className);

    return (
        <h4 className={classes} {...props}>
            {children}
        </h4>
    );
};

Alert.Header.displayName = 'Alert.Header';

export default Alert;
