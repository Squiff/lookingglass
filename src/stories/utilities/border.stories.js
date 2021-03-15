import Lookingglass from '../../lib/components/Lookingglass';
import { UpdateArgTable } from '../helpers/utils';
import { argTypes as lookingglassArgs } from './lookingglass.storyconfig';

// Note: directly exporting from a function is an issue for storybook
const _argTypes = UpdateArgTable(lookingglassArgs, {
    enable: ['border', 'borderTop', 'borderRight', 'borderBottom', 'borderLeft', 'borderRadius', 'borderColor'],
});

export const argTypes = _argTypes;

/* --------- Border Props ---------- */
export const BorderProps = (args) => (
    <Lookingglass {...args} padding="2">
        <div>The quick brown fox jumps over the lazy dog</div>
    </Lookingglass>
);

BorderProps.args = {
    border: '1',
    borderLeft: '4',
    borderColor: 'primary',
};

/* --------- Border Width ---------- */
export const BorderWidth = (args) => (
    <Lookingglass border="1" borderLeft="4" padding="2">
        <div>The quick brown fox jumps over the lazy dog</div>
    </Lookingglass>
);

/* --------- Border Colors ---------- */
export const BorderColor = (args) => (
    <>
        <Lookingglass border="2" borderColor="primary" padding="2" margin="1">
            <div>Primary</div>
        </Lookingglass>
        <Lookingglass border="2" borderColor="secondary" padding="2" margin="1">
            <div>Secondary</div>
        </Lookingglass>
        <Lookingglass border="2" borderColor="success" padding="2" margin="1">
            <div>Success</div>
        </Lookingglass>
        <Lookingglass border="2" borderColor="error" padding="2" margin="1">
            <div>Error</div>
        </Lookingglass>
        <Lookingglass border="2" borderColor="currentColor" color="primary-l2" padding="2" margin="1">
            <div style={{ borderColor: 'yellow' }}>currentColor</div>
        </Lookingglass>
    </>
);

/* --------- Border Colors ---------- */
export const BorderRadius = (args) => (
    <>
        <Lookingglass borderRadius="0" border="2" padding="2" margin="1">
            <div>0</div>
        </Lookingglass>
        <Lookingglass borderRadius="1" border="2" padding="2" margin="1">
            <div>1</div>
        </Lookingglass>
        <Lookingglass borderRadius="2" border="2" padding="2" margin="1">
            <div>2</div>
        </Lookingglass>
        <Lookingglass borderRadius="3" border="2" padding="2" margin="1">
            <div>3</div>
        </Lookingglass>
        <Lookingglass borderRadius="rounded" border="2" padding="2" margin="1">
            <div>rounded</div>
        </Lookingglass>
    </>
);
