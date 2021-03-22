import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Popup from './Popup';

/** Pop ups that float near a target element */
function Tooltip({ placement, arrow, trigger, triggerDelay, show, distance, targetRef, children, className, style }) {
    const [showInternal, setShowInternal] = useState(false);
    const delayTimeout = useRef(null);

    // no distance supplied
    let offsetDistance;
    if (distance === undefined) {
        offsetDistance = 5;
    } else {
        // for user supplied values, measure distance from the edge or tip of arrow
        const arrowDistance = arrow ? 5 : 0;
        offsetDistance = arrowDistance + distance;
    }

    // need to rerender after mount to get the target node
    const [targetElement, setTargetElement] = useState(targetRef.current);

    useEffect(() => {
        setTargetElement(targetRef.current);
    }, []);

    // Add Trigger Effect Event listeners
    useEffect(() => {
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

    const tooltipClasses = classNames('tooltip', className);

    return (
        <Popup
            targetRef={targetRef}
            show={_show}
            placement={placement}
            distance={offsetDistance}
            popupClassName={tooltipClasses}
            popupStyles={style}
            arrow={arrow}
            arrowClassName="tooltip__arrow"
        >
            {children}
        </Popup>
    );
}

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

const TRIGGERS = {
    hover: { in: 'mouseenter', out: 'mouseleave' },
    focus: { in: 'focus', out: 'blur' },
};

export default Tooltip;
