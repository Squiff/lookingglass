import React, { Children } from 'react';

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

Table.defaultProps = {
    hover: true,
};

export default Table;
