import { fireEvent, render, screen } from '@testing-library/react';
import { CSSTransition } from 'react-transition-group';
import NavBar from '../src/lib/components/NavBar';
import React from 'react';

jest.mock('react-transition-group', () => {
    const MockCSSTransition = jest.fn((props) => {
        return props.in ? <>{props.children}</> : null;
    });

    return { CSSTransition: MockCSSTransition };
});

describe('<NavBar>', () => {
    test('It renders a nav', () => {
        render(
            <NavBar>
                <NavBar.Nav>
                    <NavBar.NavLink href="#">Link 1</NavBar.NavLink>
                    <NavBar.NavLink href="#">Link 2</NavBar.NavLink>
                    <NavBar.NavLink href="#">Link 3</NavBar.NavLink>
                </NavBar.Nav>
            </NavBar>
        );

        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.getAllByRole('link')).toHaveLength(3);
    });

    test('It renders buttons', () => {
        render(
            <NavBar>
                <NavBar.Nav>
                    <NavBar.NavButton>Button 1</NavBar.NavButton>
                    <NavBar.NavButton>Button 2</NavBar.NavButton>
                    <NavBar.NavButton>Button 3</NavBar.NavButton>
                </NavBar.Nav>
            </NavBar>
        );

        expect(screen.getAllByRole('button')).toHaveLength(3);
    });

    test('It handles button click', () => {
        const onClick = jest.fn();

        render(
            <NavBar>
                <NavBar.Nav>
                    <NavBar.NavButton onClick={onClick}>Button 1</NavBar.NavButton>
                </NavBar.Nav>
            </NavBar>
        );

        fireEvent.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test('It displays dropdown content', async () => {
        const onClick = jest.fn();
        const dropdownRef = React.createRef();

        render(
            <NavBar>
                <NavBar.Nav>
                    <NavBar.NavButton onClick={onClick} ref={dropdownRef} dropdown>
                        <NavBar.Dropdown show={true} targetRef={dropdownRef}>
                            <div data-testid="dropdown-content">NavBar Dropdown Content</div>
                        </NavBar.Dropdown>
                    </NavBar.NavButton>
                </NavBar.Nav>
            </NavBar>
        );

        // popup rerenders after mounting. Wait for content
        const content = await screen.findByTestId('dropdown-content');
        expect(content).toBeInTheDocument();
    });

    test('Tray passes props to CSSTransition', async () => {
        const onClosed = jest.fn();
        const onOpened = jest.fn();

        render(
            <NavBar>
                <NavBar.Tray show={true} onClosed={onClosed} onOpened={onOpened}>
                    <div>Tray Content</div>
                </NavBar.Tray>
            </NavBar>
        );

        const CSSTransitionProps = CSSTransition.mock.calls[0][0];

        CSSTransitionProps.onExited();
        CSSTransitionProps.onEntered();
        expect(CSSTransitionProps.in).toBe(true);
        expect(onClosed).toBeCalledTimes(1);
        expect(onOpened).toBeCalledTimes(1);
    });

    test('It merges classes', async () => {
        render(
            <NavBar className="navbar-test" data-testid="navbar">
                <NavBar.Tray show={true}>
                    <div>Tray Content</div>
                </NavBar.Tray>
            </NavBar>
        );

        expect(screen.getByTestId('navbar')).toHaveClass('navbar-test');
    });
});
