import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = React.forwardRef(
    (
        { children, color, size, btnStyle, block, className, hoverEffect, disabled, ...props },
        ref
    ) => {
        const classes = {
            btn: true,
            'btn--none': btnStyle === 'none',
            [`btn--none--hover-${hoverEffect}`]: btnStyle === 'none' && hoverEffect,
            'btn--block': block,
            [`btn--${size}`]: size,
            [`btn--outline-${color}`]: btnStyle === 'outline' && color,
            [`btn--clr-${color}`]: !btnStyle && color,
        };

        const classStr = classNames(classes, className);

        // allow rendering something other than a button
        // will default to "<a> if an href is supplied"
        const Tag = props.href ? 'a' : 'button';
        const disabledProps = disabledProperies(disabled, Tag);

        return (
            <Tag className={classStr} {...disabledProps} {...props} ref={ref}>
                {children}
            </Tag>
        );
    }
);

/** get disabled attributes depending on the rendered tag */
function disabledProperies(disabled, tag) {
    if (!disabled) return {};

    switch (tag) {
        case 'a':
            return linkDisabled;
        default:
            return buttonDisabled;
    }
}

/** DISABLED ATTRIBUTES */
const buttonDisabled = { disabled: true };

const linkDisabled = {
    tabIndex: '-1',
    'aria-disabled': true,
    onClick: handleDisabledClick,
};

/** Prevent disabled link navigation */
function handleDisabledClick(e) {
    e.preventDefault();
}

Button.displayName = 'Button';

Button.propTypes = {
    /** theme color to apply to the button */
    color: PropTypes.string,
    /** button size variation */
    size: PropTypes.oneOf(['s', 'l']),
    /** button style variations */
    btnStyle: PropTypes.oneOf(['none', 'outline']),
    /** apply display block */
    block: PropTypes.bool,
    /** Add hover effect when btnStyle="none" */
    hoverEffect: PropTypes.oneOf(['dark', 'light', 'opacity']),
    /** is the button disabled */
    disabled: PropTypes.bool,
    /** href location. Turns Button into a link */
    href: PropTypes.string,
};

export default Button;
