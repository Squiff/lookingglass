import classNames from 'classnames';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';

/** Component for cycling through images or content */
function Carousel({ buttonVisibility, autoCycle, children }) {
    const [direction, setDirection] = useState();
    const [running, setRunning] = useState(false);
    const [active, setActive] = useState(1);
    const sliderRef = useRef();

    const slideCount = React.Children.count(children); // all children should be slides

    function handleNext() {
        if (running) return;
        if (slideCount === 1) return;

        setDirection('next');
        setRunning(true);
        setActive((active) => (active % slideCount) + 1);
    }

    function handlePrev() {
        if (running) return;
        if (slideCount === 1) return;

        setDirection('prev');
        setRunning(true);
        setActive((active) => (active - 1 === 0 ? slideCount : active - 1));
    }

    // animation complete listener
    function handleAnimationEnd(e) {
        if (e.target !== sliderRef.current) return;

        setRunning(false);
    }

    // Auto Cycle Effect
    useEffect(() => {
        if (!autoCycle) return;
        if (running) return; // only enable after animation is complete

        const timer = setTimeout(handleNext, autoCycle);

        return () => {
            clearTimeout(timer);
        };
    }, [autoCycle, running]);

    // create each slide
    const slides = React.Children.map(children, (c, i) => (
        <CarouselSlide id={i + 1} key={i + 1} active={active} running={running}>
            {c}
        </CarouselSlide>
    ));

    const sliderClasses = classNames({
        carousel__slider: true,
        [`carousel__slider--${direction}`]: running,
    });

    return (
        <>
            <div className="carousel">
                <CarouselButton
                    onClick={handlePrev}
                    direction="prev"
                    visibility={buttonVisibility}
                />
                <CarouselButton
                    onClick={handleNext}
                    direction="next"
                    visibility={buttonVisibility}
                />
                <div className={sliderClasses} ref={sliderRef} onAnimationEnd={handleAnimationEnd}>
                    {slides}
                </div>
            </div>
        </>
    );
}

Carousel.Slide = ({ children }) => {
    return <>{children}</>;
};

Carousel.Slide.displayName = 'Carousel.Child';

/*======== Internal Components ========= */
function CarouselSlide({ id, active, running, children }) {
    const [transitionState, setTransitionState] = useState(id === active ? 'ACTIVE' : null);

    // Layout Effect - need classes to be applied syncronously
    useLayoutEffect(() => {
        if (id === active) {
            return setTransitionState('ACTIVE');
        }
        // was active, but no longer active
        if (transitionState === 'ACTIVE' && id !== active) {
            return setTransitionState('EXITING');
        }
        // Transition complete on the parent
        if (transitionState === 'EXITING' && !running) {
            return setTransitionState(null);
        }
    }, [active, running]);

    const classes = classNames({
        carousel__slide: true,
        'carousel__slide--active': transitionState === 'ACTIVE',
        'carousel__slide--exiting': transitionState === 'EXITING',
    });

    return <div className={classes}>{children}</div>;
}

function CarouselButton({ direction, visibility, ...props }) {
    if (visibility === 'hidden') return null;

    const icon =
        direction === 'prev' ? (
            <ChevronLeft className="carousel__icon" />
        ) : (
            <ChevronRight className="carousel__icon" />
        );

    const classes = classNames({
        carousel__btn: true,
        [`carousel__btn--${direction}`]: direction,
        'carousel__btn--hover': visibility === 'hover',
    });

    return (
        <button className={classes} {...props}>
            {icon}
        </button>
    );
}

Carousel.propTypes = {
    /** Visibility of the Previous and Next Buttons */
    buttonVisibility: PropTypes.oneOf(['visible', 'hidden', 'hover']),
    /** Timer period to move onto the next slide */
    autoCycle: PropTypes.number,
};

export default Carousel;
