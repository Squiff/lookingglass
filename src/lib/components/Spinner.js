import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**  Spinners for indicating loading state */
function Spinner({ className, style, halo, size }) {
    const classes = {
        spinner: true,
        [`spinner--${size}`]: size,
    };

    // include a transparent halo
    let haloCircle;
    if (halo) {
        haloCircle = <circle className="spinner__halo" cx="50" cy="50" r="40"></circle>;
    }

    const classStr = classNames(classes, className);

    return (
        <svg className={classStr} style={style} viewBox="0 0 100 100">
            {haloCircle}
            <circle className="spinner__circle" cx="50" cy="50" r="40"></circle>
        </svg>
    );
}

Spinner.propTypes = {
    /** Show a translucent background track */
    halo: PropTypes.bool,
    /** Size modifier */
    size: PropTypes.oneOf(['s', 'l']),
};

export default Spinner;
