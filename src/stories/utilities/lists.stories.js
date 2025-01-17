import CSS from '../../lib/components/CSS';
import { cleanArgs } from '../helpers/utils';
import { UpdateArgTable } from '../helpers/utils';
import { argTypes as lookingglassArgs } from './lookingglass.storyconfig';

// Note: directly exporting from a function is an issue for storybook
const _argTypes = UpdateArgTable(lookingglassArgs, {
    enable: ['listStyleType', 'listPosition'],
});

export const argTypes = _argTypes;

/* -------- List Props -------- */
export const ListProps = (args) => {
    const cArgs = cleanArgs(args);
    return (
        <>
            <CSS {...cArgs}>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
            </CSS>
        </>
    );
};

ListProps.parameters = {
    options: { showPanel: true },
};

/* --------Ordered Unordered -------- */
export const OrderedUnordered = (args) => {
    return (
        <>
            <h6>Unordered List</h6>
            <CSS listStyleType="circle">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
            </CSS>
            <h6>Ordered List</h6>
            <CSS listStyleType="lower-latin">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
            </CSS>
        </>
    );
};

/* -------- Examples -------- */
export const ListExamples = (args) => {
    return (
        <>
            <h6>Standard List</h6>
            <p>A List with no modifications</p>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>

            <hr />

            <h6>Align Marker Position</h6>
            <p>Set position inside and remove padding to left align markers</p>
            <CSS listStyleType="disc" listPosition="inside" padding="0">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
            </CSS>

            <hr />

            <h6>Remove Markers</h6>
            <p>Remove list style</p>
            <CSS listStyleType="none" padding="0" listPosition="inside">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
            </CSS>
        </>
    );
};
