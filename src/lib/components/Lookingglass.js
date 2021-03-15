import React from 'react';
import classNames from 'classnames';
import { prefixClass } from '../utilities/utils';
import { classNameResolver } from '../utilities/classes';
import PropTypes from 'prop-types';

/** A Utility Class Generator */
const Lookingglass = React.forwardRef(({ children, className, style, ...props }, ref) => {
    const classes1 = classNameResolver(props, classPrefix, classValueMapping);
    const classes2 = miscClassResolver(props);

    const classes = classNames(classes1, classes2, className);

    // if props.div then wrap children in a div that has the generated classes applied
    // otherwise There should be a single child that will be passed the generated classNames
    let child;
    if (props.div === true) {
        child = (
            <div className={classes} style={style} ref={ref}>
                {children}
            </div>
        );
    } else {
        const onlyChild = React.Children.only(children);
        const mergedClasses = classNames(classes, onlyChild.props.className);
        child = React.cloneElement(onlyChild, { className: mergedClasses });
    }

    return <>{child}</>;
});

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
    listStyleType: 'lst',
    listPosition: 'list-pos',
};

const classValueMapping = {
    borderColor: { currentColor: 'current-color' },
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
    /** Background Color */
    backgroundColor: PropTypes.string,
    /** Text Color */
    color: PropTypes.string,
    /** Border Width */
    border: PropTypes.string,
    /** Border Top Width */
    borderTop: PropTypes.string,
    /** Border Right Width */
    borderRight: PropTypes.string,
    /** Border Bottom Width */
    borderBottom: PropTypes.string,
    /** Border Left Width */
    borderLeft: PropTypes.string,
    /** Border Color */
    borderColor: PropTypes.string,
    /** Border Radius */
    borderRadius: PropTypes.string,
    /** Margin */
    margin: PropTypes.string,
    /** Margin Top */
    marginTop: PropTypes.string,
    /** Margin Right */
    marginRight: PropTypes.string,
    /** Margin Bottom */
    marginBottom: PropTypes.string,
    /** Margin Left */
    marginLeft: PropTypes.string,
    /** Margin Left and Right */
    marginX: PropTypes.string,
    /** Margin Top and Bottom */
    marginY: PropTypes.string,
    /** Padding */
    padding: PropTypes.string,
    /** Padding top */
    paddingTop: PropTypes.string,
    /** Padding Right */
    paddingRight: PropTypes.string,
    /** Padding Bottom */
    paddingBottom: PropTypes.string,
    /** Padding Left */
    paddingLeft: PropTypes.string,
    /** Padding Left and Right */
    paddingX: PropTypes.string,
    /** Padding Top and Bottom */
    paddingY: PropTypes.string,
    /** Shadow (elevation number) */
    shadow: PropTypes.string,
    /** Font Size rem */
    fontSize: PropTypes.string,
    /** font Weight */
    fontWeight: PropTypes.string,
    /** Text Decoration */
    textDecoration: PropTypes.string,
    /** text Transformation */
    textTransform: PropTypes.string,
    /** Text Align */
    textAlign: PropTypes.string,
    /** Width */
    width: PropTypes.string,
    /** Height */
    height: PropTypes.string,
    /** Position */
    position: PropTypes.string,
    /** Left Position */
    left: PropTypes.string,
    /** Right Position */
    right: PropTypes.string,
    /** top Position */
    top: PropTypes.string,
    /** bottom Position */
    bottom: PropTypes.string,
    /** Pre defined absolute positions */
    absolute: PropTypes.string,
    /** Display string or object of breakpoint values*/
    display: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /** Overflow */
    overflow: PropTypes.string,
    /** Overflow X */
    overflowX: PropTypes.string,
    /** Overflow Y */
    overflowY: PropTypes.string,
    /** Scrollbar Color */
    scrollbarColor: PropTypes.string,
    /** Scrollbar Size */
    scrollbarSize: PropTypes.oneOf(['s', 'l']),
    /** Scrollbar Style */
    scrollbarStyle: PropTypes.oneOf(['none', 'rounded']),
    /** Scrollbar Track */
    scrollbarTrack: PropTypes.oneOf(['none']),
    /** List Style Type */
    listStyleType: PropTypes.string,
    /** List Position */
    listPosition: PropTypes.oneOf(['inside']),
};

export default Lookingglass;
