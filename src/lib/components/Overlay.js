import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import FocusTrap from 'focus-trap-react/dist/focus-trap-react';
import useTransitionEnd from '../utilities/hooks/useTransitionEnd';
import useRemoveWindowScroll from '../utilities/hooks/useRemoveWindowScroll';

// returnFocusOnDeactivate: returns focus to last active element before overlay was opened
// escapeDeactivates: prevent focus trap handling escape. Will be handled by Overlay
const FocusOptions = {
    escapeDeactivates: false,
    returnFocusOnDeactivate: true,
};

const transitionClasses = {
    exit: 'overlay--closing',
    exitDone: 'overlay--closed',
    enter: 'overlay--opening',
    enterActive: 'overlay--open',
};

// Overlay Component to handle:
// hiding scrollbar
// trapping/retaining focus
// escape key to close
// clicking on overlay to close
function Overlay({ children, show, onClose, closeOnClick, center }) {
    const overlayRef = useRef();
    const transitionEnd = useTransitionEnd(overlayRef);
    const [focusTrapActive, setFocusTrapActive] = useState(show);
    const classes = ['overlay'];

    // disable the scroll and hide scrollbar
    useRemoveWindowScroll(show);

    // close on escape key
    useEffect(() => {
        if (show) {
            const listener = (e) => {
                if (e.code === 'Escape' && onClose) {
                    onClose();
                }
            };

            document.addEventListener('keydown', listener);

            return () => {
                document.removeEventListener('keydown', listener);
            };
        }
    }, [show]);

    // cannot immediately use 'show' prop for the focus trap 'active'
    // prop as it requires at least one focusable element.
    // When switching from show false -> true the overlay will be display: none and therefore not focusable.
    // This effect delays turning on focus trap until element is visible/focusable
    useEffect(() => {
        setFocusTrapActive(show);
    }, [show]);

    // handle click on overlay (only if directly clicked)
    function handleClick(e) {
        if (show && e.target === overlayRef.current && onClose && closeOnClick) {
            onClose();
        }
    }

    if (center) {
        classes.push('overlay--center');
    }

    const classStr = classes.join(' ');

    return (
        <CSSTransition
            in={show}
            classNames={transitionClasses}
            mountOnEnter={true}
            nodeRef={overlayRef}
            addEndListener={transitionEnd}
        >
            <FocusTrap active={focusTrapActive} focusTrapOptions={FocusOptions}>
                <div className={classStr} onClick={handleClick} ref={overlayRef} role="dialog" aria-modal="true">
                    <div
                        className="overlay__content"
                        tabIndex="0" //ensures focus trap always has something to focus
                    >
                        {children}
                    </div>
                </div>
            </FocusTrap>
        </CSSTransition>
    );
}

export default Overlay;
