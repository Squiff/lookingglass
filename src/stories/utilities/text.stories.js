import CSS from '../../lib/components/CSS';
import { UpdateArgTable } from '../helpers/utils';
import { argTypes as lookingglassArgs } from './lookingglass.storyconfig';

// Note: directly exporting from a function is an issue for storybook
const _argTypes = UpdateArgTable(lookingglassArgs, {
    enable: ['fontSize', 'fontWeight', 'textDecoration', 'textTransform', 'textAlign'],
});

export const argTypes = _argTypes;

/*--------- ALL PROPS ------------ */
export const TextProps = (args) => (
    <CSS {...args}>
        <div>The quick brown fox jumps over the lazy dog</div>
    </CSS>
);

TextProps.parameters = {
    options: { showPanel: true },
};

/*--------- ALL PROPS ------------ */
export const FontSize = (args) => (
    <>
        <CSS fontSize="0.75" div>
            The quick brown fox jumps over the lazy dog
        </CSS>
        <CSS fontSize="0.875" div>
            The quick brown fox jumps over the lazy dog
        </CSS>
        <CSS fontSize="1" div>
            The quick brown fox jumps over the lazy dog
        </CSS>
        <CSS fontSize="1.125" div>
            The quick brown fox jumps over the lazy dog
        </CSS>
        <CSS fontSize="1.25" div>
            The quick brown fox jumps over the lazy dog
        </CSS>
        <CSS fontSize="1.5" div>
            The quick brown fox jumps over the lazy dog
        </CSS>
    </>
);

export const FontWeight = (args) => (
    <>
        <CSS fontWeight="200" div>
            Font Weight 200
        </CSS>
        <CSS fontWeight="400" div>
            Font Weight 400
        </CSS>
        <CSS fontWeight="600" div>
            Font Weight 600
        </CSS>
        <CSS fontWeight="800" div>
            Font Weight 800
        </CSS>
    </>
);

export const TextDecoration = (args) => (
    <>
        <CSS textDecoration="none" div>
            Text Decoration None
        </CSS>
        <CSS textDecoration="underline" div>
            Text Decoration Underline
        </CSS>
        <CSS textDecoration="line-through" div>
            Text Decoration Line-Through
        </CSS>
    </>
);

export const TextTransform = (args) => (
    <>
        <CSS textTransform="capitalize" div>
            text transform capitalize
        </CSS>
        <CSS textTransform="uppercase" div>
            Text Transform Uppercase
        </CSS>
        <CSS textTransform="lowercase" div>
            Text Transform Lowercase
        </CSS>
    </>
);

export const TextAlign = (args) => (
    <>
        <CSS textAlign="left" div>
            Text Align Left
        </CSS>
        <CSS textAlign="center" div>
            Text Align Center
        </CSS>
        <CSS textAlign="right" div>
            Text Align Right
        </CSS>
    </>
);
