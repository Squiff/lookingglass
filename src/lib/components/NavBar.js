import classNames from 'classnames';
import PropTypes from 'prop-types';

import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import useClickAway from '../utilities/hooks/useClickAway';
import useTransitionEnd from '../utilities/hooks/useTransitionEnd';
import Popup from './Popup';

/** The main navigation area found at the top of a page */
function NavBar({ children, className, ...props }) {
    const classes = classNames('navbar', className);

    return (
        <header className={classes} {...props}>
            {children}
        </header>
    );
}

NavBar.Nav = ({ children, className, ...props }) => {
    const classes = classNames('navbar__nav', className);

    return (
        <nav className={classes} {...props}>
            {children}
        </nav>
    );
};

NavBar.NavLink = ({ children, className, ...props }) => {
    const classes = classNames('navbar__navitem', className);

    return (
        <li>
            <a className={classes} {...props}>
                {children}
            </a>
        </li>
    );
};

NavBar.NavButton = React.forwardRef(({ children, className, dropdown, ...props }, ref) => {
    const classes = classNames('navbar__navitem', className);

    const btnContent = dropdown ? DropdownButtonContent({ children }) : children;

    return (
        <li>
            <button className={classes} {...props} ref={ref}>
                {btnContent}
            </button>
        </li>
    );
});

const DropdownButtonContent = ({ children }) => (
    <div className="navbar__dropdown-btn-content">
        {children}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            strokeWidth="1"
            stroke="currentColor"
            className="navbar__dropdown-icon"
            viewBox="0 0 16 16"
        >
            <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
        </svg>
    </div>
);

NavBar.Dropdown = ({ children, className, style, ...props }) => {
    const classes = classNames('navbar__dropdown', className);

    return (
        <>
            <Popup placement="bottom-start" {...props}>
                <div className={classes} style={style}>
                    {children}
                </div>
            </Popup>
        </>
    );
};

NavBar.Tray = ({ children, show, onClose, className, onClosed, onOpened, clickAway }) => {
    const [trayElement, setTrayElement] = useState();
    const trayRef = useRef();
    trayRef.current = trayElement;

    const transitionEnd = useTransitionEnd(trayRef);

    // click away listener
    const clickAwayActive = show && clickAway;
    useClickAway(clickAwayActive, trayElement, onClose);

    const classes = classNames('navbar__tray__content', className);

    return (
        <CSSTransition
            in={show}
            classNames={trayTransitionClasses}
            nodeRef={trayRef}
            addEndListener={transitionEnd}
            onExited={onClosed}
            onEntered={onOpened}
        >
            <div className="navbar__tray">
                <div className={classes} ref={setTrayElement}>
                    {children}
                </div>
            </div>
        </CSSTransition>
    );
};

NavBar.Tray.defaultProps = {
    clickAway: true,
};

const trayTransitionClasses = {
    enter: 'navbar__tray--opening',
    enterActive: 'navbar__tray--open',
    enterDone: 'navbar__tray--open',
    exit: 'navbar__tray--closing',
};

NavBar.Nav.displayName = 'NavBar.Nav';
NavBar.Dropdown.displayName = 'NavBar.Dropdown';
NavBar.Tray.displayName = 'NavBar.Tray';
NavBar.NavLink.displayName = 'NavBar.NavLink';
NavBar.NavButton.displayName = 'NavBar.NavButton';

NavBar.NavButton.propTypes = {
    dropdown: PropTypes.bool,
};

NavBar.Tray.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
    className: PropTypes.func,
    onClosed: PropTypes.func,
    onOpened: PropTypes.func,
    clickAway: PropTypes.bool,
};

export default NavBar;
