import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Input = React.forwardRef((props, ref) => {
    return <InputInternal element="input" {...props} ref={ref} />;
});

export const Select = React.forwardRef((props, ref) => {
    return <InputInternal element="select" {...props} ref={ref} />;
});

export const TextArea = React.forwardRef((props, ref) => {
    return <InputInternal element="textarea" ref={ref} {...props} />;
});

const InputInternal = React.forwardRef(({ element, size, inline, invalid, className, ...props }, ref) => {
    const classes = ['input'];

    if (size) classes.push(`input--${size}`);
    if (inline) classes.push('input--inline');
    if (invalid) classes.push('input--invalid');

    const classStr = classNames(classes, className);

    switch (element) {
        case 'input':
            return <input ref={ref} {...props} className={classStr} />;
        case 'textarea':
            return <textarea ref={ref} {...props} className={classStr} />;
        case 'select':
            return <select ref={ref} {...props} className={classStr} />;
        default:
            return null;
    }
});

const basePropTypes = {
    /** Size of the Field */
    size: PropTypes.oneOf(['s', 'l']),
    /** Give Component display inline */
    inline: PropTypes.bool,
    /** mark the field as invalid */
    invalid: PropTypes.bool,
};

Input.propTypes = { ...basePropTypes };
Select.propTypes = { ...basePropTypes };
TextArea.propTypes = { ...basePropTypes };
