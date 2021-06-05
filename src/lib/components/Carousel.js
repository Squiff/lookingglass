import classNames from 'classnames';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';

const CarouselContext = createContext();

/** Component for cycling through images or content */
function Carousel({ children }) {
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

    // for each slide, create a
    const slides = React.Children.map(children, (c, i) => (
        <CarouselSlide id={i + 1} key={i + 1}>
            {c}
        </CarouselSlide>
    ));

    const sliderClasses = classNames({
        carousel__slider: true,
        [`carousel__slider--${direction}`]: running,
    });

    const contextValue = { active, running };

    return (
        <>
            <CarouselContext.Provider value={contextValue}>
                <div className="carousel">
                    <CarouselButton onClick={handlePrev} direction="prev" />
                    <CarouselButton onClick={handleNext} direction="next" />
                    <div
                        className={sliderClasses}
                        ref={sliderRef}
                        onAnimationEnd={handleAnimationEnd}
                    >
                        {slides}
                    </div>
                </div>
            </CarouselContext.Provider>
        </>
    );
}

Carousel.Slide = ({ children }) => {
    return <>{children}</>;
};

Carousel.Slide.displayName = 'Carousel.Child';

/*======== Internal Components ========= */
function CarouselSlide({ id, children }) {
    const { active, running } = useContext(CarouselContext);
    const isActive = id === active;
    const prevActiveRef = useRef(); // the previously active ID

    useEffect(() => {
        prevActiveRef.current = active; // do we need to force a rerender here?
    }, [active]);

    const classes = classNames({
        carousel__slide: true,
        'carousel__slide--active': isActive,
        'carousel__slide--exiting': id === prevActiveRef.current && running,
    });

    return <div className={classes}>{children}</div>;
}

function CarouselButton({ direction, ...props }) {
    const icon =
        direction === 'prev' ? (
            <ChevronLeft className="carousel__icon" />
        ) : (
            <ChevronRight className="carousel__icon" />
        );

    const classes = classNames({
        carousel__btn: true,
        [`carousel__btn--${direction}`]: direction,
    });

    return (
        <button className={classes} {...props}>
            {icon}
        </button>
    );
}

export default Carousel;
