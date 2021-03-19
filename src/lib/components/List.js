import classNames from 'classnames';
import React from 'react';

/** A styled list of items */
function List({ children, className, ...props }) {
    const classes = classNames('list', className);

    return (
        <ul className={classes} {...props}>
            {children}
        </ul>
    );
}

List.Item = ({ children, className, ...props }) => {
    const classes = classNames('list__item', className);
    return (
        <li className={classes} {...props}>
            {children}
        </li>
    );
};

List.Button = ({ children, className, ...props }) => {
    const classes = classNames('list__item', className);
    return (
        <li>
            <button className={classes} {...props}>
                {children}
            </button>
        </li>
    );
};

List.Link = ({ children, className, ...props }) => {
    const classes = classNames('list__item', className);
    return (
        <li>
            <a className={classes} {...props}>
                {children}
            </a>
        </li>
    );
};

List.Item.displayName = 'List.Item';
List.Button.displayName = 'List.Button';
List.Link.displayName = 'List.Link';

export default List;
