import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Input = React.forwardRef((props, ref) => {
    return <InputBase element="input" {...props} ref={ref} />;
});

export const Select = React.forwardRef((props, ref) => {
    return <InputBase element="select" {...props} ref={ref} />;
});

export const TextArea = React.forwardRef((props, ref) => {
    return <InputBase element="textarea" ref={ref} {...props} />;
});

const InputBase = React.forwardRef(({ element, size, inline, invalid, className, ...props }, ref) => {
    const classes = {
        input: true,
        'input--inline': inline,
        'input--invalid': invalid,
        [`input--${size}`]: size,
    };

    const classStr = classNames(classes, className);

    // needs to be capitalized
    const Element = element;

    return <Element ref={ref} {...props} className={classStr} />;
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
