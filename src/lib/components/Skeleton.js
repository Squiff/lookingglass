import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/** A Skeleton acts as a placeholder for loading content */
function Skeleton({ dark, className, ...props }) {
    const classes = classNames(
        {
            skeleton: true,
            'skeleton--dark': dark,
        },
        className
    );

    return <div className={classes} {...props}></div>;
}

Skeleton.propTypes = {
    /** Enable for use on dark backgrounds */
    dark: PropTypes.bool,
};

export default Skeleton;
