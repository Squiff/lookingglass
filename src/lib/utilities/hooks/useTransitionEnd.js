import { useEffect, useRef } from 'react';

// Hook to maintain a transitionEnd callback on ref
// useful for CSSTransition addEndListener prop
function useTransitionEnd(ref) {
    const listener = useRef();

    return (callback) => {
        const newListener = (e) => {
            // check transitionend is not from children
            if (e.target === ref.current) {
                callback();
            }
        };

        // remove stale listener
        if (listener.current) {
            ref.current.removeEventListener('transitionend', listener.current);
        }

        listener.current = newListener;
        ref.current.addEventListener('transitionend', newListener);
    };
}

export default useTransitionEnd;
