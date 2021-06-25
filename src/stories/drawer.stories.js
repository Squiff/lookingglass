import { useState } from 'react';
import Button from '../lib/components/Button';
import Drawer from '../lib/components/Drawer';
import List from '../lib/components/List';
import CSS from '../lib/components/CSS';
import Flex from '../lib/components/Flex';
import CloseButton from '../lib/components/CloseButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faHeart,
    faEnvelope,
    faTasks,
    faCog,
    faQuestion,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

export const argTypes = {
    show: { control: null },
    onClose: {
        table: {
            category: 'Events',
        },
    },
    onClosed: {
        table: {
            category: 'Events',
        },
    },
    onOpened: {
        table: {
            category: 'Events',
        },
    },
};

/* -------- ALL PROPS ---------------- */
export const AllProps = (args) => {
    const [show, setShow] = useState(false);

    const toggleDrawer = () => setShow(!show);

    return (
        <>
            <Button block onClick={toggleDrawer} color="info" aria-expanded={show}>
                Open Drawer
            </Button>
            <Drawer {...args} show={show} onClose={toggleDrawer}>
                <DrawerContent direction={args.direction} toggleDrawer={toggleDrawer} />
            </Drawer>
        </>
    );
};

AllProps.args = {
    direction: 'left',
};

AllProps.parameters = {
    options: { showPanel: true },
    docs: {
        source: {
            type: 'code', // shows event handlers correcly in the docs
        },
    },
};

/* -------- Scrolling ---------------- */
export const Scrolling = (args) => {
    const [show, setShow] = useState(false);

    const toggleDrawer = () => setShow(!show);

    return (
        <>
            <Button block onClick={toggleDrawer} color="info" aria-expanded={show}>
                Open Drawer
            </Button>
            <Drawer direction="left" show={show} onClose={toggleDrawer}>
                <CSS div style={{ height: '150vh' }}>
                    <DrawerContent direction="left" toggleDrawer={toggleDrawer} />
                </CSS>
            </Drawer>
        </>
    );
};

Scrolling.parameters = {
    docs: {
        source: {
            type: 'code', // shows event handlers correcly in the docs
        },
    },
};

/* -------- Close Drawer ---------------- */
export const CloseDrawer = (args) => {
    const [show, setShow] = useState(false);

    const toggleDrawer = () => setShow(!show);

    return (
        <>
            <Button block onClick={toggleDrawer} color="info" aria-expanded={show}>
                Open Drawer
            </Button>
            <Drawer direction="left" show={show} closeOnClick={false} onClose={toggleDrawer}>
                <CSS div padding="3">
                    <Button block color="error" btnStyle="outline" onClick={toggleDrawer}>
                        Close Drawer
                    </Button>
                </CSS>
            </Drawer>
        </>
    );
};

CloseDrawer.parameters = {
    docs: {
        source: {
            type: 'code', // shows event handlers correcly in the docs
        },
    },
};

/* ------------ DRAWER CONTENT ---------- */
const ExampleListItem = ({ icon, text }) => {
    return (
        <>
            <List.Button>
                <CSS paddingY="2">
                    <Flex cols="auto" align="center">
                        <CSS fontSize="1" marginRight="3" textAlign="center" display="inline-block">
                            <span style={{ width: '1.5rem' }}>
                                <FontAwesomeIcon icon={icon} />
                            </span>
                        </CSS>
                        <CSS fontSize="1" fontWeight="600">
                            <span>{text}</span>
                        </CSS>
                    </Flex>
                </CSS>
            </List.Button>
        </>
    );
};

const DrawerCloseIconBtn = (props) => {
    return (
        <Flex cols="auto" justify="end">
            <CSS marginRight="2" marginTop="1" padding="1">
                <CloseButton {...props} />
            </CSS>
        </Flex>
    );
};

export const VerticalDrawerContent = ({ toggleDrawer }) => {
    return (
        <Flex
            direction="columns"
            cols="equal"
            style={{ width: '200px', minHeight: '400px', color: '#707070', height: '100%' }}
        >
            <Flex.Child cols="auto">
                <DrawerCloseIconBtn onClick={toggleDrawer} />
            </Flex.Child>
            <List>
                <ExampleListItem icon={faHome} text="Home" />
                <ExampleListItem icon={faUser} text="Profile" />
                <ExampleListItem icon={faHeart} text="Favorites" />
                <ExampleListItem icon={faEnvelope} text="Messages" />
                <ExampleListItem icon={faTasks} text="Tasks" />
            </List>
            <Flex.Child cols="auto">
                <CSS marginTop="auto" marginBottom="2">
                    <List>
                        <ExampleListItem icon={faCog} text="Settings" />
                        <ExampleListItem icon={faQuestion} text="Help" />
                    </List>
                </CSS>
            </Flex.Child>
        </Flex>
    );
};

export const HorizontalDrawerContent = () => (
    <CSS margin="auto" paddingY="3">
        <Flex style={{ maxWidth: '800px', color: '#707070' }} justify="around" cols="auto">
            <HorizontalDrawerItem icon={faHome} text="Home" />
            <HorizontalDrawerItem icon={faUser} text="Profile" />
            <HorizontalDrawerItem icon={faHeart} text="Favorites" />
            <CSS display={{ s: 'none', m: 'block' }}>
                <HorizontalDrawerItem icon={faEnvelope} text="Messages" />
            </CSS>
        </Flex>
    </CSS>
);

const HorizontalDrawerItem = ({ icon, text, className }) => {
    return (
        <CSS paddingX="3" textAlign="center" className={className}>
            <Button btnStyle="none">
                <CSS fontSize="1.5" textAlign="center" marginBottom="1" div>
                    <FontAwesomeIcon icon={icon} />
                </CSS>
                <CSS fontSize="1" fontWeight="600" textAlign="center" div>
                    {text}
                </CSS>
            </Button>
        </CSS>
    );
};

const DrawerContent = ({ direction, toggleDrawer }) => {
    if (direction === 'left' || direction === 'right') {
        return <VerticalDrawerContent toggleDrawer={toggleDrawer} />;
    } else {
        return <HorizontalDrawerContent toggleDrawer={toggleDrawer} />;
    }
};
