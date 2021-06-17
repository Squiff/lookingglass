import { fireEvent, render, screen } from '@testing-library/react';
import { CSSTransition } from 'react-transition-group';
import Drawer from '../src/lib/components/Drawer';
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
        render(<Drawer show={true}>Drawer Content</Drawer>);

        expect(screen.getByText('Drawer Content')).toBeInTheDocument();
    });

    test('It does not render', () => {
        render(<Drawer show={false}>Drawer Content</Drawer>);

        expect(screen.queryByText('Drawer Content')).not.toBeInTheDocument();
    });

    test('It forwards props to Overlay', () => {
        const onClose = jest.fn();

        render(
            <Drawer show={true} onClose={onClose} closeOnClick={false}>
                Drawer Content
            </Drawer>
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
            <Drawer show={true} onClosed={onClosed} onOpened={onOpened}>
                Drawer Content
            </Drawer>
        );

        const CSSTransitionProps = CSSTransition.mock.calls[0][0];

        CSSTransitionProps.onExited();
        CSSTransitionProps.onEntered();
        expect(onClosed).toBeCalledTimes(1);
        expect(onOpened).toBeCalledTimes(1);
    });
});
