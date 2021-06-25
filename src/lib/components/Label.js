import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/** Styled wrapper around HTML Label */
const Label = React.forwardRef(({ disabled, invalid, children, className, ...props }, ref) => {
    const classes = {
        label: true,
        'label--disabled': disabled,
        'label--invalid': invalid,
    };

    const classStr = classNames(classes, className);

    return (
        <label className={classStr} {...props} ref={ref}>
            {children}
        </label>
    );
});

Label.displayName = 'Label';

Label.propTypes = {
    disabled: PropTypes.bool,
    invalid: PropTypes.bool,
};

export default Label;
