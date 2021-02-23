// a generic function to resolve props to class names
// provide a list of properties {prop: value}
// provide a class name mapping {prop: classPrefix}
// provide a value mapping {prop: {value: mappedValue}}
// return a list of class Names in format [classPrefix][separator][value]
export function classNameResolver(props, classMapping, valueMapping, separator = '--') {
    const output = [];

    for (const key in props) {
        const value = props[key];
        if (value !== undefined && typeof value !== 'object') {
            const prefix = classMapping[key];
            // found a class mapping for the prop
            if (prefix) {
                let classNameSuffix = value;

                if (valueMapping && valueMapping[key] && valueMapping[key][value]) {
                    classNameSuffix = valueMapping[key][value];
                }

                output.push(`${prefix}${separator}${classNameSuffix}`);
            }
            
        }
    }

    return output;
}