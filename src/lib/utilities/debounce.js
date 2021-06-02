/** higher order function that fires a callback after a set period of inactivity */
export function debounce(callback, wait) {
    let timeout;

    const debounceCallback = () => {
        clearTimeout(timeout);
        timeout = setTimeout(callback, wait);
    };

    const clear = () => {
        clearTimeout(timeout);
    };

    return [debounceCallback, clear];
}
