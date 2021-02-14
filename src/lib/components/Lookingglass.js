import React from 'react';
import classNames from 'classnames';

// component generates classes from props and merges them with classes on the child
// should have a single child
function Lookingglass({ children, ...props }) {
    const classes1 = classNameResolver(props, classPrefix, classValueMapping);
    const classes2 = miscClassResolver(props);

    const child = React.Children.only(children);
    const mergedClasses = classNames(classes1, classes2, child.props.className);
    const childWithClass = React.cloneElement(child, { className: mergedClasses });

    return <>{childWithClass}</>;
}

const classPrefix = {
    backgroundColor: 'bg',
    color: 'clr',
    border: 'bdr',
    borderTop: 'bdr-t',
    borderRight: 'bdr-r',
    borderBottom: 'bdr-b',
    borderLeft: 'bdr-l',
    borderColor: 'bdr-clr',
    borderRadius: 'bdr-rad',
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
    shadow: 'shadow',
    fontSize: 'fs',
    fontWeight: 'fw',
    textDecoration: 'text-decoration',
    textTransform: 'text-transform',
    textAlign: 'text-align',
};

const classValueMapping = {
    borderColor: { current: 'current-color' },
    textDecoration: { 'line-through': 'strike' },
};

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

// function for class Names that do not fit into the classNameResolver pattern
function miscClassResolver(props) {
    const { border, borderTop, borderRight, borderBottom, borderLeft } = props;
    const output = [];

    // add base border style if at least ones of these props is defined
    if ([border, borderTop, borderRight, borderBottom, borderLeft].some((a) => a !== undefined)) {
        output.push('bdr');
    }

    return output;
}

export default Lookingglass;
