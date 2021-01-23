
// singleton class that allows components to read a global config setup by the user
const config = {
    breakpoints: ['s','m', 'l'],
    defaultBreakpoint: 's',
    separator: ':'
}

export default class Config {
    static get(){
        return config
    }

    // shallow merge {property: value} into config
    static set(property, value){
        config[property] = value
    }
}

