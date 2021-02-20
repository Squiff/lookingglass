import React, { Children } from 'react';
import PropTypes from 'prop-types';

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
    border: PropTypes.oneOf(['all', 'none']),
    hover: PropTypes.bool,
    removeHeadColor: PropTypes.bool,
    size: PropTypes.oneOf(['s', 'l']),
};

Table.defaultProps = {
    hover: true,
};

export default Table;
