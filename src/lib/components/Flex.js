import React from 'react';
import { prefixClasses, prefixClass, isBreakpoint } from '../utilities/utils';
import PropTypes from 'prop-types';

/** A utility for creating responsive flexbox layouts */
export default function Flex(props) {
    let { children, className, type, cols, justify, align, ...otherProps } = props;

    // get class names
    let classes = ['flex'];
    const addClasses = FlexPropResolver({ type, cols, justify, align });

    classes = [...classes, ...addClasses];

    if (typeof cols === 'object') {
        for (const b in cols) {
            const breakpointValue = `flex-${cols[b]}`;
            const prefixedClasses = prefixClass(b, breakpointValue);

            classes.push(prefixedClasses);
        }
    }

    // get responsive class names
    for (const p in otherProps) {
        if (isBreakpoint(p) === true) {
            const breakpointClasses = FlexPropResolver(otherProps[p]);
            const prefixedClasses = prefixClasses(p, breakpointClasses);

            classes = [...classes, ...prefixedClasses];
        }
    }

    // get class string
    const classStr = classes.join(' ');
    // forward passed in via className
    const classNameStr = className ? className : '';

    return <div className={`${classStr} ${classNameStr}`}>{children}</div>;
}

// fx-{#}, fx-auto, fx-equal
Flex.Child = (props) => {
    let { children, cols, ...otherProps } = props;

    let classes = [];

    if (typeof cols === 'object') {
        // no need to provide object to breakpoint prop as there is only 'cols' option
        // for (const p in otherProps) {
        //     if (isBreakpoint(p) === true) {
        //         const breakpointClass = `fx-${otherProps[p]}`;
        //         const prefixedClass = prefixClass(p, breakpointClass);

        //         classes.push(prefixedClass);
        //     }
        // }

        for (const b in cols) {
            const breakpointValue = `fx-${cols[b]}`;
            const prefixedClasses = prefixClass(b, breakpointValue);

            classes.push(prefixedClasses);
        }
    } else {
        classes.push(`fx-${cols}`);
    }

    const classStr = classes.join(' ');

    return <div className={`${classStr}`}>{children}</div>;
};

// resolve property object to a list of classes
function FlexPropResolver(props) {
    const output = [];

    for (const prop in props) {
        const className = FlexClassResolver(prop, props[prop]);

        if (className) output.push(className);
    }

    return output;
}

// resolve a property/value to a class name
function FlexClassResolver(property, value) {
    if (value === undefined) return undefined;

    switch (property) {
        case 'cols':
            if (typeof value !== 'object') {
                return `flex-${value}`;
            }
        case 'justify':
            return `justify-${value}`;
        case 'align':
            return `align-${value}`;
        default:
            return undefined;
    }
}

Flex.propTypes = {
    /** Default columns for flex children */
    cols: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.oneOf(['equal', 'auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
    ]),
    /** Justify content */
    justify: PropTypes.oneOf(['center', 'start', 'end', 'between', 'around', 'evenly']),
    /** Align items */
    align: PropTypes.oneOf(['start', 'end', 'center', 'baseline']),
};

Flex.Child.propTypes = {
    cols: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.oneOf(['equal', 'auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
    ]),
};

Flex.Child.displayName = 'Flex.Child';
