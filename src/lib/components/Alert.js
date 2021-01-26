import React, { useState } from 'react';
import CloseButton from './CloseButton';

function Alert({ children, color, alertStyle, show, onClose, ...props }) {
    const [closed, setClosed] = useState(false);

    if ((!show && show !== undefined) || closed === true) {
        return null;
    }

    function handleClick() {
        if (onClose === true) {
            setClosed(true);
        } else if (onClose) {
            onClose();
        }
    }

    let classes = ['alert', `alert-${color}`];

    if (alertStyle === 'solid') {
        classes.push(`alert-${color}-solid`);
    } else {
        classes.push(`alert-${color}`);
    }

    let closeBtn;
    if (onClose) {
        closeBtn = <CloseButton onClick={handleClick} />;
        classes.push('alert--close');
    }

    const classStr = classes.join(' ');

    return (
        <div className={classStr} {...props}>
            {children}
            {closeBtn}
        </div>
    );
}

export default Alert;
