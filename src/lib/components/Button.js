import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, color, size, btnStyle, block, ...props }) {
    const classes = ['btn'];

    if (btnStyle === 'none') {
        classes.push('btn--none');
    }

    if (block) {
        classes.push('btn--block');
    }

    switch (size) {
        case 's':
            classes.push('btn--s');
            break;
        case 'l':
            classes.push('btn--l');
            break;
        default:
        // no class added
    }

    switch (btnStyle) {
        case 'none':
            classes.push('btn--none');
            break;
        case 'outline':
            classes.push(`btn--outline-${color}`);
            break;
        default:
            classes.push(`btn--clr-${color}`);
            classes.push('btn--shadow');
    }

    const classStr = classes.join(' ');

    return (
        <button className={classStr} {...props}>
            {children}
        </button>
    );
}

Button.propTypes = {
    /** theme color to apply to the button */
    color: PropTypes.string,
    /** button size variation */
    size: PropTypes.oneOf(['s', 'l']),
    /** button style variations */
    btnStyle: PropTypes.oneOf(['none', 'outline']),
    /** apply display block */
    block: PropTypes.bool,
};

export default Button;
