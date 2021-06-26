import React, { Children } from 'react';
import PropTypes from 'prop-types';

/** A switch-case implementation for controlling component visibility */
function Switch({ value, single, children }) {
    const cases = Children.toArray(children).filter((c) => c.type === Switch.Case);

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

// linter seems to have isse with the name "Case", despite being valid
// eslint-disable-next-line no-unused-vars, react/display-name, react/prop-types
Switch.Case = ({ children, value, fallback }) => {
    return <>{children}</>;
};

Switch.displayName = 'Switch';
Switch.Case.displayName = 'Switch.Case';

Switch.propTypes = {
    /** The value to be tested */
    value: PropTypes.any,
    /** Only show the first matching case */
    single: PropTypes.bool,
};

Switch.Case.propTypes = {
    /** The value to test against */
    value: PropTypes.any,
    /** Show if there are no matches in the Switch */
    fallback: PropTypes.bool,
};

function isMatch(switchValue, caseValue) {
    return (switchValue === caseValue && switchValue !== undefined) || caseValue === true;
}

export default Switch;
