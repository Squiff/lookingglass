import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**  Spinners for indicating loading state */
function Spinner({ className, style, halo, size, delay }) {
    const [mount, setMount] = useState(delay ? false : true);

    useEffect(() => {
        if (!delay) return;

        const timer = setTimeout(() => setMount(true), delay);

        return () => {
            clearTimeout(timer);
        };
    }, [delay]);

    if (!mount) return null;

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
        <span aria-label="loading">
            <svg className={classStr} style={style} viewBox="0 0 100 100">
                {haloCircle}
                <circle className="spinner__circle" cx="50" cy="50" r="40"></circle>
            </svg>
        </span>
    );
}

Spinner.propTypes = {
    /** Show a translucent background track */
    halo: PropTypes.bool,
    /** Size modifier */
    size: PropTypes.oneOf(['s', 'l']),
    /** Mount delay timer */
    delay: PropTypes.number,
};

export default Spinner;
