import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import { Input, Select, TextArea } from '../src/lib/components/Input';
import Label from '../src/lib/components/Label';
import FormGroup from '../src/lib/components/FormGroup';
import InputHelp from '../src/lib/components/InputHelp';
import InputValidation from '../src/lib/components/InputValidation';

describe('Forms', () => {
    test('It renders form inputs', () => {
        render(
            <form>
                <FormGroup>
                    <Label htmlFor="formText">Text Input</Label>
                    <Input id="formText" placeholder="Text Input" type="text" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="formTextArea">Text Area</Label>
                    <TextArea placeholder="Text Area" id="formTextArea" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="formSelect">Select</Label>
                    <Select id="formSelect">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                    </Select>
                </FormGroup>
            </form>
        );

        // Labels
        expect(screen.getByLabelText('Text Input')).toBeInTheDocument();
        expect(screen.getByLabelText('Text Area')).toBeInTheDocument();
        expect(screen.getByLabelText('Select')).toBeInTheDocument();
        // Placeholders
        expect(screen.getByPlaceholderText('Text Input')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Text Area')).toBeInTheDocument();
    });

    test('It renders input types', () => {
        render(
            <form>
                <FormGroup>
                    <Label htmlFor="formText">Text</Label>
                    <Input id="formText" type="text" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="formText">Checkbox</Label>
                    <Input id="formText" type="checkbox" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="formText">Radio</Label>
                    <Input id="formText" type="radio" />
                </FormGroup>
            </form>
        );

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByRole('radio')).toBeInTheDocument();
    });

    test('It sets disabled', () => {
        render(
            <form>
                <FormGroup>
                    <Label htmlFor="formText">Text Input</Label>
                    <Input id="formText" placeholder="Text Input" type="text" disabled />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="formTextArea">Text Area</Label>
                    <TextArea placeholder="Text Area" id="formTextArea" disabled />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="formSelect">Select</Label>
                    <Select id="formSelect" disabled>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                    </Select>
                </FormGroup>
            </form>
        );

        // Labels
        expect(screen.getByLabelText('Text Input')).toBeDisabled();
        expect(screen.getByLabelText('Text Area')).toBeDisabled();
        expect(screen.getByLabelText('Select')).toBeDisabled();
    });

    test('It handles onChange', () => {
        const onChange = jest.fn();

        render(
            <form>
                <FormGroup>
                    <Label htmlFor="formText">Text Input</Label>
                    <Input id="formText" placeholder="Text Input" type="text" onChange={onChange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="formTextArea">Text Area</Label>
                    <TextArea placeholder="Text Area" id="formTextArea" onChange={onChange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="formSelect">Select</Label>
                    <Select id="formSelect" onChange={onChange}>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                    </Select>
                </FormGroup>
            </form>
        );

        fireEvent.change(screen.getByLabelText('Text Input'), {
            target: { value: 'textinputchange' },
        });
        expect(onChange.mock.calls[0][0]).toMatchObject({ target: { value: 'textinputchange' } });

        onChange.mockClear();

        fireEvent.change(screen.getByLabelText('Text Area'), {
            target: { value: 'textareachange' },
        });
        expect(onChange.mock.calls[0][0]).toMatchObject({ target: { value: 'textareachange' } });

        onChange.mockClear();

        fireEvent.change(screen.getByLabelText('Select'), {
            target: { value: '2' },
        });
        expect(onChange.mock.calls[0][0]).toMatchObject({ target: { value: '2' } });
    });

    test('It renders input validation', () => {
        render(<InputValidation msg="input validation" />);

        expect(screen.getByText('input validation')).toBeInTheDocument();
    });

    test('It does not render input validation', () => {
        render(<InputValidation msg="" data-testid="inputvalidation" />);

        expect(screen.queryByTestId('inputvalidation')).not.toBeInTheDocument();
    });

    test('It renders help text', () => {
        render(<InputHelp>Help Text</InputHelp>);

        expect(screen.getByText('Help Text')).toBeInTheDocument();
    });
});
