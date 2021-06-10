import React, { Children, createContext, useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useScrollable } from '../utilities/hooks/useScrollable';

const TabContext = createContext();

/** Navigate between multiple panes of content. Tabs have opinionated styling applied. */
function Tabs({ children, active, onChange }) {
    const ChildrenArr = Children.toArray(children);
    const tabs = ChildrenArr.filter((c) => c.type === Tabs.Tab);
    const panels = ChildrenArr.filter((c) => c.type === Tabs.Panel);

    const tabNavRef = useRef();
    const isScrollable = useScrollable(tabNavRef);

    let defaultTab;
    if (tabs[0]) {
        defaultTab = tabs[0].props.tabId;
    }

    // default to the first tab
    const [activeTabInternal, setActiveTabInternal] = useState(defaultTab);
    const activeTabId = active ? active : activeTabInternal;

    // get active panel from id
    let activePanel = panels.filter((p) => p.props.tabId === activeTabId);

    function handleTabClick(id) {
        // if user controlled, run callback
        // otherwise use internal state
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
            default:
                break;
        }
    }

    /* direction: next/prev */
    function focusTab(direction) {
        // get active tab
        const focusedTab = document.activeElement;
        if (focusedTab.classList.contains('tabs__tab') === false) return;

        switch (direction) {
            case 'next':
                const nextTab = focusedTab.nextElementSibling;
                if (nextTab) nextTab.focus();
                break;
            case 'prev':
                const prevTab = focusedTab.previousElementSibling;
                if (prevTab) prevTab.focus();
            default:
                break;
        }
    }

    const navwrapperClasses = classNames({
        tabs__navwrapper: true,
        'tabs__navwrapper--scrollable': isScrollable,
    });

    const contextValue = { handleTabClick, activeTabId };

    return (
        <TabContext.Provider value={contextValue}>
            <div className="tabs">
                <div className={navwrapperClasses}>
                    <TabButton onClick={handleScrollStart} direction="prev" />
                    <div
                        className="tabs__nav"
                        ref={tabNavRef}
                        onKeyDown={handleKeyDown}
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

    const icon = direction === 'prev' ? <PrevIcon /> : <NextIcon />;

    return (
        <button {...props} className={classes} tabIndex="-1">
            {icon}
        </button>
    );
}

function NextIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            width="24px"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="tabs__scrollicon"
        >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
        </svg>
    );
}

function PrevIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            width="24px"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="tabs__scrollicon"
        >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
        </svg>
    );
}

Tabs.propTypes = {
    /** The id of the currently active tab */
    active: PropTypes.any,
    /** Callback fired when a tab is clicked */
    onChange: PropTypes.func,
};

Tabs.Tab.propTypes = {
    tabId: PropTypes.any.isRequired,
};

Tabs.Panel.propTypes = {
    tabId: PropTypes.any.isRequired,
};

Tabs.Tab.displayName = 'Tabs.Tab';
Tabs.Panel.displayName = 'Tabs.Panel';

export default Tabs;
