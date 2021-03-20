import Lookingglass from '../../lib/components/Lookingglass';
import { UpdateArgTable } from '../helpers/utils';
import { argTypes as lookingglassArgs } from './lookingglass.storyconfig';

// Note: directly exporting from a function is an issue for storybook
const _argTypes = UpdateArgTable(lookingglassArgs, {
    enable: ['width', 'height'],
});

export const argTypes = _argTypes;

/* --------- Border Props ---------- */
export const SizingProps = (args) => (
    <div style={{ height: '200px' }}>
        <Lookingglass {...args} padding="2" backgroundColor="primary" color="white">
            <div>The quick brown fox jumps over the lazy dog</div>
        </Lookingglass>
    </div>
);
