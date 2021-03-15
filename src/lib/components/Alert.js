import React, { useState } from 'react';
import CloseButton from './CloseButton';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Displays a message with the supplied color scheme
 */
function Alert({ children, className, color, alertStyle, show, closeBtn, onClose, ...props }) {
    const [closed, setClosed] = useState(false);

    if ((!show && show !== undefined) || closed === true) {
        return null;
    }

    // if onClose provided then this is a controlled component and needs
    // to run the onClose callback for use to handle the state change
    function handleClick() {
        if (onClose) {
            onClose();
        } else {
            setClosed(true);
        }
    }

    let classes = ['alert', `alert-${color}`];

    if (alertStyle === 'solid') {
        classes.push(`alert-${color}-solid`);
    } else {
        classes.push(`alert-${color}`);
    }

    let alertCloseBtn;
    if (closeBtn) {
        alertCloseBtn = <CloseButton onClick={handleClick} />;
        classes.push('alert--close');
    }

    const classStr = classNames(classes, className);

    return (
        <div className={classStr} {...props}>
            {children}
            {alertCloseBtn}
        </div>
    );
}

Alert.propTypes = {
    /** The color scheme of the alert */
    color: PropTypes.string.isRequired,
    /** The color scheme modifier */
    alertStyle: PropTypes.oneOf(['solid']),
    /** show or hide the story */
    show: PropTypes.bool,
    /** Callback fired when Alert is closed */
    onClose: PropTypes.func,
};

export default Alert;
