import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import useClickAway from '../utilities/hooks/useClickAway';
import useKeyDownListener from '../utilities/hooks/useKeyListener';

/** Component for managing popups. Built on top of popperjs. */
function Popup({
    children,
    targetRef,
    show,
    onClose,
    clickAway, // call onClose when clicked away
    escape, // call onClose when escape key hit
    placement,
    distance,
    popupClassName, // class to be added to the popup
    popupStyles,
    arrow, // add an arrow
    arrowClassName,
    arrowOptions,
    ...props
}) {
    const [targetElement, setTargetElement] = useState(targetRef.current);
    const [popperElement, setPopperElement] = useState(null);

    // need to rerender after mount to get the target node
    useEffect(() => {
        setTargetElement(targetRef.current);
    }, []);

    // usePopper provides the styles and attributes to be applied
    const popperOptions = getPopperOptions({ arrowOptions, distance, placement });
    const { styles, attributes } = usePopper(targetElement, popperElement, popperOptions);

    // clickAway Listener
    const clickAwayActive = show && clickAway;
    useClickAway(clickAwayActive, popperElement, onClose);

    // escape key handler
    const keyDownListenerActive = show && escape;
    useKeyDownListener(keyDownListenerActive, handleKeyDown);

    function handleKeyDown(e) {
        if (e.code === 'Escape' && onClose) {
            onClose();
        }
    }

    if (!show) return null;

    const popupClasses = classNames('popup', popupClassName);

    return (
        <>
            <div
                ref={setPopperElement}
                style={{ ...popupStyles, ...styles.popper }}
                {...attributes.popper}
                className={popupClasses}
                {...props}
            >
                {children}
                {arrow && <div style={styles.arrow} className={arrowClassName} data-popper-arrow />}
            </div>
        </>
    );
}

Popup.defaultProps = {
    clickAway: true,
    escape: true,
};

function getPopperOptions(options) {
    // padding prevents arrow spilling into borderRadius
    const arrowoptions = { name: 'arrow', options: { padding: 10, ...options.arrowOptions } };
    // {name: 'offset', [skid, distance]}
    // skid is position along the reference edge (i.e. if placement top, then 5 will move 5px right)
    // distance is distance from the reference edge (i.e. if placement top, then 5 will move 5px up (further away))
    const offsetOptions = { name: 'offset', options: { offset: [0, options.distance] } };

    const popperOptions = {
        modifiers: [arrowoptions, offsetOptions],
        placement: options.placement,
    };

    return popperOptions;
}

export default Popup;
