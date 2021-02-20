import React, { Children, useState } from 'react';
import PropTypes from 'prop-types';

function Tabs({ children, active, onChange }) {
    const ChildrenArr = Children.toArray(children);
    const tabs = ChildrenArr.filter((c) => c.type === Tabs.Tab);
    const panels = ChildrenArr.filter((c) => c.type === Tabs.Panel);

    let defaultTab;
    if (tabs[0]) {
        defaultTab = tabs[0].props.tabId;
    }

    // default to the first tab
    const [activeTabInternal, setActiveTabInternal] = useState(defaultTab);
    const activeTabId = active ? active : activeTabInternal;

    // get active panel from id
    let activePanel = panels.filter((p) => p.props.tabId === activeTabId);

    // pass additional props to each tab
    const newTabs = tabs.map((tab) => {
        const tabProps = {
            key: tab.props.tabId,
            activeTabId: activeTabId,
            onClick: handleTabClick,
        };

        return React.cloneElement(tab, tabProps);
    });

    function handleTabClick(id) {
        // if user controlled, run callback
        // otherwise use internal state
        if (active) {
            if (onChange) {
                onChange(id);
            }
        } else {
            setActiveTabInternal(id);
        }
    }

    return (
        <div className="tabs">
            <div className="tabs__nav">{newTabs}</div>
            {activePanel}
        </div>
    );
}

// activeTabId and onClick are injected by Tabs
Tabs.Tab = ({ children, tabId, activeTabId, onClick }) => {
    const classes = ['tabs__tab'];

    if (tabId === activeTabId) {
        classes.push('tabs__tab--active');
    }

    const classStr = classes.join(' ');

    return (
        <div className={classStr} onClick={() => onClick(tabId)}>
            {children}
        </div>
    );
};

Tabs.Panel = ({ children, tabId }) => {
    return <div className="tabs__panel">{children}</div>;
};

Tabs.propTypes = {
    tabId: PropTypes.string,
    active: PropTypes.string,
    onChange: PropTypes.func,
};

Tabs.Tab = {
    tabId: PropTypes.string,
};

Tabs.Panel = {
    tabId: PropTypes.string,
};

Tabs.Tab.displayName = 'Tabs.Tab';
Tabs.Panel.displayName = 'Tabs.Panel';

export default Tabs;
