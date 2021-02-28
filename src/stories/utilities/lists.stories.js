import Lookingglass from '../../lib/components/Lookingglass';
import { cleanArgs } from '../helpers/utils';

const argTypes = {
    listStyleType: {
        control: {
            type: 'select',
            options: [
                'default',
                'none',
                'circle',
                'disc',
                'square',
                'decimal',
                'lower-latin',
                'upper-latin',
                'lower-roman',
                'upper-roman',
            ],
        },
    },
    listPosition: { control: { type: 'radio', options: ['default', 'inside'] } },
};

export default {
    component: Lookingglass,
    title: 'Utilities/Lists',
    argTypes: argTypes,
};

export const Lists = (args) => {
    const cArgs = cleanArgs(args);
    return (
        <Lookingglass {...cArgs}>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </Lookingglass>
    );
};

Lists.args = {
    listStyleType: 'default',
    listPosition: 'default',
};
