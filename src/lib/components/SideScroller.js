import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';
import classNames from 'classnames';

/** Component to facilitate horizontal scrolling without scrollbars */
function SideScroller({ buttonVisibility, scrollFactor, children }) {
    const scrollerRef = useRef();

    function handleScrollEnd() {
        const scrollerWidth = scrollerRef.current.clientWidth;
        scrollerRef.current.scrollLeft += scrollerWidth * scrollFactor;
    }

    function handleScrollStart() {
        const scrollerWidth = scrollerRef.current.clientWidth;
        scrollerRef.current.scrollLeft -= scrollerWidth * scrollFactor;
    }

    return (
        <>
            <div className="sidescroller">
                <SideScrollerButton
                    direction="prev"
                    onClick={handleScrollStart}
                    visibility={buttonVisibility}
                />
                <div className="sidescroller__content" ref={scrollerRef}>
                    {children}
                </div>
                <SideScrollerButton
                    direction="next"
                    onClick={handleScrollEnd}
                    visibility={buttonVisibility}
                />
            </div>
        </>
    );
}

// Internal Only
function SideScrollerButton({ direction, visibility, ...props }) {
    const icon =
        direction === 'prev' ? (
            <ChevronLeft className="sidescroller__icon" />
        ) : (
            <ChevronRight className="sidescroller__icon" />
        );

    const classes = classNames({
        sidescroller__btn: true,
        [`sidescroller__btn--${visibility}`]: visibility !== 'visible',
    });

    return (
        <button className={classes} {...props}>
            {icon}
        </button>
    );
}

SideScroller.defaultProps = {
    scrollFactor: 0.8,
    buttonVisibility: 'visible',
};

SideScroller.propTypes = {
    /** Scroll Button visibility */
    buttonVisibility: PropTypes.oneOf(['visible', 'auto', 'hidden']),
    /** The amount to scroll when using the scroll buttons. Percentage of Scroller width. */
    scrollFactor: PropTypes.number,
};

export default SideScroller;
