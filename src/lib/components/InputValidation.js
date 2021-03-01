import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function InputValidation({ msg, className, ...props }) {
    const classStr = classNames('input-validation', className);

    // do not render anything if no message
    if (!msg) {
        return null;
    }

    return (
        <div className={classStr} {...props}>
            {msg}
        </div>
    );
}

InputValidation.propTypes = {
    msg: PropTypes.string,
};
