import { cleanArgs } from '../helpers/utils';
import FormGroup from '../../lib/components/FormGroup';
import { Input, Select, TextArea } from '../../lib/components/Input';
import Label from '../../lib/components/Label';
import InputValidation from '../../lib/components/InputValidation';
import InputHelp from '../../lib/components/InputHelp';
import Button from '../../lib/components/Button';

export const argTypes = {
    size: { control: { type: 'radio', options: ['s', 'default', 'l'] } },
    inline: { control: 'boolean' },
    invalid: { control: 'boolean' },
    type: {
        description: 'Standard input Prop. Set the input type',
        table: {
            category: 'Standard Props',
            type: { summary: 'string' },
        },
    },
    disabled: {
        description: 'Standard HTML Prop. Mark field as disabled',
        control: 'boolean',
        table: {
            category: 'Standard Props',
            type: { summary: 'bool' },
        },
    },
    readOnly: {
        description: 'Standard HTML Prop. Mark field as read only',
        control: 'boolean',
        table: {
            category: 'Standard Props',
            type: { summary: 'bool' },
        },
    },
};

/* --------- ShowCase ---------------*/
export const Form = (args) => {
    return (
        <>
            <FormGroup>
                <Label htmlFor="textInput">Text Input</Label>
                <Input type="text" placeholder="Placeholder" id="textInput" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="numInput">Number Input</Label>
                <Input type="number" name="number" placeholder="Number" id="numInput" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="dateInput">Date Input</Label>
                <Input type="date" name="number" placeholder="Number" id="dateInput" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="selectInput">Select</Label>
                <Select id="selectInvalid" placeholder="ddd">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 3</option>
                </Select>
                <InputHelp>Select an option from the dropdown</InputHelp>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="selectInput">Text Area</Label>
                <TextArea rows="3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptas culpa! Laboriosam,
                    obcaecati? Maiores laborum inventore fuga. Dignissimos, blanditiis perferendis.
                </TextArea>
            </FormGroup>
            <Button block={true} color="primary">
                Submit
            </Button>
        </>
    );
};

/* --------- Props ---------------*/
export const AllProps = (args) => {
    const cArgs = cleanArgs(args);

    return (
        <FormGroup>
            <Label htmlFor="textProps">Text Input</Label>
            <Input placeholder="Placeholder" id="textProps" {...cArgs} />
        </FormGroup>
    );
};

AllProps.args = {
    type: 'text',
    size: 'default',
};

/* --------- Validation ---------------*/
export const Validation = (args) => (
    <>
        <FormGroup>
            <Label htmlFor="validation1">Input</Label>
            <Input type="text" placeholder="Placeholder" id="validation1" />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="validation2">Invalid Input</Label>
            <Input type="text" placeholder="Placeholder" id="validation2" invalid />
            <InputValidation msg="Invalid value!" />
        </FormGroup>
    </>
);

/* --------- State ---------------*/
export const States = (args) => (
    <>
        <FormGroup>
            <Label htmlFor="state1">Input</Label>
            <Input type="text" placeholder="Placeholder" id="state1" />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="state2">Disabled Input</Label>
            <Input type="text" placeholder="Placeholder" id="state2" disabled />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="state3">Read Only Input</Label>
            <Input type="text" placeholder="Placeholder" id="state3" readOnly />
        </FormGroup>
    </>
);

/* --------- Sizes ---------------*/
export const Sizes = (args) => (
    <>
        <FormGroup>
            <Input type="text" size="s" placeholder="Small" />
            <Input type="text" placeholder="Default" />
            <Input type="text" size="l" placeholder="Large" />
        </FormGroup>
    </>
);

/* --------- SELECT ---------------*/
export const Selects = (args) => (
    <>
        <FormGroup>
            <Label htmlFor="selectInput">Select an Option</Label>
            <Select id="selectInput">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </Select>
            <Label htmlFor="selectLarge">Size Large</Label>
            <Select id="selectLarge" size="l">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </Select>
            <Label htmlFor="selectDisabled">Disabled</Label>
            <Select id="selectDisabled" disabled>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </Select>
            <Label htmlFor="selectInvalid">Invalid</Label>
            <Select id="selectInvalid" invalid>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </Select>
        </FormGroup>
    </>
);

/* --------- Text Area ---------------*/
export const TextAreas = (args) => {
    const dummyText =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eaque dolores modi, odio suscipit id adipisci tempore excepturi officiis blanditiis impedit qui a asperiores amet! Sapiente quam natus ut sunt incidunt nesciunt nam, labore rerum in dolorum distinctio maxime culpa tenetur eligendi voluptate delectus necessitatibus earum voluptatem illo veritatis? Mod';

    return (
        <>
            <Label>Text Area</Label>
            <TextArea rows="3" defaultValue={dummyText} />
            <Label>Invalid</Label>
            <TextArea rows="3" defaultValue={dummyText} invalid />
            <Label>Disabled</Label>
            <TextArea rows="3" defaultValue={dummyText} disabled />
            <Label>Read Only</Label>
            <TextArea rows="3" defaultValue={dummyText} readOnly />
            <div>
                <Label>Inline</Label>
            </div>
            <TextArea rows="3" defaultValue={dummyText} inline />
        </>
    );
};

/* --------- File ---------------*/
export const Miscellaneous = (args) => (
    <>
        <FormGroup>
            <Label htmlFor="fileInput">File Input</Label>
            <Input type="file" id="fileInput" />
            <Label htmlFor="colorInput">Color Input</Label>
            <Input type="color" id="colorInput" defaultValue="#800080" />
        </FormGroup>
    </>
);

/* --------- File ---------------*/
export const HelpText = (args) => (
    <>
        <Label>Text Input</Label>
        <Input type="text" placeholder="..." />
        <InputHelp>This is some helpful text to indicate how to fill in the field</InputHelp>
    </>
);
