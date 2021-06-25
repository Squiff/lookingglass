import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import useClickAway from '../utilities/hooks/useClickAway';
import useKeyDownListener from '../utilities/hooks/useKeyListener';
import PropTypes from 'prop-types';

/** Component for managing popups. Built on top of popperjs. */
function Popup({
    children,
    targetRef,
    show,
    onClose,
    clickAway,
    escape,
    placement,
    distance,
    popupClassName,
    popupStyles,
    arrow,
    arrowClassName,
    ...props
}) {
    const [targetElement, setTargetElement] = useState(targetRef.current);
    const [popperElement, setPopperElement] = useState(null);

    // need to rerender after mount to get the target node
    useEffect(() => {
        setTargetElement(targetRef.current);
    }, []);

    // usePopper provides the styles and attributes to be applied
    const popperOptions = getPopperOptions({ distance, placement });
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

Popup.propTypes = {
    /** ref of the target element */
    targetRef: PropTypes.shape({ current: PropTypes.any }),
    /** Control whether the popup is visible or not */
    show: PropTypes.bool,
    /** Callback fired when popper wants to close */
    onClose: PropTypes.func,
    /** Fire onClose callback when clicked away */
    clickAway: PropTypes.bool,
    /** Fire onClose callback on escape key */
    escape: PropTypes.bool,
    /** Popup placement in relation to the target element */
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
    /** Popup distance, in pixels, from target element */
    distance: PropTypes.number,
    /** Additional popup classes */
    popupClassName: PropTypes.string,
    /** Additional popup styles*/
    popupStyles: PropTypes.object,
    /** Include poup arrow */
    arrow: PropTypes.bool,
    /** Arrow Styles */
    arrowClassName: PropTypes.string,
};

Popup.defaultProps = {
    clickAway: true,
    escape: true,
};

function getPopperOptions(options) {
    // padding prevents arrow spilling into borderRadius
    const arrowoptions = { name: 'arrow', options: { padding: 10 } };
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
