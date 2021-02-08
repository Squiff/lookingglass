import React from 'react';
import classNames from 'classnames';

function Card({ children, style }) {
    return (
        <div className="card" style={style}>
            {children}
        </div>
    );
}

Card.Content = ({ children }) => {
    return <div className="card__content">{children}</div>;
};

Card.Header = ({ children }) => {
    return <div className="card__header">{children}</div>;
};

Card.Body = ({ children }) => {
    return <div className="card__body">{children}</div>;
};

Card.Img = (props) => {
    const { children, className, ...otherProps } = props;

    const classStr = classNames('card__img-container', className);

    return (
        <div className={classStr} {...otherProps}>
            {children}
        </div>
    );
};

export default Card;
