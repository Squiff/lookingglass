import React from 'react';
import classNames from 'classnames';

function Spinner({ className, style, halo, color, size }) {
    const classes = ['spinner'];

    // Spinner uses currentColor
    // this prop is only a helper to set the utility color class
    if (color) {
        classes.push(`clr--${color}`);
    }

    if (['s', 'l'].includes(size)) {
        classes.push(`spinner--${size}`);
    }

    // include a transparent halo
    let haloCircle;
    if (halo) {
        haloCircle = <circle className="spinner__halo" cx="50" cy="50" r="40"></circle>;
    }

    const classStr = classNames(classes, className);

    return (
        <svg className={classStr} style={style} viewBox="0 0 100 100">
            {haloCircle}
            <circle class="spinner__circle" cx="50" cy="50" r="40"></circle>
        </svg>
    );
}

export default Spinner;
