import React from 'react';
import { prefixClasses, prefixClass, isBreakpoint } from '../utilities/utils';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/** A utility for creating responsive flexbox layouts */
const Flex = React.forwardRef(
    ({ children, className, style, cols, justify, align, direction, wrap, ...otherProps }, ref) => {
        const classes = {
            flex: true,
            // [`flex--${cols}`]: cols !== undefined && typeof cols !== 'object',
            [`flex--dir-${direction}`]: direction !== undefined,
            [`flex--nowrap`]: wrap === 'nowrap',
            [`justify--${justify}`]: justify !== undefined,
            [`align--${align}`]: align !== undefined,
        };

        const columnClasses = getColumnClasses(cols, 'flex');

        const classNameStr = classNames(classes, columnClasses, className);

        return (
            <div className={classNameStr} style={style} ref={ref}>
                {children}
            </div>
        );
    }
);

Flex.Child = ({ children, className, cols, ...props }) => {
    const columnClasses = getColumnClasses(cols, 'fx');

    const classStr = classNames(columnClasses, className);

    return (
        <div className={classStr} {...props}>
            {children}
        </div>
    );
};

Flex.Child.displayName = 'Flex.Child';

function getColumnClasses(cols, colsPrefix) {
    const classes = [];

    if (typeof cols === 'object') {
        for (const k in cols) {
            const flexClassName = `${colsPrefix}--${cols[k]}`;
            const breakpointClass = prefixClass(k, flexClassName);
            classes.push(breakpointClass);
        }
    } else if (cols !== undefined) {
        classes.push(`${colsPrefix}--${cols}`);
    }

    return classes;
}

Flex.propTypes = {
    /** The number of columns */
    cols: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.oneOf(['equal', 'auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
    ]),
    /** Justify content */
    justify: PropTypes.oneOf(['center', 'start', 'end', 'between', 'around', 'evenly']),
    /** Align items */
    align: PropTypes.oneOf(['start', 'end', 'center', 'baseline']),
    /** Flex Direction */
    direction: PropTypes.oneOf(['columns']),
    /** Flex Wrap */
    wrap: PropTypes.oneOf(['nowrap']),
};

Flex.Child.propTypes = {
    cols: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.oneOf(['equal', 'auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
    ]),
};

export default Flex;
