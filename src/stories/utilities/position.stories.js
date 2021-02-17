import Lookingglass from '../../lib/components/Lookingglass';

export default {
    component: Lookingglass,
    title: 'Utilities/Position',
};

const Template = (args) => (
    <Lookingglass position="relative" backgroundColor="light" width="50vw" height="50vh" margin="auto" marginTop="5">
        <div>
            <Lookingglass {...args} backgroundColor="dark" borderRadius="rounded">
                <div style={{ height: '50px', width: '50px' }}></div>
            </Lookingglass>
        </div>
    </Lookingglass>
);

export const Position = Template.bind({});

Position.args = {
    position: 'absolute',
    left: '0',
    right: '',
    top: '',
    bottom: '',
};

Position.argTypes = {
    position: { control: { type: 'select', options: ['fixed', 'relative', 'absolute', 'sticky'] } },
};

export const AbsoluteTransforms = Template.bind({});
AbsoluteTransforms.args = {
    absolute: 'top-left',
};

AbsoluteTransforms.argTypes = {
    absolute: {
        control: {
            type: 'select',
            options: [
                'top-left',
                'top-right',
                'top-middle',
                'middle-left',
                'middle-right',
                'middle',
                'bottom-left',
                'bottom-right',
                'bottom-middle',
            ],
        },
    },
};
