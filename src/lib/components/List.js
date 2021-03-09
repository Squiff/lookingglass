import classNames from 'classnames';
import React from 'react';

function List({ children, className, ...props }) {
    const classes = classNames('list', className);

    return (
        <ul className={classes} {...props}>
            {children}
        </ul>
    );
}

List.Item = ({ children, ...props }) => {
    const onlyChild = React.Children.only(children);
    const mergedClasses = classNames('list__item', onlyChild.props.className);
    const child = React.cloneElement(onlyChild, { className: mergedClasses });

    return <li {...props}>{child}</li>;
};

export default List;
