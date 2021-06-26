import React from 'react';
import classNames from 'classnames';

export default function InputHelp({ children, className, ...props }) {
    const classStr = classNames('input-helptext', className);

    return (
        <div className={classStr} {...props}>
            {children}
        </div>
    );
}
