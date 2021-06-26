import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Alert from '../src/lib/components/Alert';

describe('<Alert>', () => {
    test('It renders an alert', () => {
        render(<Alert color="success">Test Alert</Alert>);

        expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    test('It renders children', () => {
        render(<Alert color="success">Test Alert</Alert>);

        expect(screen.getByText('Test Alert')).toBeInTheDocument();
    });

    test('It displays Heading', () => {
        render(
            <Alert color="success">
                <Alert.Header>Alert Header</Alert.Header>
            </Alert>
        );

        expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    test('It renders a close button', () => {
        render(
            <Alert color="success" closeBtn>
                Alert Content
            </Alert>
        );

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('It fires onClose callback', () => {
        const onClose = jest.fn();

        render(
            <Alert color="success" closeBtn show={true} onClose={onClose}>
                Alert Content
            </Alert>
        );

        fireEvent.click(screen.getByRole('button'));

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    test('It mounts when show is true', () => {
        render(
            <Alert color="success" show={true}>
                <Alert.Header>Alert Header</Alert.Header>
            </Alert>
        );

        expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    test('It does not mount when show is false', () => {
        render(
            <Alert color="success" show={false}>
                <Alert.Header>Alert Header</Alert.Header>
            </Alert>
        );

        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });

    test('It mounts when show false -> true', () => {
        const { rerender } = render(
            <Alert color="success" show={false}>
                Alert Content
            </Alert>
        );

        expect(screen.queryByRole('alert')).not.toBeInTheDocument();

        rerender(
            <Alert color="success" show={true}>
                Alert Content
            </Alert>
        );

        expect(screen.queryByRole('alert')).toBeInTheDocument();
    });

    test('It unmounts after transition when show true -> false', async () => {
        const { rerender } = render(
            <Alert color="success" show={true}>
                Alert Content
            </Alert>
        );

        expect(screen.queryByRole('alert')).toBeInTheDocument();

        rerender(
            <Alert color="success" show={false}>
                Alert Content
            </Alert>
        );

        expect(screen.queryByRole('alert')).toBeInTheDocument();

        fireEvent.transitionEnd(screen.queryByRole('alert'));

        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });

    test('It Fires onClosed Callbacks', async () => {
        const onClosed = jest.fn();

        const { rerender } = render(
            <Alert color="success" show={true} onClosed={onClosed}>
                Alert Content
            </Alert>
        );

        rerender(
            <Alert color="success" show={false} onClosed={onClosed}>
                Alert Content
            </Alert>
        );

        expect(screen.queryByRole('alert')).toBeInTheDocument();

        fireEvent.transitionEnd(screen.queryByRole('alert'));

        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
        expect(onClosed).toHaveBeenCalledTimes(1);
    });

    test('It Fires onOpened Callbacks', async () => {
        const onOpened = jest.fn();

        const { rerender } = render(
            <Alert color="success" show={false} onOpened={onOpened}>
                Alert Content
            </Alert>
        );

        rerender(
            <Alert color="success" show={true} onOpened={onOpened}>
                Alert Content
            </Alert>
        );

        expect(screen.queryByRole('alert')).toBeInTheDocument();
        expect(onOpened).toHaveBeenCalledTimes(0);

        fireEvent.transitionEnd(screen.queryByRole('alert'));

        expect(onOpened).toHaveBeenCalledTimes(1);
    });

    test('It merges classes', () => {
        render(
            <Alert color="success" className="testClass">
                Alert Content
            </Alert>
        );

        expect(screen.getByRole('alert')).toHaveClass('alert');
        expect(screen.getByRole('alert')).toHaveClass('testClass');
    });

    test('It forwards props', () => {
        render(
            <Alert color="success" id="test-alert">
                Alert Content
            </Alert>
        );

        expect(screen.getByRole('alert').id).toBe('test-alert');
    });
});
