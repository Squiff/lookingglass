import { render, screen } from '@testing-library/react';
import Collapser from '../src/lib/components/Collapser';

describe('<Collapser>', () => {
    test('It renders collapser', () => {
        render(<Collapser data-testid="collapser" />);

        expect(screen.getByTestId('collapser')).toBeInTheDocument();
    });

    test('It renders children', () => {
        render(
            <Collapser>
                <div>Collapser Content</div>
            </Collapser>
        );

        expect(screen.getByText('Collapser Content')).toBeInTheDocument();
    });

    test('It renders in open state', () => {
        render(
            <Collapser show={true} data-testid="collapser">
                <div>Collapser Content</div>
            </Collapser>
        );

        expect(screen.getByTestId('collapser')).not.toHaveStyle('height:0');
    });

    test('It renders in closed state', () => {
        render(
            <Collapser show={false} data-testid="collapser">
                <div>Collapser Content</div>
            </Collapser>
        );

        expect(screen.getByTestId('collapser')).toHaveStyle('height:0');
    });
});
