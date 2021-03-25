import Spinner from '../lib/components/Spinner';
import Lookingglass from '../lib/components/Lookingglass';
import { cleanArgs } from './helpers/utils';

const tableDisable = { table: { disable: true } };
const tableEnable = { table: { disable: false } };

export const argTypes = {
    size: { control: { type: 'radio', options: ['default', 's', 'l'] } },
    color: { control: 'color', table: { category: 'Style' } },
};

/* --------  All Props ---------------- */
export const AllProps = (args) => {
    const cArgs = cleanArgs(args);
    const { color, ...spinnerArgs } = cArgs;

    // ensures style only shows in source if color has been defined
    if (color) {
        spinnerArgs.style = { color };
    }

    return <Spinner {...spinnerArgs} />;
};

AllProps.args = {
    size: 'default',
    halo: false,
};

AllProps.parameters = {
    options: { showPanel: true },
};

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
export const Styled = (args) => <Spinner halo={true} {...args} />;
Styled.args = {
    style: { color: 'purple', width: '100px', height: '100px' },
    size: 'l',
};

/* --------  Colors ---------------- */
export const Colors = (args) => (
    <>
        <Lookingglass color="primary">
            <Spinner halo={true} />
        </Lookingglass>
        <Lookingglass color="success">
            <Spinner halo={true} />
        </Lookingglass>
        <Lookingglass color="error">
            <Spinner halo={true} />
        </Lookingglass>
        <Lookingglass color="warning">
            <Spinner halo={true} />
        </Lookingglass>
    </>
);
