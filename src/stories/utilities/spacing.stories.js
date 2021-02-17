import Lookingglass from '../../lib/components/Lookingglass';

export default {
    component: Lookingglass,
    title: 'Utilities/Spacing',
};

export const Spacing = (args) => (
    <Lookingglass {...args} backgroundColor="primary" color="white">
        <div>The quick brown fox jumps over the lazy dog</div>
    </Lookingglass>
);

Spacing.args = {
    margin: '2',
    marginX: '',
    marginY: '',
    marginTop: '',
    marginLeft: '',
    marginBottom: '',
    marginRight: '',
    padding: '2',
    paddingX: '',
    paddingY: '',
    paddingTop: '',
    paddingLeft: '',
    paddingBottom: '',
    paddingRight: '',
};
