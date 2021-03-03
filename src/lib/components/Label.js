import React from 'react';
import classNames from 'classnames';

/** Styled wrapper around HTML Label */
const Label = React.forwardRef(({ disabled, invalid, children, className, ...props }, ref) => {
    const classes = ['label'];

    if (disabled) classes.push('label--disabled');
    if (invalid) classes.push('label--invalid');

    const classStr = classNames(classes, className);

    return (
        <label className={classStr} {...props} ref={ref}>
            {children}
        </label>
    );
});

export default Label;
