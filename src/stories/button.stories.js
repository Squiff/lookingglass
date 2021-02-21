import Button from '../lib/components/Button';
import { cleanArgs, themeColors } from './helpers/utils';

const tableDisable = { table: { disable: true } };
const tableEnable = { table: { disable: false } };

export const argTypes = {
    color: {
        control: {
            type: 'select',
            options: themeColors,
        },
        ...tableDisable,
    },
    btnStyle: {
        control: {
            type: 'radio',
            options: ['default', 'none', 'outline'],
        },
        ...tableDisable,
    },
    size: {
        control: { type: 'radio', options: ['default', 's', 'l'] },
        ...tableDisable,
    },
    block: { ...tableDisable },
};

const Template = (args) => <Button {...args}>Click</Button>;

/* -------- ALL PROPS ---------------- */
export const AllProps = (args) => {
    const cArgs = cleanArgs(args);
    return <Button {...cArgs}>Click</Button>;
};

AllProps.args = {
    color: 'primary',
    btnStyle: 'default',
    block: false,
    size: 'default',
};

AllProps.argTypes = {
    color: { ...tableEnable },
    btnStyle: { ...tableEnable },
    block: { ...tableEnable },
    size: { ...tableEnable },
};

/* -------- SOLID ---------------- */
export const SolidColors = (args) => (
    <>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button color="info">Info</Button>
    </>
);

/* -------- OUTLINE---------------- */
export const OutlineColors = (args) => (
    <>
        <Button color="primary" btnStyle="outline">
            Primary
        </Button>
        <Button color="secondary" btnStyle="outline">
            Secondary
        </Button>
        <Button color="success" btnStyle="outline">
            Success
        </Button>
        <Button color="warning" btnStyle="outline">
            Warning
        </Button>
        <Button color="error" btnStyle="outline">
            Error
        </Button>
        <Button color="info" btnStyle="outline">
            Info
        </Button>
    </>
);

/* -------- No Style ---------------- */
export const NoStyle = (args) => <Button btnStyle="none">No Style</Button>;

/* -------- Sizes ---------------- */
export const Sizes = (args) => (
    <>
        <Button color="primary" size="s">
            Small
        </Button>
        <Button color="primary">Default</Button>
        <Button color="primary" size="l">
            Large
        </Button>
    </>
);

/* -------- Block ---------------- */
export const Block = (args) => (
    <Button block={true} color="secondary">
        Block Button
    </Button>
);
