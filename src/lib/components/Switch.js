import React, { Children } from 'react';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

/** A switch-case implementation for controlling component visibility */
function Switch({ value, single, children }) {
    let cases = Children.toArray(children).filter((c) => c.type === Switch.Case);

    if (cases.count === 0) return null;

    let matches;

    if (single) {
        const match = cases.find((c) => isMatch(value, c.props.value));

        matches = match ? [match] : [];
    } else {
        matches = cases.filter((c) => isMatch(value, c.props.value));
    }

    // no matches try to find fallback
    if (matches.length === 0) {
        matches = cases.find((c) => c.props.fallback);
    }

    return <>{matches}</>;
}

Switch.Case = ({ children, value }) => {
    return <>{children}</>;
};

Switch.Case.displayName = 'Switch.Case';

Switch.propTypes = {
    value: PropTypes.any,
    single: PropTypes.bool,
};

Switch.Case.propTypes = {
    value: PropTypes.any,
};

function isMatch(switchValue, caseValue) {
    return (switchValue === caseValue && switchValue !== undefined) || caseValue === true;
}

export default Switch;

undefined === undefined;
