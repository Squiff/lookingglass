import Lookingglass from '../../lib/components/Lookingglass';

export default {
    component: Lookingglass,
    title: 'Utilities/Overflow',
};

const Template = (args) => (
    <Lookingglass {...args} height="25vh" width="25vw" backgroundColor="primary">
        <div>
            <Lookingglass>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam harum nulla exercitationem
                    cumque sint id quod. Maxime nulla id tempore laborum vitae accusamus quis velit excepturi, unde
                    illo. Quia quae facilis aliquam, ipsam recusandae non perferendis! Tenetur, corrupti, consectetur
                    totam fuga in cupiditate, iusto dolor optio esse veniam quas facere eius saepe quis quo nemo est ex
                    iure inventore reiciendis tempora cumque? Iste modi dolorem nemo iusto voluptatem. Dolorem, ea.
                </div>
            </Lookingglass>
        </div>
    </Lookingglass>
);

export const Basic = Template.bind({});

Basic.args = {
    overflow: 'auto',
};

Basic.argTypes = {
    overflow: { control: { type: 'select', options: ['scroll', 'hidden', 'auto', 'visible'] } },
};
