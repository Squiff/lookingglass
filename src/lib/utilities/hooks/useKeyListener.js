import { useEffect } from 'react';

/** Listen for key down events */
function useKeyDownListener(active, callback) {
    useEffect(() => {
        if (!active || !callback) return;

        document.addEventListener('keydown', callback);

        return () => {
            document.removeEventListener('keydown', callback);
        };
    }, [active, callback]);
}

export default useKeyDownListener;
