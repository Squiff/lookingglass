import { render, screen, waitFor, act, fireEvent } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import Popup from '../src/lib/components/Popup';

// Note on await act(async () => await null);
// react-popper schedules update asyncronously
// This forces the microtask queue to be flushed and act() to wait
// for any subsequent rerenders due to resolved promises
// https://github.com/popperjs/react-popper/issues/350

describe('<Popup>', () => {
    test('It renders content', async () => {
        const targetRef = React.createRef();

        render(
            <>
                <div data-testid="target" ref={targetRef}>
                    Target
                </div>
                <Popup show={true} targetRef={targetRef}>
                    <div>Popup Content</div>
                </Popup>
            </>
        );

        await act(async () => await null);

        const content = screen.getByText('Popup Content');
        expect(content).toBeInTheDocument();
    });

    test('It does not render content', async () => {
        const targetRef = React.createRef();

        render(
            <>
                <div data-testid="target" ref={targetRef}>
                    Target
                </div>
                <Popup show={false} targetRef={targetRef}>
                    <div>Popup Content</div>
                </Popup>
            </>
        );

        await act(async () => await null);

        expect(screen.queryByText('Popup Content')).not.toBeInTheDocument();
    });

    test('It handles ESC Key', async () => {
        const targetRef = React.createRef();
        const onClose = jest.fn();

        render(
            <>
                <div data-testid="target" ref={targetRef}>
                    Target
                </div>
                <Popup show={true} targetRef={targetRef} onClose={onClose}>
                    <div>Popup Content</div>
                </Popup>
            </>
        );

        await act(async () => await null);

        fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

        expect(onClose).toBeCalledTimes(1);
    });

    test('It handles click away', async () => {
        const targetRef = React.createRef();
        const onClose = jest.fn();

        render(
            <>
                <div data-testid="target" ref={targetRef}>
                    Target
                </div>
                <Popup show={true} targetRef={targetRef} onClose={onClose}>
                    <div>Popup Content</div>
                </Popup>
            </>
        );

        await act(async () => await null);

        fireEvent.click(screen.getByTestId('target'));

        expect(onClose).toBeCalledTimes(1);
    });

    test('It ignores click away', async () => {
        const targetRef = React.createRef();
        const onClose = jest.fn();

        render(
            <>
                <div data-testid="target" ref={targetRef}>
                    Target
                </div>
                <Popup show={true} targetRef={targetRef} onClose={onClose} clickAway={false}>
                    <div>Popup Content</div>
                </Popup>
            </>
        );

        await act(async () => await null);

        fireEvent.click(screen.getByTestId('target'));

        expect(onClose).toBeCalledTimes(0);
    });

    test('It does not close when popup is clicked', async () => {
        const targetRef = React.createRef();
        const onClose = jest.fn();

        render(
            <>
                <div data-testid="target" ref={targetRef}>
                    Target
                </div>
                <Popup show={true} targetRef={targetRef} onClose={onClose}>
                    <div>Popup Content</div>
                </Popup>
            </>
        );

        await act(async () => await null);

        fireEvent.click(screen.getByText('Popup Content'));

        expect(onClose).toBeCalledTimes(0);
    });
});
