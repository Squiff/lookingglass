import { useEffect, useLayoutEffect, useState } from 'react';
import { debounce } from '../debounce';

export function useScrollable(ref) {
    const [isScrollable, setIsScrollable] = useState();

    function updateIsScrollable() {
        const canScroll = ref.current?.offsetWidth < ref.current?.scrollWidth;
        setIsScrollable(canScroll);
    }

    // Handle window resize
    useEffect(
        () => {
            const [eventHandler, clearTimeout] = debounce(updateIsScrollable, 250);

            window.addEventListener('resize', eventHandler);

            return () => {
                window.removeEventListener('resize', eventHandler);
                clearTimeout();
            };
        },
        [ref] // used in updateIsScrollable. Should be stable.
    );

    // Set initial value
    useLayoutEffect(() => {
        updateIsScrollable();
    }, []);

    return isScrollable;
}
