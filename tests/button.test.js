import React, { createRef } from 'react';
import Button from '../src/lib/components/Button';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<Button>', () => {
    test('It renders a button', () => {
        render(<Button>Button</Button>);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('It renders child text', () => {
        render(<Button>Button Text</Button>);

        expect(screen.getByText('Button Text')).toBeInTheDocument();
    });

    test('It fires click event', () => {
        const fn = jest.fn();

        render(<Button onClick={fn}>Button</Button>);

        fireEvent.click(screen.getByRole('button'));

        expect(fn).toHaveBeenCalledTimes(1);
    });

    test('It can be disabled', () => {
        render(<Button disabled>Button</Button>);

        expect(screen.getByRole('button')).toBeDisabled();
    });

    test('It merges classes', () => {
        const addClass = 'testClass';
        render(<Button className={addClass}>Button</Button>);

        expect(screen.getByRole('button')).toHaveClass(addClass);
    });

    test('It should forward Refs', () => {
        const btnRef = createRef();

        render(<Button ref={btnRef}>Button</Button>);

        expect(btnRef.current.tagName).toBe('BUTTON');
    });

    test('Using href renders a link', () => {
        render(<Button href="#">Button</Button>);

        expect(screen.getByRole('link')).toBeInTheDocument();
    });

    test('Link can be disabled', () => {
        render(
            <Button href="#" disabled>
                Button
            </Button>
        );

        expect(screen.getByRole('link').getAttribute('aria-disabled')).toBe('true');
    });

    test('Link can be disabled', () => {
        render(
            <Button href="#" disabled>
                Button
            </Button>
        );

        expect(screen.getByRole('link').getAttribute('aria-disabled')).toBe('true');
    });

    test('Color variant', () => {
        render(<Button color="primary">Button</Button>);

        expect(screen.getByRole('button')).toHaveClass('btn--clr-primary');
    });

    test('Block variant', () => {
        render(<Button block>Button</Button>);

        expect(screen.getByRole('button')).toHaveClass('btn--block');
    });

    test('Size variant', () => {
        render(<Button size="s">Button</Button>);

        expect(screen.getByRole('button')).toHaveClass('btn--s');
    });

    test('Outline variant', () => {
        render(
            <Button color="primary" btnStyle="outline">
                Button
            </Button>
        );

        expect(screen.getByRole('button')).toHaveClass('btn--outline-primary');
        expect(screen.getByRole('button')).not.toHaveClass('btn--clr-primary');
    });
});
