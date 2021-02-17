import Lookingglass from '../../lib/components/Lookingglass';

export default {
    component: Lookingglass,
    title: 'Utilities/Shadow',
};

export const Shadow = (args) => (
    <Lookingglass {...args} padding="2">
        <div>The quick brown fox jumps over the lazy dog</div>
    </Lookingglass>
);

Shadow.args = {
    shadow: '1',
};
