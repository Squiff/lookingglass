import Lookingglass from '../../lib/components/Lookingglass';

export default {
    component: Lookingglass,
    title: 'Utilities/Scrollbar',
};

const StorybookContent = ({ children, className }) => {
    const parentStyle = {
        height: '300px',
        width: '50px',
        overflow: 'auto',
        border: '1px solid black',
        marginRight: '25px',
    };

    const childStyle = {
        height: '1000px',
    };

    return (
        <div className={className} style={parentStyle}>
            <div style={childStyle}>{children}</div>
        </div>
    );
};

export const Colors = (args) => {
    return (
        <div style={{ display: 'flex' }}>
            <Lookingglass scrollbarColor="light">
                <StorybookContent />
            </Lookingglass>
            <Lookingglass scrollbarColor="dark">
                <StorybookContent />
            </Lookingglass>
            <Lookingglass scrollbarColor="primary">
                <StorybookContent />
            </Lookingglass>
        </div>
    );
};

export const Sizes = (args) => {
    return (
        <div style={{ display: 'flex' }}>
            <Lookingglass scrollbarSize="s" {...args}>
                <StorybookContent />
            </Lookingglass>
            <Lookingglass scrollbarSize="m" {...args}>
                <StorybookContent />
            </Lookingglass>
            <Lookingglass scrollbarSize="l" {...args}>
                <StorybookContent />
            </Lookingglass>
        </div>
    );
};

Sizes.args = {
    scrollbarColor: 'dark',
};

export const Style = (args) => (
    <div style={{ display: 'flex' }}>
        <Lookingglass {...args}>
            <StorybookContent />
        </Lookingglass>
        <Lookingglass scrollbarStyle="rounded" {...args}>
            <StorybookContent />
        </Lookingglass>
        <Lookingglass scrollbarStyle="none" {...args}>
            <StorybookContent>Lorem ipsum dolor sit amet consectetur adipisicing elit.</StorybookContent>
        </Lookingglass>
    </div>
);

Style.args = {
    scrollbarColor: 'dark',
    scrollbarSize: 's',
};

export const Track = (args) => (
    <div style={{ display: 'flex' }}>
        <Lookingglass {...args}>
            <StorybookContent />
        </Lookingglass>
        <Lookingglass scrollbarTrack="none" {...args}>
            <StorybookContent />
        </Lookingglass>
    </div>
);

Track.args = {
    scrollbarColor: 'light',
};
