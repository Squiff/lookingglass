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
                <Label htmlFor="formText">Text Input</Label>
                <Input type="text" placeholder="Placeholder" id="formText" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="formNumber">Number Input</Label>
                <Input type="number" name="number" placeholder="Number" id="formNumber" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="formSelect">Select</Label>
                <Select id="formSelect">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                </Select>
                <InputHelp>Select an option from the dropdown</InputHelp>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="formTextArea">Text Area</Label>
                <TextArea
                    rows="3"
                    id="formTextArea"
                    defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptas culpa! Laboriosam,
                obcaecati? Maiores laborum inventore fuga. Dignissimos, blanditiis perferendis."
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="formCheckbox1">Checkbox 1</Label>
                <Input type="checkbox" name="formCheckbox1" id="formCheckbox1" />
                <Label htmlFor="formCheckbox2">Checkbox 2</Label>
                <Input type="checkbox" name="formCheckbox1" id="formCheckbox2" />
                <Label htmlFor="formCheckbox3">Checkbox 3</Label>
                <Input type="checkbox" name="formCheckbox1" id="formCheckbox3" />
            </FormGroup>

            <FormGroup type="radio">
                <Label htmlFor="formRadio1">Option 1</Label>
                <Input type="radio" name="formRadio" id="formRadio1" />
                <Label htmlFor="formRadio2">Option 2</Label>
                <Input type="radio" name="formRadio" id="formRadio2" />
            </FormGroup>
            <Button block={true} color="success">
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
            <Label htmlFor="props">Text Input</Label>
            <Input placeholder="Placeholder" id="props" {...cArgs} />
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
            <Label htmlFor="validation2">Invalid Input with Message</Label>
            <Input type="text" placeholder="Placeholder" id="validation2" invalid />
            <InputValidation msg="The value supplied was not valid" />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="validation3" invalid>
                Invalid Label
            </Label>
            <Input type="text" placeholder="Placeholder" id="validation3" invalid />
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
        <FormGroup>
            <Label htmlFor="state4" disabled>
                Disabled Label
            </Label>
            <Input type="text" placeholder="Placeholder" id="state4" disabled />
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

/* --------- Checkbox ---------------*/
export const Checkbox = (args) => (
    <>
        <h6>Inline</h6>
        <FormGroup>
            <Label htmlFor="checkbox1">Checkbox 1</Label>
            <Input type="checkbox" id="checkbox1" />
            <Label htmlFor="checkbox2">Checkbox 2</Label>
            <Input type="checkbox" id="checkbox2" />
            <Label htmlFor="checkbox3">Checkbox 3</Label>
            <Input type="checkbox" id="checkbox3" />
        </FormGroup>
        <h6>Using Form Groups</h6>
        <FormGroup>
            <Label htmlFor="checkbox4">Checkbox 4</Label>
            <Input type="checkbox" id="checkbox4" />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="checkbox5">Checkbox 5</Label>
            <Input type="checkbox" id="checkbox5" />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="checkbox6">Checkbox 6</Label>
            <Input type="checkbox" id="checkbox6" />
        </FormGroup>
        <h6>Disabled</h6>
        <FormGroup>
            <Label htmlFor="checkbox7" disabled>
                Disabled Checkbox
            </Label>
            <Input type="checkbox" id="checkbox7" disabled />
            <Label htmlFor="checkbox8">Checkbox 2</Label>
            <Input type="checkbox" id="checkbox8" />
            <Label htmlFor="checkbox9">Checkbox 3</Label>
            <Input type="checkbox" id="checkbox9" />
        </FormGroup>
    </>
);

/* --------- Checkbox ---------------*/
export const Radio = (args) => (
    <>
        <h6>Inline</h6>
        <FormGroup>
            <Label htmlFor="radio1">radio 1</Label>
            <Input type="radio" id="radio1" name="radioGroup1" />
            <Label htmlFor="radio2">radio 2</Label>
            <Input type="radio" id="radio2" name="radioGroup1" />
            <Label htmlFor="radio3">radio 3</Label>
            <Input type="radio" id="radio3" name="radioGroup1" />
        </FormGroup>
        <h6>Using Form Groups</h6>
        <FormGroup>
            <Label htmlFor="radio4">radio 4</Label>
            <Input type="radio" id="radio4" name="radioGroup2" />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="radio5">radio 5</Label>
            <Input type="radio" id="radio5" name="radioGroup2" />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="radio6">radio 6</Label>
            <Input type="radio" id="radio6" name="radioGroup2" />
        </FormGroup>
        <h6>Disabled</h6>
        <FormGroup>
            <Label htmlFor="radio7" disabled>
                Disabled radio
            </Label>
            <Input type="radio" id="radio7" name="radioGroup3" disabled />
            <Label htmlFor="radio8">radio 8</Label>
            <Input type="radio" id="radio8" name="radioGroup3" />
            <Label htmlFor="radio9">radio 9</Label>
            <Input type="radio" id="radio9" name="radioGroup3" />
        </FormGroup>
    </>
);

/* --------- SELECT ---------------*/
export const Selects = (args) => (
    <>
        <FormGroup>
            <Label htmlFor="select1">Select an Option</Label>
            <Select id="select1">
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
            <Label htmlFor="textArea1">Text Area</Label>
            <TextArea rows="3" defaultValue={dummyText} id="textArea1" />
            <Label htmlFor="textAreaInvalid">Invalid</Label>
            <TextArea rows="3" defaultValue={dummyText} invalid id="textAreaInvalid" />
            <Label htmlFor="textAreaDisabled">Disabled</Label>
            <TextArea rows="3" defaultValue={dummyText} disabled id="textAreaDisabled" />
            <Label htmlFor="textAreaReadOnly">Read Only</Label>
            <TextArea rows="3" defaultValue={dummyText} readOnly id="textAreaReadOnly" />
            <div>
                <Label htmlFor="textAreaInline">Inline</Label>
            </div>
            <TextArea
                htmlFor="textArea1"
                rows="3"
                defaultValue={dummyText}
                inline
                id="textAreaInline"
            />
        </>
    );
};

/* --------- File ---------------*/
export const Miscellaneous = (args) => (
    <>
        <FormGroup>
            <Label htmlFor="miscFile">File Input</Label>
            <Input type="file" id="miscFile" />
            <Label htmlFor="miscColor">Color Input</Label>
            <Input type="color" id="miscColor" defaultValue="#800080" />
        </FormGroup>
    </>
);

/* --------- File ---------------*/
export const HelpText = (args) => (
    <>
        <Label htmlFor="helpText">Text Input</Label>
        <Input type="text" placeholder="..." id="helpText" />
        <InputHelp>This is some helpful text to indicate how to fill in the field</InputHelp>
    </>
);
