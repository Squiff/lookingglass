import Spinner from '../lib/components/Spinner';

export default {
    component: Spinner,
    title: 'Spinner',
};

export const All = (args) => <Spinner {...args} />;
All.args = {
    color: 'primary',
    size: 'l',
    halo: false,
};

export const Sizes = (args) => (
    <>
        <Spinner size="s" />
        <Spinner />
        <Spinner size="l" />
    </>
);

export const Halo = (args) => (
    <>
        <Spinner color="primary" halo={true} />
        <Spinner color="secondary" halo={true} />
        <Spinner color="info" halo={true} />
    </>
);

export const Styled = (args) => <Spinner {...args} />;
Styled.args = {
    style: { color: 'hotpink', width: '75px', height: '75px' },
    size: 'l',
};
