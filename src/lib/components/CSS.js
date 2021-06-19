import React from 'react';
import classNames from 'classnames';
import { prefixClass } from '../utilities/utils';
import PropTypes from 'prop-types';

/** A Utility Class Generator */
const CSS = React.forwardRef(
    (
        {
            children,
            className,
            style,
            div,
            container,
            backgroundColor,
            color,
            border,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
            borderColor,
            borderRadius,
            margin,
            marginTop,
            marginRight,
            marginBottom,
            marginLeft,
            marginX,
            marginY,
            padding,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
            paddingX,
            paddingY,
            shadow,
            fontSize,
            fontWeight,
            textDecoration,
            textTransform,
            textAlign,
            width,
            height,
            position,
            left,
            right,
            top,
            bottom,
            absolute,
            display,
            overflow,
            overflowX,
            overflowY,
            scrollbarColor,
            scrollbarSize,
            scrollbarStyle,
            scrollbarTrack,
            listStyleType,
            listPosition,
            ...props
        },
        ref
    ) => {
        /*======== CLASSES ======== */
        const brdClrClass = borderColor === 'currentColor' ? 'current-color' : borderColor;
        const textDecClass = textDecoration === 'line-through' ? 'strike' : textDecoration;
        const displayClasses = displayClassResolver(display);

        const classes = classNames(className, displayClasses, {
            container: container,
            [`bg--${backgroundColor}`]: backgroundColor,
            [`clr--${color}`]: color,
            bdr: border || borderTop || borderRight || borderBottom || borderLeft,
            [`bdr--${border}`]: border,
            [`bdr-t--${borderTop}`]: borderTop,
            [`bdr-r--${borderRight}`]: borderRight,
            [`bdr-b--${borderBottom}`]: borderBottom,
            [`bdr-l--${borderLeft}`]: borderLeft,
            [`bdr-clr--${brdClrClass}`]: borderColor,
            [`bdr-rad--${borderRadius}`]: borderRadius,
            [`m--${margin}`]: margin,
            [`m-t--${marginTop}`]: marginTop,
            [`m-r--${marginRight}`]: marginRight,
            [`m-b--${marginBottom}`]: marginBottom,
            [`m-l--${marginLeft}`]: marginLeft,
            [`m-x--${marginX}`]: marginX,
            [`m-y--${marginY}`]: marginY,
            [`p--${padding}`]: padding,
            [`p-t--${paddingTop}`]: paddingTop,
            [`p-r--${paddingRight}`]: paddingRight,
            [`p-b--${paddingBottom}`]: paddingBottom,
            [`p-l--${paddingLeft}`]: paddingLeft,
            [`p-x--${paddingX}`]: paddingX,
            [`p-y--${paddingY}`]: paddingY,
            [`shadow--${shadow}`]: shadow,
            [`fs--${fontSize?.replace('.', '-')}`]: fontSize,
            [`fw--${fontWeight}`]: fontWeight,
            [`text-decoration--${textDecClass}`]: textDecoration,
            [`text-transform--${textTransform}`]: textTransform,
            [`text-align--${textAlign}`]: textAlign,
            [`w--${width}`]: width,
            [`h--${height}`]: height,
            [`pos--${position}`]: position,
            [`left--${left}`]: left,
            [`right--${right}`]: right,
            [`top--${top}`]: top,
            [`bottom--${bottom}`]: bottom,
            [`pos-abs--${absolute}`]: absolute,
            [`overflow--${overflow}`]: overflow,
            [`overflow-x--${overflowX}`]: overflowX,
            [`overflow-y--${overflowY}`]: overflowY,
            scrl: scrollbarColor || scrollbarSize || scrollbarStyle || scrollbarTrack,
            [`scrl-clr--${scrollbarColor}`]: scrollbarColor,
            [`scrl--${scrollbarSize}`]: scrollbarSize,
            [`scrl--${scrollbarStyle}`]: scrollbarStyle,
            [`scrl__track--${scrollbarTrack}`]: scrollbarTrack,
            [`lst--${listStyleType}`]: listStyleType,
            [`list-pos--${listPosition}`]: listPosition,
        });

        /*======== CLASSES END ======== */

        // if props.div then wrap children in a div that has the generated classes applied
        // otherwise There should be a single child that will be passed the generated classNames
        let child;
        if (div === true) {
            child = (
                <div className={classes} style={style} ref={ref} {...props}>
                    {children}
                </div>
            );
        } else {
            const onlyChild = React.Children.only(children);
            const mergedClasses = classNames(classes, onlyChild.props.className);
            child = React.cloneElement(onlyChild, { className: mergedClasses });
        }

        return <>{child}</>;
    }
);

/** Return array of display classes. Display can be an string or object of breakpoint values */
function displayClassResolver(display) {
    const output = [];

    if (typeof display === 'object') {
        for (const k in display) {
            const displayClassName = `display--${display[k]}`;
            const breakpointClass = prefixClass(k, displayClassName);
            output.push(breakpointClass);
        }
    }

    if (typeof display === 'string') {
        output.push(`display--${display}`);
    }

    return output;
}

CSS.propTypes = {
    /** Is this a container */
    container: PropTypes.bool,
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
    /** Shadow */
    shadow: PropTypes.string,
    /** Font Size in Rem */
    fontSize: PropTypes.string,
    /** Font Weight */
    fontWeight: PropTypes.string,
    /** Text Decoration */
    textDecoration: PropTypes.string,
    /** Text Transformation */
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
    absolute: PropTypes.oneOf([
        'top-left',
        'top-middle',
        'top-right',
        'middle-left',
        'middle',
        'middle-right',
        'bottom-left',
        'bottom-middle',
        'bottom-right',
    ]),
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
    scrollbarSize: PropTypes.oneOf(['s', 'none']),
    /** Scrollbar Style */
    scrollbarStyle: PropTypes.oneOf(['rounded']),
    /** Scrollbar Track */
    scrollbarTrack: PropTypes.oneOf(['none']),
    /** List Style Type */
    listStyleType: PropTypes.string,
    /** List Position */
    listPosition: PropTypes.oneOf(['inside']),
};

export default CSS;
