import classNames from 'classnames';
import React from 'react';

function CloseButton({ className, size, ...btnProps }) {
    const classes = classNames({ 'close-btn': true, [`close-btn--${size}`]: size }, className);

    return (
        <button {...btnProps} className={classes} aria-label="close">
            <CloseIcon className="close-btn__icon" />
        </button>
    );
}

function CloseIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            {...props}
        >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
    );
}

export default CloseButton;
