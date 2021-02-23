import React from 'react';
import classNames from 'classnames';
import { prefixClass } from '../utilities/utils';
import { classNameResolver } from '../utilities/classes';
import PropTypes from 'prop-types';

/** A Utility Class Generator */
function Lookingglass({ children, className, ...props }) {
    const classes1 = classNameResolver(props, classPrefix, classValueMapping);
    const classes2 = miscClassResolver(props);

    const classes = classNames(classes1, classes2, className)

    // if props.div then wrap children in a div that has the generated classes applied
    // otherwise There should be a single child that will be passed the generated classNames
    let child;
    if (props.div === true) {
        child = <div className={classes}>{children}</div>
    } else {
        const onlyChild = React.Children.only(children);
        const mergedClasses = classNames(classes, onlyChild.props.className);
        child =  React.cloneElement(onlyChild, { className: mergedClasses });
    }

    return <>{child}</>;
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
    display: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),       
    overflow: PropTypes.string,
    overflowX: PropTypes.string,
    overflowY: PropTypes.string,
    scrollbarColor: PropTypes.string,
    scrollbarSize: PropTypes.oneOf(['s', 'l']),
    scrollbarStyle: PropTypes.oneOf(['none', 'rounded']),
    scrollbarTrack: PropTypes.oneOf(['none']),
};

export default Lookingglass;
