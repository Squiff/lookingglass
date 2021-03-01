import React from 'react';
import classNames from 'classnames';

export default function FormGroup({ children, className, ...props }) {
    const classStr = classNames('form-group', className);

    return (
        <div className={classStr} {...props}>
            {children}
        </div>
    );
}
