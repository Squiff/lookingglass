import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Popup from './Popup';
import useDescribedBy from '../utilities/hooks/useDescribedBy';

/** Pop ups that float near a target element */
function Tooltip({
    placement,
    arrow,
    trigger,
    triggerDelay,
    show,
    distance,
    targetRef,
    children,
    className,
    style,
    id,
}) {
    const [showInternal, setShowInternal] = useState(false);
    const delayTimeout = useRef(null);

    // if show is passed, then visibility is controlled by the user
    const _show = show === undefined ? showInternal : show;

    // no distance supplied
    let offsetDistance;
    if (distance === undefined) {
        offsetDistance = 5;
    } else {
        // for user supplied values, measure distance from the edge or tip of arrow
        const arrowDistance = arrow ? 5 : 0;
        offsetDistance = arrowDistance + distance;
    }

    // force a rerender as we need targetRef after it has mounted
    const [targetElement, setTargetElement] = useState(targetRef.current);

    useEffect(() => {
        if (!targetElement) setTargetElement(targetRef.current);
    }, []);

    // get id for aria-describedby
    const tooltipId = useDescribedBy(targetElement, _show, id);

    // Add Trigger Effect Event listeners
    useEffect(() => {
        // any value for show indicates this is a controlled components
        if (!targetElement || show !== undefined) return;

        const inListener = () => {
            if (triggerDelay) {
                delayTimeout.current = setTimeout(() => {
                    setShowInternal(true);
                }, triggerDelay);
            } else {
                setShowInternal(true);
            }
        };

        const outListener = () => {
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
            id={tooltipId}
            role="tooltip"
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
    /** The tooltips id. Used to apply aria-described by to the target element  */
    id: PropTypes.string,
};

const TRIGGERS = {
    hover: { in: 'mouseenter', out: 'mouseleave' },
    focus: { in: 'focus', out: 'blur' },
};

export default Tooltip;
