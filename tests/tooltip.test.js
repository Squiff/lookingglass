import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tooltip from '../src/lib/components/Tooltip';
import React from 'react';

afterEach(() => {
    jest.useRealTimers();
});

describe('<Tooltip>', () => {
    test('It shows tooltip', async () => {
        const targetRef = React.createRef();

        render(
            <>
                <div data-testid="target" ref={targetRef}>
                    Target
                </div>
                <Tooltip show={true} targetRef={targetRef}>
                    <div>Popup Content</div>
                </Tooltip>
            </>
        );

        // wait for popper side effects
        await act(async () => await null);

        expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });

    test('It does not show tooltip', async () => {
        const targetRef = React.createRef();

        render(
            <>
                <div data-testid="target" ref={targetRef}>
                    Target
                </div>
                <Tooltip show={false} targetRef={targetRef}>
                    <div>Popup Content</div>
                </Tooltip>
            </>
        );

        // wait for popper side effects
        await act(async () => await null);

        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });

    test('It shows on hover', async () => {
        jest.useFakeTimers();

        const targetRef = React.createRef();

        render(
            <>
                <div data-testid="target" ref={targetRef}>
                    Target
                </div>
                <Tooltip targetRef={targetRef} trigger="hover" triggerDelay={500}>
                    <div>Popup Content</div>
                </Tooltip>
            </>
        );

        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        userEvent.hover(screen.getByText('Target'));

        act(() => jest.advanceTimersByTime(500));
        await act(async () => await null); // wait for popper side effects

        expect(screen.queryByRole('tooltip')).toBeInTheDocument();
    });

    test('It shows on focus', async () => {
        jest.useFakeTimers();

        const targetRef = React.createRef();

        render(
            <>
                <div data-testid="target" ref={targetRef}>
                    Target
                </div>
                <Tooltip targetRef={targetRef} trigger="focus" triggerDelay={500}>
                    <div>Popup Content</div>
                </Tooltip>
            </>
        );

        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        fireEvent.focus(screen.getByText('Target'));

        act(() => jest.advanceTimersByTime(500));
        await act(async () => await null); // wait for popper side effects

        expect(screen.queryByRole('tooltip')).toBeInTheDocument();
    });

    test('It merges classes', async () => {
        const targetRef = React.createRef();

        render(
            <>
                <div data-testid="target" ref={targetRef}>
                    Target
                </div>
                <Tooltip show={true} targetRef={targetRef} className="tooltip-test">
                    <div>Popup Content</div>
                </Tooltip>
            </>
        );

        // wait for popper side effects
        await act(async () => await null);

        expect(screen.getByRole('tooltip')).toHaveClass('tooltip-test');
    });
});
