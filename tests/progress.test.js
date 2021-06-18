import { render, screen } from '@testing-library/react';
import Progress from '../src/lib/components/Progress';

describe('<Progress>', () => {
    test('It renders progress bar', () => {
        render(<Progress />);
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    test('It merges classes', () => {
        render(<Progress className="progress-test" />);
        expect(screen.getByRole('progressbar')).toHaveClass('progress-test');
    });

    test('It forwards props', () => {
        render(<Progress data-testid="progressbar" />);
        expect(screen.getByTestId('progressbar')).toBeInTheDocument();
    });
});
