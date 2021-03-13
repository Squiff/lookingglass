import classNames from 'classnames';
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

NavBar.Nav.displayName = 'NavBar.Nav';

NavBar.NavItem = ({ children, ...props }) => {
    const onlyChild = React.Children.only(children);
    const mergedClasses = classNames('navbar__navitem', onlyChild.props.className);
    const child = React.cloneElement(onlyChild, { className: mergedClasses });

    return <li {...props}>{child}</li>;
};

NavBar.NavItem.displayName = 'NavBar.NavItem';

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

NavBar.Dropdown.displayName = 'NavBar.Dropdown';

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

NavBar.Tray.displayName = 'NavBar.Tray';

NavBar.Tray.defaultProps = {
    clickAway: true,
};

const trayTransitionClasses = {
    enter: 'navbar__tray--opening',
    enterActive: 'navbar__tray--open',
    enterDone: 'navbar__tray--open',
    exit: 'navbar__tray--closing',
};

export default NavBar;
