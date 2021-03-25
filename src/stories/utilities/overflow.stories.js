import Lookingglass from '../../lib/components/Lookingglass';
import { UpdateArgTable } from '../helpers/utils';
import { argTypes as lookingglassArgs } from './lookingglass.storyconfig';

// Note: directly exporting from a function is an issue for storybook
const _argTypes = UpdateArgTable(lookingglassArgs, {
    enable: ['overflow', 'overflowX', 'overflowY'],
});

export const argTypes = _argTypes;

/* -------- Overflow Props -------- */
export const OverflowProps = (args) => {
    const containerStyles = { width: '250px', height: '250px', border: '1px solid #000' };
    const childStyles = { width: '750px', height: '750px' };

    return (
        <Lookingglass {...args}>
            <div style={containerStyles}>
                <div style={childStyles}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam harum nulla exercitationem
                    cumque sint id quod. Maxime nulla id tempore laborum vitae accusamus quis velit excepturi, unde
                    illo. Quia quae facilis aliquam, ipsam recusandae non perferendis! Tenetur, corrupti, consectetur
                    totam fuga in cupiditate, iusto dolor optio esse veniam quas facere eius saepe quis quo nemo est ex
                    iure inventore reiciendis tempora cumque? Iste modi dolorem nemo iusto voluptatem. Dolorem, ea.
                </div>
            </div>
        </Lookingglass>
    );
};

OverflowProps.parameters = {
    options: { showPanel: true },
};
