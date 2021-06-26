/* eslint-disable react/display-name */

import classNames from 'classnames';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import Info from './icons/Info';
import Warning from './icons/Warning';
import Error from './icons/Error';
import CheckCircle from './icons/CheckCircle';
import CloseButton from './CloseButton';
import useAnimationEnd from '../utilities/hooks/useAnimationEnd';
import PropTypes from 'prop-types';

// Notification group context
const GroupContext = createContext();

/** A notification popup */
function Notification({
    children,
    className,
    type,
    closeBtn,
    autoDismiss,
    onOpened,
    onClosed,
    ...props
}) {
    const notificationRef = useRef();
    const { handleAnimationEnd, addEndListener } = useAnimationEnd(notificationRef);
    const [isHovered, setIsHovered] = useState(false);
    const [show, setShow] = useState(true);

    const header = React.Children.toArray(children).filter((c) => c.type === Notification.Header);
    const otherChildren = React.Children.toArray(children).filter(
        (c) => c.type !== Notification.Header
    );

    /** Auto dismiss timeout */
    useEffect(() => {
        if (!autoDismiss) return;
        if (isHovered) return;
        if (!show) return;

        const timer = setTimeout(() => setShow(false), autoDismiss);

        return () => clearTimeout(timer);
    }, [autoDismiss, show, isHovered]);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    // inform <Transition> when animation complete
    function handleAddEndListener(done) {
        addEndListener(() => {
            if (show) {
                done();
            } else {
                collapse(done);
            }
        });
    }

    // run after closing animation
    // This ensures stacked notifications don't jump
    function collapse(done) {
        const style = notificationRef.current.style;
        const height = notificationRef.current.scrollHeight;
        const duration = 250;

        style.height = height + 'px';
        style.transition = `all ${duration}ms`;
        notificationRef.current.scrollHeight; // force reflow
        style.height = '0';
        style.margin = '0';
        style.padding = '0';

        setTimeout(done, duration);
    }

    return (
        <Transition
            in={show}
            nodeRef={notificationRef}
            addEndListener={handleAddEndListener}
            unmountOnExit={true}
            onExited={onClosed}
            onEntered={onOpened}
            appear={true}
        >
            {(state) => {
                return (
                    <NotificationWrapped
                        state={state}
                        onAnimationEnd={handleAnimationEnd}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        ref={notificationRef}
                        type={type}
                        closeBtn={closeBtn}
                        className={className}
                        {...props}
                    >
                        {closeBtn && (
                            <CloseButton
                                className="notification__closeBtn"
                                size="s"
                                onClick={() => setShow(false)}
                            />
                        )}
                        <div className="notification__top">
                            <NotificationIcon type={type} />
                            {header}
                        </div>
                        {otherChildren}
                    </NotificationWrapped>
                );
            }}
        </Transition>
    );
}

Notification.defaultProps = {
    closeBtn: true,
    placement: 'bottom',
    autoDismiss: 5000,
};

/** Wrapper for a group of notifications.
 *
 * Responsible for positioning and queuing notifications.
 * Notifications should ALWAYS be wrapped in a Notification.Group
 * */
Notification.Group = ({ placement, limit, children, ...props }) => {
    const [queueAnimation, setQueueAnimation] = useState(false);
    const childrenArr = React.Children.toArray(children);

    // flag for new notifications to use the queued animation
    useEffect(() => {
        if (!limit) return;

        if (childrenArr.length > limit && limit > 1) {
            setQueueAnimation(true);
        } else {
            setQueueAnimation(false);
        }
    }, [childrenArr.length]);

    // Limit Children
    let displayChildren = children;

    if (limit) {
        displayChildren = childrenArr.slice(0, limit);
    }

    const wrapperClasses = classNames({
        notification__group: true,
        [`notification__group--${placement}`]: placement,
    });

    if (childrenArr.length === 0) return null;

    return (
        <GroupContext.Provider value={{ queueAnimation, placement }}>
            <div className={wrapperClasses} {...props}>
                {displayChildren}
            </div>
        </GroupContext.Provider>
    );
};

/** Notification Body text */
Notification.Body = ({ children, className }) => {
    const classes = classNames('notification__header', className);
    return <div className={classes}>{children}</div>;
};

/** Notification Header */
Notification.Header = ({ children, className }) => {
    const classes = classNames('notification__header', className);
    return <h6 className={classes}>{children}</h6>;
};

/* ======== INTERNAL COMPONENTS ======= */

/** Internal only component. Manages notification classes */
const NotificationWrapped = React.forwardRef(
    ({ children, className, state, type, closeBtn, ...props }, ref) => {
        const { queueAnimation, placement } = useContext(GroupContext);
        const queueAnimationRef = useRef(queueAnimation);

        const classes = classNames(
            {
                notification: true,
                [`notification--${type}`]: type,
                'notification--closable': closeBtn,
                'notification--top': placement && placement.substring(0, 3) === 'top',
                'notification--bottom': placement && placement.substring(0, 6) === 'bottom',
                'notification--closing': state === 'exiting',
                'notification--open': state === 'entering' && !queueAnimationRef.current,
                'notification--qopen': state === 'entering' && queueAnimationRef.current,
            },
            className
        );

        return (
            <div ref={ref} className={classes} {...props}>
                {children}
            </div>
        );
    }
);

/** Internal only component. type -> icon mapping */
function NotificationIcon({ type }) {
    const iconClass = 'notification__icon';

    switch (type) {
        case 'info':
            return <Info className={iconClass} />;
        case 'warning':
            return <Warning className={iconClass} />;
        case 'error':
            return <Error className={iconClass} />;
        case 'success':
            return <CheckCircle className={iconClass} />;
        default:
            return null;
    }
}

/** ===== META ===== */
Notification.Header.displayName = 'Notification.Header';
Notification.Group.displayName = 'Notification.Group';
Notification.Body.displayName = 'Notification.Body';

Notification.Group.propTypes = {
    /** Notification placement */
    placement: PropTypes.oneOf([
        'top-start',
        'top',
        'top-end',
        'bottom-start',
        'bottom',
        'bottom-end',
    ]),
    /** Limit the number of displayed notifications */
    limit: PropTypes.number,
};

Notification.propTypes = {
    /** The type of notification */
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
    /** Include close button */
    closeBtn: PropTypes.bool,
    /** Duration before notification is dismissed. Set to 0 to disable. */
    autoDismiss: PropTypes.number,
    /** Callback fired when finished opening */
    onOpened: PropTypes.func,
    /** Callback fired when finished closing */
    onClosed: PropTypes.func,
};

NotificationWrapped.propTypes = {
    state: PropTypes.string,
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
    closeBtn: PropTypes.bool,
};

NotificationIcon.propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
};

export default Notification;
