import React from 'react';
import { render, screen } from '@testing-library/react';
import Flex from '../src/lib/components/Flex';

describe('<Flex>', () => {
    test('It renders content', () => {
        render(
            <Flex>
                <Flex.Child>Flex Content</Flex.Child>
            </Flex>
        );

        expect(screen.getByText('Flex Content')).toBeInTheDocument();
    });

    test('It merges classes', () => {
        render(<Flex className="test-class">Flex Content</Flex>);

        expect(screen.getByText('Flex Content')).toHaveClass('test-class');
    });

    test('It forwards props', () => {
        render(<Flex data-testid="flex-test">Flex Content</Flex>);

        expect(screen.getByTestId('flex-test')).toBeInTheDocument();
    });

    test('It forwards ref', () => {
        const ref = React.createRef();

        render(<Flex ref={ref}>Flex Content</Flex>);

        expect(ref.current).toBeInTheDocument();
    });

    test('Child merges classes', () => {
        render(
            <Flex>
                <Flex.Child className="flex-test">Flex Content</Flex.Child>
            </Flex>
        );

        expect(screen.getByText('Flex Content')).toHaveClass('flex-test');
    });

    test('Child forwards ref', () => {
        const ref = React.createRef();

        render(
            <Flex>
                <Flex.Child ref={ref}>Flex Content</Flex.Child>
            </Flex>
        );

        expect(ref.current).toBeInTheDocument();
    });
});
