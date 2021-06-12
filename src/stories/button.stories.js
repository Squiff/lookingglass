import Button from '../lib/components/Button';
import CSS from '../lib/components/CSS';
import { cleanArgs, themeColors } from './helpers/utils';

const tableDisable = { table: { disable: true } };
const tableEnable = { table: { disable: false } };

export const argTypes = {
    color: {
        control: {
            type: 'select',
            options: themeColors,
        },
    },
    btnStyle: {
        control: {
            type: 'radio',
            options: ['default', 'none', 'outline'],
        },
    },
    size: {
        control: { type: 'radio', options: ['default', 's', 'l'] },
    },
    hoverEffect: {
        control: {
            type: 'radio',
            options: ['default', 'dark', 'light', 'opacity'],
        },
    },
    disabled: {
        description: 'Standard HTML Attribute',
        control: { type: 'boolean' },
    },
};

const Spacer = () => <CSS marginBottom="2" div />;

/* -------- ALL PROPS ---------------- */
export const AllProps = (args) => {
    const cArgs = cleanArgs(args);
    return <Button {...cArgs}>Click Me!</Button>;
};

AllProps.args = {
    color: 'info',
};

AllProps.parameters = { options: { showPanel: true } };

/* -------- SOLID ---------------- */
export const SolidColors = (args) => (
    <>
        <Button color="primary">Primary</Button> <Button color="success">Success</Button>{' '}
        <Button color="warning">Warning</Button> <Button color="error">Error</Button>{' '}
        <Button color="info">Info</Button>{' '}
    </>
);

/* -------- OUTLINE---------------- */
export const OutlineColors = (args) => (
    <>
        <Button color="primary" btnStyle="outline">
            Primary
        </Button>{' '}
        <Button color="success" btnStyle="outline">
            Success
        </Button>{' '}
        <Button color="warning" btnStyle="outline">
            Warning
        </Button>{' '}
        <Button color="error" btnStyle="outline">
            Error
        </Button>{' '}
        <Button color="info" btnStyle="outline">
            Info
        </Button>{' '}
    </>
);

/* -------- No Style ---------------- */
export const NoStyle = (args) => <Button btnStyle="none">No Style</Button>;

/* -------- Hover ---------------- */
export const Hover = (args) => (
    <>
        <CSS backgroundColor="dark" padding="1" color="white" marginBottom="1" div>
            <Button btnStyle="none" hoverEffect="dark">
                Dark
            </Button>
            <Button btnStyle="none" hoverEffect="light">
                Light
            </Button>
            <Button btnStyle="none" hoverEffect="opacity">
                Opacity
            </Button>
        </CSS>
        <CSS backgroundColor="light" padding="1" marginBottom="1" div>
            <Button btnStyle="none" hoverEffect="dark">
                Dark
            </Button>
            <Button btnStyle="none" hoverEffect="light">
                Light
            </Button>
            <Button btnStyle="none" hoverEffect="opacity">
                Opacity
            </Button>
        </CSS>
        <CSS backgroundColor="primary" padding="1" color="white" div>
            <Button btnStyle="none" hoverEffect="dark">
                Dark
            </Button>
            <Button btnStyle="none" hoverEffect="light">
                Light
            </Button>
            <Button btnStyle="none" hoverEffect="opacity">
                Opacity
            </Button>
        </CSS>
    </>
);

/* -------- Sizes ---------------- */
export const Sizes = (args) => (
    <>
        <Button color="info" size="s">
            Small
        </Button>{' '}
        <Button color="info">Default</Button>{' '}
        <Button color="info" size="l">
            Large
        </Button>
    </>
);

/* -------- Block ---------------- */
export const Block = (args) => (
    <Button block={true} color="info">
        Block Button
    </Button>
);

/* -------- Disabled ---------------- */
export const Disabled = (args) => (
    <>
        <Button color="success">Button Enabled</Button>
        <Spacer />
        <Button color="success" disabled>
            Button Disabled
        </Button>
        <Spacer />
        <Button color="error" btnStyle="outline">
            Button Enabled
        </Button>
        <Spacer />
        <Button color="error" btnStyle="outline" disabled>
            Button Disabled
        </Button>
        <Spacer />
        <Button block={true} color="info">
            Button Enabled
        </Button>
        <Spacer />
        <Button color="info" block disabled>
            Button Disabled
        </Button>
    </>
);

/* -------- LINKS ---------------- */
export const Links = (args) => (
    <>
        <Button color="info" href="#">
            Active Link
        </Button>{' '}
        <Button color="info" href="#" disabled>
            Disabled Link
        </Button>{' '}
    </>
);
