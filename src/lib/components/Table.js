import React, { Children } from 'react';
import PropTypes from 'prop-types';

/** Provides styling options for Tables */
function Table({ children, size, border, hover, removeHeadColor }) {
    const classes = ['table'];

    if (size) {
        classes.push(`table--${size}`);
    }

    if (border) {
        classes.push(`table--border-${border}`);
    }

    if (!hover) {
        classes.push('table--hover-none');
    }

    if (removeHeadColor) {
        classes.push('table--th-plain');
    }

    const classStr = classes.join(' ');

    return <table className={classStr}>{children}</table>;
}

Table.propTypes = {
    /** Where to apply borders */
    border: PropTypes.oneOf(['all', 'none']),
    /** Enable row hover effect */
    hover: PropTypes.bool,
    /** Add Background Color to Header row */
    removeHeadColor: PropTypes.bool,
    /** Padding modifier to provide to td/th elements */
    size: PropTypes.oneOf(['s', 'l']),
};

Table.defaultProps = {
    hover: true,
};

export default Table;
