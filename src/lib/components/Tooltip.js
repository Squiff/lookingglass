import React, { useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import PropTypes from 'prop-types';

Tooltip.defaultProps = {
    trigger: 'hover',
    triggerDelay: 500,
    placement: 'bottom',
};

Tooltip.propTypes = {
    /** Tooltip location relative to the target element */
    placement: PropTypes.oneOf([
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-start',
        'bottom',
        'bottom-end',
        'left-start',
        'left',
        'left-end',
    ]),
    /** Include an arrow pointer */
    arrow: PropTypes.bool,
    /** Action that triggers the tooltip to show */
    trigger: PropTypes.oneOf(['hover', 'focus', 'none']),
    /** Delay after the initial trigger action */
    triggerDelay: PropTypes.number,
    /** Control whether the tool tip is visible or not */
    show: PropTypes.bool,
    /** Distance, in pixels, from the target that the tooltip should be located */
    distance: PropTypes.number,
    /** ref of the target element */
    targetRef: PropTypes.shape({ current: PropTypes.any }),
};

/** Pop ups that float near a target element */
function Tooltip({ placement, arrow, trigger, triggerDelay, show, distance, targetRef, children, className, style }) {
    const [showInternal, setShowInternal] = useState(false);
    const delayTimeout = useRef(null);
    const [targetElement, setTargetElement] = useState(targetRef.current);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

    // no distance supplied
    let offsetDistance;
    if (distance === undefined) {
        offsetDistance = 5;
    } else {
        // for user supplied values, measure distance from the edge or tip of arrow
        const arrowDistance = arrow ? 5 : 0;
        offsetDistance = arrowDistance + distance;
    }

    const popperOptions = {
        modifiers: [
            // padding prevents arrow spilling into borderRadius
            { name: 'arrow', options: { element: arrowElement, padding: 8 } },
            // {name: 'offset', [skid, distance]}
            // skid is position along the reference edge (i.e. if placement top, then 5 will move 5px right)
            // distance is distance from the reference edge (i.e. if placement top, then 5 will move 5px up (further away))
            { name: 'offset', options: { offset: [0, offsetDistance] } },
        ],
        placement: placement,
    };

    // This is what give us the positioning transforms
    const { styles, attributes } = usePopper(targetElement, popperElement, popperOptions);

    // need to rerender after mount to get the target node
    // also force render if target changes
    useEffect(() => {
        console.log('EFFECT1');
        setTargetElement(targetRef.current);
    }, [targetElement]);

    // Add Trigger Effect Event listeners
    useEffect(() => {
        console.log('EFFECT2');
        // any value for show indicates means this is a controlled components
        if (!targetElement || show !== undefined) return;

        let inListener = () => {
            if (triggerDelay) {
                delayTimeout.current = setTimeout(() => {
                    setShowInternal(true);
                }, triggerDelay);
            } else {
                setShowInternal(true);
            }
        };

        let outListener = () => {
            delayTimeout.current && clearTimeout(delayTimeout.current);
            setShowInternal(false);
        };

        if (TRIGGERS[trigger]) {
            targetElement.addEventListener(TRIGGERS[trigger]['in'], inListener);
            targetElement.addEventListener(TRIGGERS[trigger]['out'], outListener);
        }

        return () => {
            targetElement.removeEventListener(TRIGGERS[trigger]['in'], inListener);
            targetElement.addEventListener(TRIGGERS[trigger]['out'], outListener);

            delayTimeout.current && clearTimeout(delayTimeout.current);
        };
    }, [targetElement]);

    // if show is passed, then visibility is controlled by the user
    let _show = show === undefined ? showInternal : show;

    let tooltip;
    if (_show) {
        const tooltipStyles = { ...styles.popper, ...style };

        tooltip = (
            <div ref={setPopperElement} style={tooltipStyles} {...attributes.popper} className={`tooltip ${className}`}>
                {children}
                {arrow && <div ref={setArrowElement} style={styles.arrow} className="tooltip__arrow" />}
            </div>
        );
    }

    return <>{tooltip}</>;
}

const TRIGGERS = {
    hover: { in: 'mouseenter', out: 'mouseleave' },
    focus: { in: 'focus', out: 'blur' },
};

export default Tooltip;
