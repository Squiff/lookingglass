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

const InputBase = React.forwardRef(
    ({ element, size, inline, invalid, className, ...props }, ref) => {
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
    }
);

const sharedProps = {
    /** Size of the Field */
    size: PropTypes.oneOf(['s', 'l']),
    /** Give Component display inline */
    inline: PropTypes.bool,
    /** mark the field as invalid */
    invalid: PropTypes.bool,
};

InputBase.propTypes = {
    ...sharedProps,
    element: PropTypes.oneOf(['input', 'select', 'textarea']),
};

InputBase.displayName = 'InputBase';
Input.displayName = 'Input';
Select.displayName = 'Select';
TextArea.displayName = 'TextArea';

Input.propTypes = { ...sharedProps };
Select.propTypes = { ...sharedProps };
TextArea.propTypes = { ...sharedProps };
