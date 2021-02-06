import { useEffect } from 'react';

// effect to remove and restore scrollbar to window
function useRemoveWindowScroll(removeScroll) {
    useEffect(() => {
        if (removeScroll) {
            const body = document.body;
            const currentPadding = getComputedStyle(body).paddingRight;
            const newPadding = parseFloat(currentPadding) + scrollbarWidth();
            // track any inline styles that we are overiding
            const padInline = body.style.paddingRight;
            const overflowInline = body.style.overflow;

            body.style.paddingRight = `${newPadding}px`;
            body.style.overflow = 'hidden';

            // return a cleanup function to restore body to previous state
            return () => {
                body.style.paddingRight = padInline;
                body.style.overflow = overflowInline;
            };
        }
    }, [removeScroll]);
}

// get window scrollbar width
function scrollbarWidth() {
    return window.innerWidth - document.body.clientWidth;
}

export default useRemoveWindowScroll;
