import React from 'react';
import classNames from 'classnames';

/** Styled wrapper around HTML Label */
const Label = React.forwardRef(({ children, className, ...props }, ref) => {
    const classes = ['label'];
    const classStr = classNames(classes, className);

    return (
        <label className={classStr} {...props} ref={ref}>
            {children}
        </label>
    );
});

export default Label;
