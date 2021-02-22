import Spinner from '../lib/components/Spinner';
import {cleanArgs} from './helpers/utils'

const tableDisable = { table: { disable: true } };
const tableEnable = { table: { disable: false } };

export const argTypes = {
    size: {control: {type: 'radio', options: ['default','s','l']},
            ...tableDisable
        },
    color: {control: 'color',
            table: {category: 'Helpers',
                    disable: true            
                },
        },
    halo: {...tableDisable},
    
}

/* --------  All Props ---------------- */
export const All = (args) => {
    const cArgs =  cleanArgs(args);
    const {color, ...spinnerArgs} = cArgs

    // ensures style only shows in source if color has been defined
    if (color) {
        spinnerArgs.style = {color}
    }
 
    return (<Spinner {...spinnerArgs}/>)
}

All.args = {
    size: 'default',
    halo: false,
};

All.argTypes = {
    size: {...tableEnable},
    halo: {...tableEnable},
    color: {...tableEnable}
}

/* --------  Sizes ---------------- */
export const Sizes = (args) => (
    <>
        <Spinner size="s" />
        <Spinner />
        <Spinner size="l" />
    </>
);

/* --------  Halo ---------------- */
export const Halo = (args) => <Spinner halo={true} />;

/* --------  Custom Styles ---------------- */
export const Styled = (args) => <Spinner halo={true} {...args}/>;
Styled.args = {
    style: { color: 'purple', width: '100px', height: '100px' },
    size: 'l',
};
