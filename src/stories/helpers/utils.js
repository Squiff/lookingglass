/** remove any key where value = 'default' */
export function cleanArgs(args, removeValue = 'default') {
    const output = { ...args };

    for (const k in output) {
        if (output[k] === removeValue) output[k] = undefined;
    }

    return output;
}

export const themeColors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];
