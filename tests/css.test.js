import React from 'react';
import { render, screen } from '@testing-library/react';
import CSS from '../src/lib/components/CSS';

describe('<CSS>', () => {
    test('It displays content', () => {
        render(
            <CSS>
                <div>CSS Content</div>
            </CSS>
        );

        expect(screen.getByText('CSS Content')).toBeInTheDocument();
    });

    test('It creates its own div', () => {
        render(
            <CSS div data-testid="css">
                <div>CSS Content</div>
            </CSS>
        );

        expect(screen.getByTestId('css')).toBeInTheDocument();
    });

    test('It only allows a single child', () => {
        const err = jest.spyOn(console, 'error').mockImplementation();

        expect(() => {
            render(
                <CSS>
                    <div>Child 1</div>
                    <div>Child 2</div>
                </CSS>
            );
        }).toThrowError();

        err.mockRestore();
    });

    test('It Allows multiple children', () => {
        render(
            <CSS div>
                <div>Child 1</div>
                <div>Child 2</div>
            </CSS>
        );

        expect(screen.getByText('Child 1')).toBeInTheDocument();
        expect(screen.getByText('Child 2')).toBeInTheDocument();
    });

    test('It merges classes on child', () => {
        render(
            <CSS backgroundColor="primary">
                <div className="child-test">Child 1</div>
            </CSS>
        );

        expect(screen.getByText('Child 1')).toHaveClass('bg--primary');
        expect(screen.getByText('Child 1')).toHaveClass('child-test');
    });

    test('It forwards ref', () => {
        const cssRef = React.createRef();

        render(
            <CSS div ref={cssRef}>
                <div className="child-test">Child 1</div>
            </CSS>
        );

        expect(cssRef.current).toBeInTheDocument();
    });
});
