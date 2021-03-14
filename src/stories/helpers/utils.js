export const themeColors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

/** remove any key where value = 'default' */
export function cleanArgs(args, removeValue = 'default') {
    const output = { ...args };

    for (const k in output) {
        if (output[k] === removeValue) output[k] = undefined;
    }

    return output;
}

/** Disable a single Argument from the Argument Table */
export function SetArgTableDisable(argsConfig, value) {
    const output = { ...argsConfig };
    output.table = { ...output.table, disable: value };

    return output;
}

/**
 * Disable/enable groups of arguments from the ArgTable
 * @param {*} argTypes
 * @param {{enable:[string], disable:[string], enableAll: boolean, disableAll:boolean}} options
 */
export function UpdateArgTable(argTypes, options) {
    const output = { ...argTypes };
    const { enable, enableAll, disable, disableAll } = options;

    for (const k in output) {
        if ((enable && enable.includes(k)) || enableAll) {
            output[k] = SetArgTableDisable(output[k], false);
        }

        if ((disable && disable.includes(k)) || disableAll) {
            output[k] = SetArgTableDisable(output[k], true);
        }
    }

    return output;
}
