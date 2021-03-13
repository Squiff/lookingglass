import classNames from 'classnames';
import React from 'react';

/** a List of styled List Items */
function List({ children, className, ...props }) {
    const classes = classNames('list', className);

    return (
        <ul className={classes} {...props}>
            {children}
        </ul>
    );
}

List.Item = ({ children, ...props }) => {
    const listItemClass = 'list__item';
    let content;

    if (typeof children === 'string') {
        content = <div className={listItemClass}>{children}</div>;
    } else {
        const onlyChild = React.Children.only(children);
        const mergedClasses = classNames(listItemClass, onlyChild.props.className);
        content = React.cloneElement(onlyChild, { className: mergedClasses });
    }

    return <li {...props}>{content}</li>;
};

List.Item.displayName = 'List.Item';

export default List;
