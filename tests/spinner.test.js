import { render, screen } from '@testing-library/react';
import Spinner from '../src/lib/components/Spinner';

describe('<Spinner>', () => {
    test('It renders spinner', () => {
        render(<Spinner />);

        expect(screen.getByLabelText('loading')).toBeInTheDocument();
    });

    test('It merges classes', () => {
        render(<Spinner className="spinner-test" />);

        expect(document.querySelector('.spinner')).toHaveClass('spinner-test');
    });
});
