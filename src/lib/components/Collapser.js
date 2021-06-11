import classNames from 'classnames';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/** A component to transition to and from a collapsed state */
function Collapser({ show, className, children }) {
    const collapserRef = useRef();
    const collapserContentRef = useRef();
    const initialMountRef = useRef(true);

    useEffect(() => {
        if (initialMountRef.current) return;

        if (!show) {
            collapserRef.current.style.height = `${collapserContentRef.current?.clientHeight}px`;
            const _ = collapserRef.current.clientHeight; // force reflow
            collapserRef.current.style.height = 0;
        } else {
            collapserRef.current.style.height = `${collapserContentRef.current?.clientHeight}px`;
        }
    }, [show]);

    // initial mount in collapsed state
    useLayoutEffect(() => {
        if (initialMountRef.current && !show) collapserRef.current.style.height = 0;
    }, [show]);

    // set initial mount flag. !! Keep as last effect !!
    useEffect(() => {
        initialMountRef.current = false;
    }, []);

    // remove height after opening transition
    const handleTransitionEnd = (e) => {
        if (!show) return;
        if (e.target === e.currentTarget) collapserRef.current.style.height = null;
    };

    const classes = classNames('collapser', className);

    return (
        <div className={classes} onTransitionEnd={handleTransitionEnd} ref={collapserRef}>
            <div className="collapser__content" ref={collapserContentRef} aria-hidden={!show}>
                <div>{children}</div>
            </div>
        </div>
    );
}

Collapser.propTypes = {
    /** Set value to show or hide content */
    show: PropTypes.bool,
};

export default Collapser;
