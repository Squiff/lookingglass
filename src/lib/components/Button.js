import React from 'react';

function Button({ children, color, size, btnStyle, shadow, block, ...props }) {
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
            // include shadow by default
            if (shadow !== false) {
                classes.push('btn--shadow');
            }
    }

    const classStr = classes.join(' ');

    return (
        <button className={classStr} {...props}>
            {children}
        </button>
    );
}

export default Button;
