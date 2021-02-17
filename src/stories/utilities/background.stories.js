import Lookingglass from '../../lib/components/Lookingglass';

export default {
    component: Lookingglass,
    title: 'Utilities/Color',
};

export const Color = (args) => (
    <Lookingglass {...args}>
        <div className="p--3">The quick brown fox jumps over the lazy dog</div>
    </Lookingglass>
);

Color.args = {
    backgroundColor: 'primary',
    color: 'white',
};
