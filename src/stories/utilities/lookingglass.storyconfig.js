// the 'lookingglass' utility is used by all utility stories
// put common config here to share across stories

import { UpdateArgTable } from '../helpers/utils';

const allColors = [
    'primary',
    'secondary',
    'success',
    'error',
    'warning',
    'info',
    'black',
    'white',
    'light',
    'dark',
    'primary-l1',
    'primary-l2',
    'primary-l3',
    'primary-l4',
    'primary-d1',
    'primary-d2',
    'primary-d3',
    'primary-d4',
];

const borders = ['0', '1', '2', '3', '4'];

const borderColors = [
    'primary',
    'secondary',
    'success',
    'error',
    'warning',
    'info',
    'black',
    'white',
    'light',
    'dark',
    'currentColor',
];

const borderRadius = ['0', '1', '2', '3', 'rounded'];

const spacing = ['0', '1', '2', '3', '4', '5'];

const widths = ['25', '50', '75', '100', '25vw', '50vw', '75vw', '100vw'];
const heights = ['25', '50', '75', '100', '25vh', '50vh', '75vh', '100vh'];

const shadows = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
];

const fontSizes = ['0.75', '0.875', '1', '1.125', '1.25', '1.5', '2', '2.5', '3'];

const fontWeights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
const textDecorations = ['none', 'underline', 'line-through'];
const textTransforms = ['uppercase', 'lowercase', 'capitalize'];
const textAligns = ['left', 'right', 'center'];

const display = ['none', 'block', 'inline-block'];

const positions = ['default', 'fixed', 'relative', 'absolute', 'sticky'];
const positionDistance = ['default', '0', '100'];
const absoluteTransforms = [
    'default',
    'top-left',
    'top-middle',
    'top-right',
    'middle-left',
    'middle',
    'middle-right',
    'bottom-left',
    'bottom-middle',
    'bottom-right',
];

const overflow = ['scroll', 'hidden', 'auto', 'visible'];

const listStyleType = [
    'none',
    'circle',
    'disc',
    'square',
    'decimal',
    'lower-latin',
    'upper-latin',
    'lower-roman',
    'upper-roman',
];

// base arg types
const baseArgTypes = {
    backgroundColor: {
        control: {
            type: 'select',
            options: allColors,
        },
    },
    color: {
        control: {
            type: 'select',
            options: allColors,
        },
    },
    border: {
        control: {
            type: 'select',
            options: borders,
        },
    },
    borderTop: {
        control: {
            type: 'select',
            options: borders,
        },
    },
    borderRight: {
        control: {
            type: 'select',
            options: borders,
        },
    },
    borderBottom: {
        control: {
            type: 'select',
            options: borders,
        },
    },
    borderLeft: {
        control: {
            type: 'select',
            options: borders,
        },
    },
    borderColor: {
        control: {
            type: 'select',
            options: borderColors,
        },
    },
    borderRadius: {
        control: {
            type: 'select',
            options: borderRadius,
        },
    },
    margin: {
        control: {
            type: 'select',
            options: spacing,
        },
    },
    marginTop: {
        control: {
            type: 'select',
            options: spacing,
        },
    },
    marginRight: {
        control: {
            type: 'select',
            options: spacing,
        },
    },
    marginBottom: {
        control: {
            type: 'select',
            options: spacing,
        },
    },
    marginLeft: {
        control: {
            type: 'select',
            options: spacing,
        },
    },
    marginX: {
        control: {
            type: 'select',
            options: spacing,
        },
    },
    marginY: {
        control: {
            type: 'select',
            options: spacing,
        },
    },
    padding: {
        control: {
            type: 'select',
            options: spacing,
        },
    },
    paddingTop: {
        control: {
            type: 'select',
            options: spacing,
        },
    },
    paddingRight: {
        control: {
            type: 'select',
            options: spacing,
        },
    },
    paddingBottom: {
        control: {
            type: 'select',
            options: spacing,
        },
    },
    paddingLeft: {
        control: {
            type: 'select',
            options: spacing,
        },
    },
    paddingX: {
        control: {
            type: 'select',
            options: spacing,
        },
    },
    paddingY: {
        control: {
            type: 'select',
            options: spacing,
        },
    },
    width: {
        control: {
            type: 'select',
            options: widths,
        },
    },
    height: {
        control: {
            type: 'select',
            options: heights,
        },
    },
    shadow: {
        control: {
            type: 'select',
            options: shadows,
        },
    },
    fontSize: {
        control: {
            type: 'select',
            options: fontSizes,
        },
    },
    fontWeight: {
        control: {
            type: 'select',
            options: fontWeights,
        },
    },
    textDecoration: {
        control: {
            type: 'select',
            options: textDecorations,
        },
    },
    textTransform: {
        control: {
            type: 'select',
            options: textTransforms,
        },
    },
    textAlign: {
        control: {
            type: 'select',
            options: textAligns,
        },
    },
    display: {
        control: {
            type: 'select',
            options: display,
        },
    },
    position: {
        control: {
            type: 'select',
            options: positions,
        },
    },
    left: {
        control: {
            type: 'select',
            options: positionDistance,
        },
    },
    right: {
        control: {
            type: 'select',
            options: positionDistance,
        },
    },
    top: {
        control: {
            type: 'select',
            options: positionDistance,
        },
    },
    bottom: {
        control: {
            type: 'select',
            options: positionDistance,
        },
    },
    absolute: {
        control: {
            type: 'select',
            options: absoluteTransforms,
        },
    },
    overflow: {
        control: {
            type: 'select',
            options: overflow,
        },
    },
    overflowX: {
        control: {
            type: 'select',
            options: overflow,
        },
    },
    overflowY: {
        control: {
            type: 'select',
            options: overflow,
        },
    },
    scrollbarColor: {
        control: {
            type: 'select',
            options: ['primary', 'dark', 'light'],
        },
    },
    scrollbarSize: {
        control: {
            type: 'radio',
            options: ['default', 's', 'l'],
        },
    },
    scrollbarStyle: {
        control: {
            type: 'radio',
            options: ['default', 'none', 'rounded'],
        },
    },
    scrollbarTrack: {
        control: {
            type: 'radio',
            options: ['default', 'none'],
        },
    },
    listStyleType: {
        control: {
            type: 'select',
            options: listStyleType,
        },
    },
    listPosition: {
        control: {
            type: 'radio',
            options: ['default', 'inside'],
        },
    },
};

export const argTypes = UpdateArgTable(baseArgTypes, { disableAll: true });
