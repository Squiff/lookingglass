import React from 'react';
import { prefixClasses, prefixClass, isBreakpoint } from '../utilities/utils';

// type: equal | stack | auto
// cols - should not be able to specify above + columns
//
// justify
// align
// flex-equal, flex-stack, flex-auto,

export default function Flex(props) {
    let {
        children,
        className,
        type,
        cols,
        justify,
        align,
        ...otherProps
    } = props;

    // get class names
    let classes = ['flex'];
    const addClasses = FlexPropResolver({ type, cols, justify, align });

    classes = [...classes, ...addClasses];

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

    if (cols) classes.push(`fx-${cols}`);

    // no need to provide object to breakpoint prop as there is only 'cols' option
    for (const p in otherProps) {
        if (isBreakpoint(p) === true) {
            const breakpointClass = `fx-${otherProps[p]}`;
            const prefixedClass = prefixClass(p, breakpointClass);

            classes = classes.push(prefixedClass);
        }
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
        case 'type':
            return `flex-${value}`;
        case 'cols':
            return `flex-cols-${value}`;
        case 'justify':
            return `justify-${value}`;
        case 'align':
            return `align-${value}`;
        default:
            return undefined;
    }
}
