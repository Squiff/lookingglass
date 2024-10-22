import React, { Children, createContext, useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useScrollable } from '../utilities/hooks/useScrollable';
import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';

const TabContext = createContext();

/** Navigate between multiple panes of content */
function Tabs({ children, active, onChange }) {
    const ChildrenArr = Children.toArray(children);
    const tabNavRef = useRef();
    const isScrollable = useScrollable(tabNavRef);

    //  Focus is assumed visible by default and disabled onMouseDown
    //  We are not trying to replicate :focus-visible pseudo selector,
    //  but provide a modifier class that can be used like **tabs__nav--focus-visible .xyz:focus**
    const [focusVisible, setFocusVisible] = useState(true);

    const tabs = ChildrenArr.filter((c) => c.type === Tabs.Tab);
    const panels = ChildrenArr.filter((c) => c.type === Tabs.Panel);

    // default to the first tab
    let defaultTab;
    if (tabs[0]) {
        defaultTab = tabs[0].props.tabId;
    }

    const [activeTabInternal, setActiveTabInternal] = useState(defaultTab);
    const activeTabId = active ? active : activeTabInternal;

    // get active panel from id
    const activePanel = panels.filter((p) => p.props.tabId === activeTabId);

    /** if user controlled, run callback, otherwise use internal state */
    function handleTabClick(id) {
        if (active) {
            if (onChange) onChange(id);
        } else {
            setActiveTabInternal(id);
        }
    }

    function handleScrollEnd() {
        const scrollerWidth = tabNavRef.current.clientWidth;
        tabNavRef.current.scrollLeft += scrollerWidth * 0.6;
    }

    function handleScrollStart() {
        const scrollerWidth = tabNavRef.current.clientWidth;
        tabNavRef.current.scrollLeft -= scrollerWidth * 0.6;
    }

    function handleKeyDown(e) {
        switch (e.code) {
            case 'ArrowRight':
                e.preventDefault();
                focusTab('next');
                break;
            case 'ArrowLeft':
                e.preventDefault();
                focusTab('prev');
                break;
            default:
                break;
        }
    }

    function focusTab(direction) {
        const focusedTab = document.activeElement;
        if (focusedTab.classList.contains('tabs__tab') === false) return;

        setFocusVisible(true);

        switch (direction) {
            case 'next': {
                const nextTab = focusedTab.nextElementSibling;
                if (nextTab) nextTab.focus();
                break;
            }
            case 'prev': {
                const prevTab = focusedTab.previousElementSibling;
                if (prevTab) prevTab.focus();
                break;
            }
            default:
                break;
        }
    }

    function handleMouseDown() {
        setFocusVisible(false);
    }

    // reset when nav loses focus
    function handleFocusOut(e) {
        if (e.currentTarget.contains(e.relatedTarget) == false) {
            setFocusVisible(true);
        }
    }

    const navwrapperClasses = classNames({
        tabs__navwrapper: true,
        'tabs__navwrapper--scrollable': isScrollable,
    });

    const navClasses = classNames({
        tabs__nav: true,
        'tabs__nav--focus-visible': focusVisible,
    });

    const contextValue = { handleTabClick, activeTabId };

    return (
        <TabContext.Provider value={contextValue}>
            <div className="tabs">
                <div className={navwrapperClasses}>
                    <TabButton onClick={handleScrollStart} direction="prev" />
                    <div
                        className={navClasses}
                        ref={tabNavRef}
                        onKeyDown={handleKeyDown}
                        onMouseDown={handleMouseDown}
                        onBlur={handleFocusOut}
                        role="tablist"
                    >
                        {tabs}
                    </div>
                    <TabButton onClick={handleScrollEnd} direction="next" />
                </div>
                {activePanel}
            </div>
        </TabContext.Provider>
    );
}

// eslin
Tabs.Tab = ({ children, tabId }) => {
    const { handleTabClick, activeTabId } = useContext(TabContext);

    const classes = classNames({
        tabs__tab: true,
        'tabs__tab--active': tabId === activeTabId,
    });

    const tabIndex = tabId === activeTabId ? 0 : -1;

    return (
        <button
            className={classes}
            onClick={() => handleTabClick(tabId)}
            tabIndex={tabIndex}
            role="tab"
            aria-selected={tabId === activeTabId}
        >
            {children}
        </button>
    );
};

// eslint-disable-next-line no-unused-vars
Tabs.Panel = ({ children, tabId }) => {
    return (
        <div className="tabs__panel" role="tabpanel">
            {children}
        </div>
    );
};

/* used internally only */
function TabButton({ direction, ...props }) {
    const classes = classNames('tabs__scrollbtn', `tabs__scrollbtn--${direction}`);

    const icon =
        direction === 'prev' ? (
            <ChevronLeft className="tabs__scrollicon" />
        ) : (
            <ChevronRight className="tabs__scrollicon" />
        );

    return (
        <button {...props} className={classes} tabIndex="-1">
            {icon}
        </button>
    );
}

Tabs.propTypes = {
    /** The id of the currently active tab */
    active: PropTypes.any,
    /** Callback fired when a tab is clicked */
    onChange: PropTypes.func,
};

Tabs.Tab.propTypes = {
    /** The tab ID. Should match the tabId on the related Tabs.Panel */
    tabId: PropTypes.any.isRequired,
};

Tabs.Panel.propTypes = {
    /** The tab ID. Should match the tabId on the related Tabs.Tab */
    tabId: PropTypes.any.isRequired,
};

TabButton.propTypes = {
    direction: PropTypes.oneOf(['prev', 'next']),
};

Tabs.Tab.displayName = 'Tabs.Tab';
Tabs.Panel.displayName = 'Tabs.Panel';
TabButton.displayName = 'TabButton';

export default Tabs;
