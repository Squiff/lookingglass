/* library styles */
import '../src/lib/sass/index.scss';
/* storybook specific styles */
import './styles.css';

import Theme from './Theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    // controls: { expanded: true },
    docs: {
        theme: Theme,
    },
};
