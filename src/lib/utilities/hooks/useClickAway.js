import { useEffect, useRef } from 'react';

/** Run a callback when there is a click outside the target element */
export default function useClickAway(active, target, callback) {
    const activeRef = useRef(false);

    useEffect(() => {
        if (!active || !target || !callback) return;

        // enable the listener in the next loop
        // this gives a click (that sets active = true) the chance
        // to propogate without immediately calling the listener on the document
        setTimeout(() => {
            activeRef.current = true;
        }, 0);

        const listener = (e) => {
            if (target.contains(e.target) === false && activeRef.current) {
                callback();
            }
        };

        document.addEventListener('click', listener);

        return () => {
            activeRef.current = false;
            document.removeEventListener('click', listener);
        };
    }, [active, target, callback]);
}
