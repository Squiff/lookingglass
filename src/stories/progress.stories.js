import { useState } from 'react';
import Progress from '../lib/components/Progress';
import Button from '../lib/components/Button';
import Lookingglass from '../lib/components/Lookingglass';

export const argTypes = {
    progress: { control: null },
    indeterminate: {},
};

const Spacer = () => <Lookingglass marginBottom="2" div />;

/* -------- All Props ---------- */
export const allProps = (args) => {
    const [progress, setProgress] = useState(25);

    const handleClick = () => {
        const newProgress = progress === 100 ? 0 : progress + 25;
        setProgress(newProgress);
    };

    // only display progress arg if not indeterminate
    const progressArg = args.indeterminate ? undefined : progress;

    return (
        <>
            <Button onClick={() => handleClick()} color="primary">
                Update Progress
            </Button>
            <Progress progress={progressArg} {...args} />
        </>
    );
};

allProps.args = { indeterminate: false };

/* -------- Progress ---------- */
export const setProgress = (args) => {
    const [progress, setProgress] = useState(25);

    const handleClick = () => {
        const newProgress = progress === 100 ? 0 : progress + 25;
        setProgress(newProgress);
    };

    return (
        <>
            <Button onClick={() => handleClick()} color="primary">
                Update Progress
            </Button>
            <Progress progress={progress} />
        </>
    );
};

setProgress.parameters = {
    docs: {
        source: {
            type: 'code',
        },
    },
};

/* -------- Indeterminate ---------- */
export const Indeterminate = (args) => <Progress indeterminate />;

/* -------- Customized ---------- */
export const Customized = (args) => (
    <>
        <h6>Colors</h6>
        <Lookingglass backgroundColor="error">
            <Progress progress={10} />
        </Lookingglass>
        <Spacer />
        <Lookingglass backgroundColor="success">
            <Progress progress={20} />
        </Lookingglass>
        <Spacer />
        <Progress progress={30} style={{ backgroundColor: 'purple' }} />
        <Spacer />
        <h6>Height</h6>
        <Progress progress={40} style={{ height: '2px' }} />
        <Spacer />
        <Progress progress={50} style={{ height: '8px' }} />
    </>
);
