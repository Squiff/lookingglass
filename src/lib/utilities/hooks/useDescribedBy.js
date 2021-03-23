import { nanoid } from 'nanoid';
import { useEffect, useRef } from 'react';

/** Maintain an aria-describedby attribute on a targetElement while active is true */
function useDescribedBy(targetElement, active, id) {
    const tooltipIdRef = useRef(id);

    if (!tooltipIdRef.current) {
        tooltipIdRef.current = `tooltip-${nanoid(8)}`;
    }

    useEffect(() => {
        if (targetElement && active) {
            // only set/remove attribute if user has not already added attribute to element
            const hasValue = targetElement.getAttribute('aria-describedby') ? true : false;

            if (hasValue === false) {
                targetElement.setAttribute('aria-describedby', tooltipIdRef.current);
            }

            return () => {
                if (hasValue === false) {
                    targetElement.removeAttribute('aria-describedby');
                }
            };
        }
    }, [targetElement, active]);

    return tooltipIdRef.current;
}

export default useDescribedBy;
