/* library styles */
import '../src/lib/sass/index.scss';
/* storybook specific styles */
import './styles.css';

import Theme from './Theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
    options: { showPanel: false, storySort: { order: ['Global Styles', 'Utilities', 'Components', 'Forms'] } },
    docs: {
        theme: Theme,
    },
    // make docs the defaault landing page
    viewMode: 'docs',
};
