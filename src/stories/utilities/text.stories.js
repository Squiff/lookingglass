import Lookingglass from '../../lib/components/Lookingglass';
import { UpdateArgTable } from '../helpers/utils';
import { argTypes as lookingglassArgs } from './lookingglass.storyconfig';

// Note: directly exporting from a function is an issue for storybook
const _argTypes = UpdateArgTable(lookingglassArgs, {
    enable: ['fontSize', 'fontWeight', 'textDecoration', 'textTransform', 'textAlign'],
});

export const argTypes = _argTypes;

const Template = (args) => (
    <Lookingglass {...args}>
        <div>The quick brown fox jumps over the lazy dog</div>
    </Lookingglass>
);

/*--------- ALL PROPS ------------ */
export const TextProps = (args) => (
    <Lookingglass {...args}>
        <div>The quick brown fox jumps over the lazy dog</div>
    </Lookingglass>
);

TextProps.parameters = {
    options: { showPanel: true },
};

/*--------- ALL PROPS ------------ */
export const FontSize = (args) => (
    <>
        <Lookingglass fontSize="0.75" div>
            The quick brown fox jumps over the lazy dog
        </Lookingglass>
        <Lookingglass fontSize="0.875" div>
            The quick brown fox jumps over the lazy dog
        </Lookingglass>
        <Lookingglass fontSize="1" div>
            The quick brown fox jumps over the lazy dog
        </Lookingglass>
        <Lookingglass fontSize="1.125" div>
            The quick brown fox jumps over the lazy dog
        </Lookingglass>
        <Lookingglass fontSize="1.25" div>
            The quick brown fox jumps over the lazy dog
        </Lookingglass>
        <Lookingglass fontSize="1.5" div>
            The quick brown fox jumps over the lazy dog
        </Lookingglass>
    </>
);

export const FontWeight = (args) => (
    <>
        <Lookingglass fontWeight="200" div>
            Font Weight 200
        </Lookingglass>
        <Lookingglass fontWeight="400" div>
            Font Weight 400
        </Lookingglass>
        <Lookingglass fontWeight="600" div>
            Font Weight 600
        </Lookingglass>
        <Lookingglass fontWeight="800" div>
            Font Weight 800
        </Lookingglass>
    </>
);

export const TextDecoration = (args) => (
    <>
        <Lookingglass textDecoration="none" div>
            Text Decoration None
        </Lookingglass>
        <Lookingglass textDecoration="underline" div>
            Text Decoration Underline
        </Lookingglass>
        <Lookingglass textDecoration="line-through" div>
            Text Decoration Line-Through
        </Lookingglass>
    </>
);

export const TextTransform = (args) => (
    <>
        <Lookingglass textTransform="capitalize" div>
            text transform capitalize
        </Lookingglass>
        <Lookingglass textTransform="uppercase" div>
            Text Transform Uppercase
        </Lookingglass>
        <Lookingglass textTransform="lowercase" div>
            Text Transform Lowercase
        </Lookingglass>
    </>
);

export const TextAlign = (args) => (
    <>
        <Lookingglass textAlign="left" div>
            Text Align Left
        </Lookingglass>
        <Lookingglass textAlign="center" div>
            Text Align Center
        </Lookingglass>
        <Lookingglass textAlign="right" div>
            Text Align Right
        </Lookingglass>
    </>
);
