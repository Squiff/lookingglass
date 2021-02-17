import Lookingglass from '../../lib/components/Lookingglass';

export default {
    component: Lookingglass,
    title: 'Utilities/Border',
};

export const Border = (args) => (
    <Lookingglass {...args} padding="2">
        <div>The quick brown fox jumps over the lazy dog</div>
    </Lookingglass>
);

Border.args = {
    border: '1',
    borderTop: undefined,
    borderRight: '',
    borderBottom: '',
    borderLeft: '4',
    borderRadius: '',
    borderColor: 'primary',
};
