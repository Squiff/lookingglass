import Spinner from '../lib/components/Spinner';
import CSS from '../lib/components/CSS';
import Button from '../lib/components/Button';
import { cleanArgs } from './helpers/utils';
import { useEffect, useState } from 'react';

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
        <CSS color="primary">
            <Spinner halo={true} />
        </CSS>
        <CSS color="success">
            <Spinner halo={true} />
        </CSS>
        <CSS color="error">
            <Spinner halo={true} />
        </CSS>
        <CSS color="warning">
            <Spinner halo={true} />
        </CSS>
    </>
);

/* --------  Delay ---------------- */
export const Delay = (args) => {
    const [mount, setMount] = useState();

    const handleClick = () => {
        setMount(false);
    };

    useEffect(() => {
        if (mount) return;
        setMount(true);
    }, [mount]);

    return (
        <>
            <CSS div marginBottom="2">
                <Button onClick={handleClick} color="info">
                    Reload
                </Button>
            </CSS>
            {mount && <Spinner delay={500} />}
        </>
    );
};

Delay.parameters = {
    // show hooks in source view
    docs: {
        source: {
            code: '<Spinner delay={500} />',
        },
    },
};
