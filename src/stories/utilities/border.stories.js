import CSS from '../../lib/components/CSS';
import { UpdateArgTable } from '../helpers/utils';
import { argTypes as lookingglassArgs } from './lookingglass.storyconfig';

// Note: directly exporting from a function is an issue for storybook
const _argTypes = UpdateArgTable(lookingglassArgs, {
    enable: [
        'border',
        'borderTop',
        'borderRight',
        'borderBottom',
        'borderLeft',
        'borderRadius',
        'borderColor',
    ],
});

export const argTypes = _argTypes;

/* --------- Border Props ---------- */
export const BorderProps = (args) => (
    <CSS {...args} padding="2">
        <div>The quick brown fox jumps over the lazy dog</div>
    </CSS>
);

BorderProps.args = {
    border: '1',
    borderLeft: '4',
    borderColor: 'primary',
};

BorderProps.parameters = {
    options: { showPanel: true },
};

/* --------- Border Width ---------- */
export const BorderWidth = (args) => (
    <CSS border="1" borderLeft="4" padding="2">
        <div>The quick brown fox jumps over the lazy dog</div>
    </CSS>
);

/* --------- Border Colors ---------- */
export const BorderColor = (args) => (
    <>
        <CSS border="2" borderColor="primary" padding="2" margin="1">
            <div>Primary</div>
        </CSS>
        <CSS border="2" borderColor="success" padding="2" margin="1">
            <div>Success</div>
        </CSS>
        <CSS border="2" borderColor="Warning" padding="2" margin="1">
            <div>Warning</div>
        </CSS>
        <CSS border="2" borderColor="error" padding="2" margin="1">
            <div>Error</div>
        </CSS>
        <CSS border="2" borderColor="currentColor" color="primary-l2" padding="2" margin="1">
            <div style={{ borderColor: 'yellow' }}>currentColor</div>
        </CSS>
    </>
);

/* --------- Border Colors ---------- */
export const BorderRadius = (args) => (
    <>
        <CSS borderRadius="0" border="2" padding="2" margin="1">
            <div>0</div>
        </CSS>
        <CSS borderRadius="1" border="2" padding="2" margin="1">
            <div>1</div>
        </CSS>
        <CSS borderRadius="2" border="2" padding="2" margin="1">
            <div>2</div>
        </CSS>
        <CSS borderRadius="3" border="2" padding="2" margin="1">
            <div>3</div>
        </CSS>
        <CSS borderRadius="rounded" border="2" padding="2" margin="1">
            <div>rounded</div>
        </CSS>
    </>
);
