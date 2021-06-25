import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/** Provides styling options for tables */
function Table({ children, className, size, border, hover, ...props }) {
    const classes = {
        table: true,
        [`table--${size}`]: size !== undefined,
        [`table--border-${border}`]: border !== undefined,
        'table--hover-none': hover === false,
    };

    const classStr = classNames(classes, className);

    return (
        <table className={classStr} {...props}>
            {children}
        </table>
    );
}

Table.propTypes = {
    /** Where to apply borders */
    border: PropTypes.oneOf(['all', 'none']),
    /** Enable row hover effect */
    hover: PropTypes.bool,
    /** Adjust amount of padding in each cell */
    size: PropTypes.oneOf(['s', 'l']),
};

Table.defaultProps = {
    hover: true,
};

export default Table;
