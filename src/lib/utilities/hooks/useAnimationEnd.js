import { useCallback, useRef } from 'react';

/**
 * Hook used with React Transition Group.
 * Returns addEndListener and handleAnimationEnd callbacks
 *
 * addEndListener: pass to Transition component
 *
 * handleAnimationEnd: is passed to the animating elements onAnimationEnd
 */
function useAnimationEnd(animatingRef) {
    const endListener = useRef();

    const handleAnimationEnd = useCallback((e) => {
        // check animation is not from children
        if (e.target === animatingRef.current && endListener.current) {
            endListener.current();
        }
    });

    const addEndListener = useCallback((done) => {
        endListener.current = done;
    });

    return { handleAnimationEnd, addEndListener };
}

export default useAnimationEnd;
