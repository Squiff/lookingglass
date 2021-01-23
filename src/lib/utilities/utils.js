import Config from "../config/config";

const config = Config.get();



function isBreakpoint(breakpointName){
    return config.breakpoints.includes(breakpointName);
}

// check that the breakpointName is valid
function prefixClass(breakpointName, className){
    const { separator, defaultBreakpoint } = config;
    
    if (breakpointName !== defaultBreakpoint) 
        return `${breakpointName}${separator}${className}`
    
    return className

}

function prefixClasses(breakpointName, classes){
    return classes.map(c => prefixClass(breakpointName, c))
}



export { isBreakpoint, prefixClasses, prefixClass }