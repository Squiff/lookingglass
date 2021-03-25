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

Card.Content = ({ children, className }) => {
    const classes = classNames('card__content', className);
    return <div className={classes}>{children}</div>;
};

Card.Header = ({ children, className }) => {
    const classes = classNames('card__header', className);
    return <h3 className={classes}>{children}</h3>;
};

Card.Body = ({ children, className }) => {
    const classes = classNames('card__body', className);
    return <div className={classes}>{children}</div>;
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
