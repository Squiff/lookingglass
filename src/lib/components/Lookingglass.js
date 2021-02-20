import React from 'react';
import classNames from 'classnames';
import { prefixClass } from '../utilities/utils';
import PropTypes from 'prop-types';

// component generates classes from props and merges them with classes on the child
// should have a single child
function Lookingglass({ children, className, ...props }) {
    const classes1 = classNameResolver(props, classPrefix, classValueMapping);
    const classes2 = miscClassResolver(props);

    const child = React.Children.only(children);
    const mergedClasses = classNames(classes1, classes2, className, child.props.className);
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
    marginX: 'm-x',
    marginY: 'm-y',
    padding: 'p',
    paddingTop: 'p-t',
    paddingRight: 'p-r',
    paddingBottom: 'p-b',
    paddingLeft: 'p-l',
    paddingX: 'p-x',
    paddingY: 'p-y',
    shadow: 'shadow',
    fontSize: 'fs',
    fontWeight: 'fw',
    textDecoration: 'text-decoration',
    textTransform: 'text-transform',
    textAlign: 'text-align',
    width: 'w',
    height: 'h',
    position: 'pos',
    left: 'left',
    right: 'right',
    top: 'top',
    bottom: 'bottom',
    absolute: 'pos-abs',
    display: 'display',
    overflow: 'overflow',
    overflowX: 'overflow-x',
    overflowY: 'overflow-y',
    scrollbarColor: 'scrl-clr',
    scrollbarSize: 'scrl',
    scrollbarStyle: 'scrl',
    scrollbarTrack: 'scrl__track',
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
        if (value !== undefined && typeof value !== 'object') {
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

    // add base scrollbar style if at least one of these props is defined
    const { scrollbarColor, scrollbarSize, scrollbarStyle, scrollbarTrack } = props;
    if ([scrollbarColor, scrollbarSize, scrollbarStyle, scrollbarTrack].some((a) => a !== undefined)) {
        output.push('scrl');
    }

    // display can pass in an object of breakpoint values {s:'none', m:'block'}
    const display = props.display;
    if (typeof display === 'object') {
        for (const k in display) {
            const displayClassName = `${classPrefix.display}--${display[k]}`;
            const breakpointClass = prefixClass(k, displayClassName);
            output.push(breakpointClass);
        }
    }

    return output;
}

Lookingglass.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    border: PropTypes.string,
    borderTop: PropTypes.string,
    borderRight: PropTypes.string,
    borderBottom: PropTypes.string,
    borderLeft: PropTypes.string,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.string,
    margin: PropTypes.string,
    marginTop: PropTypes.string,
    marginRight: PropTypes.string,
    marginBottom: PropTypes.string,
    marginLeft: PropTypes.string,
    marginX: PropTypes.string,
    marginY: PropTypes.string,
    padding: PropTypes.string,
    paddingTop: PropTypes.string,
    paddingRight: PropTypes.string,
    paddingBottom: PropTypes.string,
    paddingLeft: PropTypes.string,
    paddingX: PropTypes.string,
    paddingY: PropTypes.string,
    shadow: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    textDecoration: PropTypes.string,
    textTransform: PropTypes.string,
    textAlign: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    position: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string,
    absolute: PropTypes.string,
    display: PropTypes.string,
    overflow: PropTypes.string,
    overflowX: PropTypes.string,
    overflowY: PropTypes.string,
    scrollbarColor: PropTypes.string,
    scrollbarSize: PropTypes.oneOf(['s', 'l']),
    scrollbarStyle: PropTypes.oneOf(['none', 'rounded']),
    scrollbarTrack: PropTypes.oneOf(['none']),
};

export default Lookingglass;
