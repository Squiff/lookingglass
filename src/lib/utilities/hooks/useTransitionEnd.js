import { useRef } from 'react';

// Hook to maintain a transitionEnd callback on ref
// useful for CSSTransition addEndListener prop
function useTransitionEnd(ref) {
    const listener = useRef();

    return (callback) => {
        // new callback was passed, remove old eventlistener
        if (listener.current !== callback) {
            ref.current.removeEventListener('transitionend', listener.current);
        }

        listener.current = callback;
        ref.current.addEventListener('transitionend', callback);
    };
}

export default useTransitionEnd;
