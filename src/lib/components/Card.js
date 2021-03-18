import React from 'react';
import classNames from 'classnames';

/** A Content container suitable for most element types  */
function Card({ children, className, style }) {
    const classes = classNames('card', className);

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

Card.Content = ({ children }) => {
    return <div className="card__content">{children}</div>;
};

Card.Header = ({ children }) => {
    return <h3 className="card__header">{children}</h3>;
};

Card.Body = ({ children }) => {
    return <div className="card__body">{children}</div>;
};

Card.Img = ({ children, className, ...props }) => {
    const classes = classNames('card__img', className);

    return <img className={classes} {...props} />;
};

Card.Content.displayName = 'Card.Content';
Card.Header.displayName = 'Card.Header';
Card.Body.displayName = 'Card.Body';
Card.Img.displayName = 'Card.Img';

export default Card;
