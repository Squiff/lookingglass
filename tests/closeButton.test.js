import { fireEvent, render, screen } from '@testing-library/react';
import CloseButton from '../src/lib/components/CloseButton';

describe('<CloseButton>', () => {
    test('It renders a button', () => {
        render(<CloseButton />);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('It includes close label', () => {
        render(<CloseButton />);

        expect(screen.getByLabelText('close')).toBeInTheDocument();
    });

    test('It handles click', () => {
        const onClick = jest.fn();

        render(<CloseButton onClick={onClick} />);

        fireEvent.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
