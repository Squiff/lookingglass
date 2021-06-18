import { fireEvent, render, screen } from '@testing-library/react';
import { CSSTransition } from 'react-transition-group';
import Modal from '../src/lib/components/Modal';
import Overlay from '../src/lib/components/Overlay';

jest.mock('react-transition-group', () => {
    const MockCSSTransition = jest.fn((props) => {
        return props.in ? <>{props.children}</> : null;
    });

    return { CSSTransition: MockCSSTransition };
});

jest.mock('../src/lib/components/Overlay', () => {
    const Overlay = jest.fn((props) => {
        return props.show ? <>{props.children}</> : null;
    });

    return Overlay;
});

// reset mock before each test
afterEach(() => {
    CSSTransition.mockClear();
    Overlay.mockClear();
});

describe('<Drawer>', () => {
    test('It renders children', () => {
        render(<Modal show={true}>Modal Content</Modal>);

        expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    test('It does not render', () => {
        render(<Modal show={false}>Modal Content</Modal>);

        expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
    });

    test('It forwards props', () => {
        render(
            <Modal show={true} data-testid="modal">
                Drawer Content
            </Modal>
        );

        expect(screen.getByTestId('modal')).toBeInTheDocument();
    });

    test('It forwards onClose to Overlay', () => {
        const onClose = jest.fn();

        render(
            <Modal show={true} onClose={onClose} closeOnClick={false}>
                Modal Content
            </Modal>
        );

        const OverlayProps = Overlay.mock.calls[0][0];

        OverlayProps.onClose();
        expect(onClose).toBeCalledTimes(1);
        expect(OverlayProps.closeOnClick).toBe(false);
    });

    test('It delegates callbacks to CSSTransition', () => {
        const onClosed = jest.fn();
        const onOpened = jest.fn();

        render(
            <Modal show={true} onClosed={onClosed} onOpened={onOpened}>
                Drawer Content
            </Modal>
        );

        const CSSTransitionProps = CSSTransition.mock.calls[0][0];

        CSSTransitionProps.onExited();
        CSSTransitionProps.onEntered();
        expect(onClosed).toBeCalledTimes(1);
        expect(onOpened).toBeCalledTimes(1);
    });
});
