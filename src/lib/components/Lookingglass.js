import React from 'react';
import classNames from 'classnames';

// component generates classes from props and merges them with classes on the child
// should have a single child
function Lookingglass({ children, ...props }) {
    const borderClasses = borderClassResolver(props);
    const spacerClasses = spacerClassResolver(props);

    const child = React.Children.only(children);
    const classes = classNames(borderClasses, spacerClasses, child.props.className);
    const childWithClass = React.cloneElement(child, { className: classes });

    return <>{childWithClass}</>;
}

const isDefined = (a) => a !== undefined;

// a generic function to resolve props to class names
// provide a list of properties {prop: value}
// provide a class name mapping {prop: classPrefix}
// provide a value mapping {prop: {value: mappedValue}}
// return a list of class Names in format [classPrefix][separator][value]
function classNameResolver(props, classMapping, valueMapping, separator = '--') {
    const output = [];

    for (const key in props) {
        const value = props[key];
        if (value !== undefined) {
            const prefix = classMapping[key];
            let classNameSuffix = value;

            if (valueMapping && valueMapping[key] && valueMapping[key][value]) {
                classNameSuffix = valueMapping[key][value];
            }

            output.push(`${prefix}${separator}${classNameSuffix}`);
        }
    }

    return output;
}

function borderClassResolver(props) {
    const { border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius } = props;
    const borderProps = { border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius };

    let output = [];

    const classPrefix = {
        border: 'bdr',
        borderTop: 'bdr-t',
        borderRight: 'bdr-r',
        borderBottom: 'bdr-b',
        borderLeft: 'bdr-l',
        borderColor: 'bdr-clr',
        borderRadius: 'bdr-rad',
    };

    const borderValues = {
        borderColor: { current: 'current-color' },
    };

    // add base border style if at least ones of these props is defined
    if ([border, borderTop, borderRight, borderBottom, borderLeft].some(isDefined)) {
        output.push('bdr');
    }

    const classNames = classNameResolver(borderProps, classPrefix, borderValues);

    return [...output, ...classNames];
}

function spacerClassResolver(props) {
    const {
        margin,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        padding,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
    } = props;

    const spacerProps = {
        margin,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        padding,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
    };

    const classPrefix = {
        margin: 'm',
        marginTop: 'm-t',
        marginRight: 'm-r',
        marginBottom: 'm-b',
        marginLeft: 'm-l',
        padding: 'p',
        paddingTop: 'p-t',
        paddingRight: 'p-r',
        paddingBottom: 'p-b',
        paddingLeft: 'p-l',
    };

    return classNameResolver(spacerProps, classPrefix);
}

export default Lookingglass;
