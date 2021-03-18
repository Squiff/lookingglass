import classNames from 'classnames';
import React from 'react';

function CloseButton({ className, ...btnProps }) {
    const classes = classNames('close-btn', className);

    return (
        <button {...btnProps} className={classes}>
            &times;
        </button>
    );
}

export default CloseButton;
