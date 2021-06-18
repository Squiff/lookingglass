import { render, screen } from '@testing-library/react';
import Skeleton from '../src/lib/components/Skeleton';

describe('<Skeleton>', () => {
    test('It renders skeleton', () => {
        render(<Skeleton data-testid="skeleton" />);

        expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    });

    test('It merges classes', () => {
        render(<Skeleton data-testid="skeleton" className="skeleton-test" />);

        expect(screen.getByTestId('skeleton')).toHaveClass('skeleton-test');
    });
});
