import { fireEvent, render, screen, act } from '@testing-library/react';
import Notification from '../src/lib/components/Notification';

/** Notification Animation Helper */
function completeAnimation(element) {
    fireEvent.animationEnd(element);
    jest.runAllTimers();
}

afterEach(() => {
    jest.useRealTimers();
});

describe('<Notification>', () => {
    test('It renders a notification', () => {
        render(
            <Notification.Group>
                <Notification>
                    <Notification.Header>Information</Notification.Header>
                    <Notification.Body>Notification Body</Notification.Body>
                </Notification>
            </Notification.Group>
        );

        expect(screen.getByText('Information')).toBeInTheDocument();
    });

    test('It does not render anything', () => {
        render(<Notification.Group data-testid="notification-test"></Notification.Group>);

        expect(screen.queryByTestId('notification-test')).not.toBeInTheDocument();
    });

    test('It renders a close button', () => {
        render(
            <Notification.Group>
                <Notification>
                    <Notification.Header>Information</Notification.Header>
                    <Notification.Body>Notification Body</Notification.Body>
                </Notification>
            </Notification.Group>
        );

        expect(screen.getByRole('button', { name: 'close' })).toBeInTheDocument();
    });

    test('It does not render a close button', () => {
        render(
            <Notification.Group>
                <Notification closeBtn={false}>
                    <Notification.Header>Information</Notification.Header>
                    <Notification.Body>Notification Body</Notification.Body>
                </Notification>
            </Notification.Group>
        );

        expect(screen.queryByRole('button', { name: 'close' })).not.toBeInTheDocument();
    });

    test('It limits notifications', () => {
        render(
            <Notification.Group limit={3}>
                {[1, 2, 3, 4, 5].map((i) => (
                    <Notification key={i}>
                        <Notification.Header>Header {i}</Notification.Header>
                        <Notification.Body>Notification Body {i}</Notification.Body>
                    </Notification>
                ))}
            </Notification.Group>
        );

        expect(screen.getByText('Header 1')).toBeInTheDocument();
        expect(screen.getByText('Header 2')).toBeInTheDocument();
        expect(screen.getByText('Header 3')).toBeInTheDocument();
        expect(screen.queryByText('Header 4')).not.toBeInTheDocument();
        expect(screen.queryByText('Header 5')).not.toBeInTheDocument();
    });

    test('It closes when clicking close', () => {
        jest.useFakeTimers();

        render(
            <Notification.Group limit={1}>
                <Notification data-testid="notification" autoDismiss={0}>
                    <Notification.Header>Header</Notification.Header>
                    <Notification.Body>Notification Body</Notification.Body>
                </Notification>
            </Notification.Group>
        );

        fireEvent.click(screen.getByLabelText('close'));

        // animation, then collapse timer
        fireEvent.animationEnd(screen.queryByTestId('notification'));
        act(() => jest.runAllTimers());

        expect(screen.queryByTestId('notification')).not.toBeInTheDocument();
    });

    test('It is auto dismissed', () => {
        jest.useFakeTimers();

        render(
            <Notification.Group limit={1}>
                <Notification data-testid="notification" autoDismiss={2000}>
                    <Notification.Header>Header</Notification.Header>
                    <Notification.Body>Notification Body</Notification.Body>
                </Notification>
            </Notification.Group>
        );

        act(() => jest.advanceTimersByTime(2000));

        // animation, then collapse timer
        fireEvent.animationEnd(screen.queryByTestId('notification'));
        act(() => jest.runAllTimers());

        expect(screen.queryByTestId('notification')).not.toBeInTheDocument();
    });

    test('It is not auto dismissed', () => {
        jest.useFakeTimers();

        render(
            <Notification.Group limit={1}>
                <Notification data-testid="notification" autoDismiss={0}>
                    <Notification.Header>Header</Notification.Header>
                    <Notification.Body>Notification Body</Notification.Body>
                </Notification>
            </Notification.Group>
        );

        act(() => jest.advanceTimersByTime(2000));

        // animation, then collapse timer
        fireEvent.animationEnd(screen.queryByTestId('notification'));
        act(() => jest.runAllTimers());

        expect(screen.queryByTestId('notification')).toBeInTheDocument();
    });

    test('It fires callbacks', () => {
        jest.useFakeTimers();

        const onOpened = jest.fn();
        const onClosed = jest.fn();

        render(
            <Notification.Group limit={1}>
                <Notification
                    data-testid="notification"
                    autoDismiss={2000}
                    onOpened={onOpened}
                    onClosed={onClosed}
                >
                    <Notification.Header>Header</Notification.Header>
                    <Notification.Body>Notification Body</Notification.Body>
                </Notification>
            </Notification.Group>
        );

        // animation open
        fireEvent.animationEnd(screen.queryByTestId('notification'));
        expect(onOpened).toBeCalledTimes(1);

        fireEvent.click(screen.getByLabelText('close'));

        // animation, then collapse timer
        fireEvent.animationEnd(screen.queryByTestId('notification'));
        act(() => jest.runAllTimers());
        expect(onClosed).toBeCalledTimes(1);
    });
});
