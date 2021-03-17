import { useRef, useState } from 'react';
import Button from '../lib/components/Button';
import Drawer from '../lib/components/Drawer';
import Flex from '../lib/components/Flex';
import FormGroup from '../lib/components/FormGroup';
import { Input } from '../lib/components/Input';
import Label from '../lib/components/Label';
import List from '../lib/components/List';
import Lookingglass from '../lib/components/Lookingglass';
import NavBar from '../lib/components/NavBar';
import Card from '../lib/components/Card';

export const argTypes = {};
export const parameters = {
    layout: 'fullscreen',
};

const DropdownContent = () => (
    <List>
        <List.Item>
            <button>Dropdown Item 1</button>
        </List.Item>
        <List.Item>
            <button>Dropdown Item 2</button>
        </List.Item>
        <List.Item>
            <button>Dropdown Item 3</button>
        </List.Item>
        <List.Item>
            <button>Dropdown Item 4</button>
        </List.Item>
    </List>
);

const TrayContent = () => (
    <Lookingglass div paddingX="4" paddingY="2" backgroundColor="primary" color="white">
        <Flex cols="auto">
            <Lookingglass marginRight="4" marginBottom="2">
                <List>
                    <List.Item>
                        <h6>Tray List 1</h6>
                    </List.Item>
                    <List.Item>
                        <button>Dropdown Item 1</button>
                    </List.Item>
                    <List.Item>
                        <button>Dropdown Item 2</button>
                    </List.Item>
                    <List.Item>
                        <button>Dropdown Item 3</button>
                    </List.Item>
                    <List.Item>
                        <button>Dropdown Item 4</button>
                    </List.Item>
                </List>
            </Lookingglass>
            <List>
                <List.Item>
                    <h6>Tray List 2</h6>
                </List.Item>
                <List.Item>
                    <button>Dropdown Item 1</button>
                </List.Item>
                <List.Item>
                    <button>Dropdown Item 2</button>
                </List.Item>
                <List.Item>
                    <button>Dropdown Item 3</button>
                </List.Item>
                <List.Item>
                    <button>Dropdown Item 4</button>
                </List.Item>
            </List>
        </Flex>
    </Lookingglass>
);

const Logo = () => (
    <Lookingglass div fontSize="1" fontWeight="600" paddingY="2">
        LOGO
    </Lookingglass>
);

export const All = (args) => {
    // Dropdown State
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef();
    // Tray State
    const [showTray, setShowTray] = useState(false);
    // Drawer State
    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <>
            <Lookingglass backgroundColor="primary" color="white">
                <NavBar>
                    <Logo />
                    {/* wrap in a div so display: block does not interfere with Nav layout */}
                    <Lookingglass display={{ s: 'none', l: 'block' }} div>
                        <NavBar.Nav>
                            <NavBar.NavItem>
                                <a>Home</a>
                            </NavBar.NavItem>
                            <NavBar.NavItem>
                                <a>About</a>
                            </NavBar.NavItem>
                            <NavBar.NavItem>
                                <a>Services</a>
                            </NavBar.NavItem>
                            <NavBar.NavItem>
                                <a>Help</a>
                            </NavBar.NavItem>
                            <NavBar.NavItem>
                                <button
                                    onClick={() => {
                                        setShowDropdown(!showDropdown);
                                    }}
                                    ref={dropdownRef}
                                >
                                    Dropdown
                                </button>
                            </NavBar.NavItem>

                            <NavBar.Dropdown
                                show={showDropdown}
                                onClose={() => {
                                    setShowDropdown(false);
                                }}
                                targetRef={dropdownRef}
                            >
                                <DropdownContent />
                            </NavBar.Dropdown>
                        </NavBar.Nav>
                    </Lookingglass>

                    <Button
                        btnStyle="none"
                        hoverEffect="opacity"
                        className="navbar__btn"
                        onClick={() => {
                            setShowTray(!showTray);
                        }}
                    >
                        Open Tray
                    </Button>
                    <NavBar.Tray
                        show={showTray}
                        onClose={() => {
                            console.log('CLOSE TRAY');
                            setShowTray(false);
                        }}
                    >
                        <TrayContent />
                    </NavBar.Tray>
                </NavBar>
            </Lookingglass>
        </>
    );
};

// ensure Tray and dropdowns can be viewed in the docs canvas
All.decorators = [
    (Story) => (
        <div style={{ height: '300px' }}>
            <Story />
        </div>
    ),
];

All.parameters = {
    docs: { source: { type: 'code' } },
};

export const Color = (args) => (
    <>
        <NavBar>
            <Logo />
            <NavBar.Nav>
                <NavBar.NavItem>
                    <a>Link 1</a>
                </NavBar.NavItem>
                <NavBar.NavItem>
                    <a>Link 2</a>
                </NavBar.NavItem>
                <NavBar.NavItem>
                    <a>Link 3</a>
                </NavBar.NavItem>
                <NavBar.NavItem>
                    <a>Link 4</a>
                </NavBar.NavItem>
            </NavBar.Nav>
        </NavBar>

        <Lookingglass backgroundColor="primary" color="white">
            <NavBar>
                <Logo />
                <NavBar.Nav>
                    <NavBar.NavItem>
                        <a>Link 1</a>
                    </NavBar.NavItem>
                    <NavBar.NavItem>
                        <a>Link 2</a>
                    </NavBar.NavItem>
                    <NavBar.NavItem>
                        <a>Link 3</a>
                    </NavBar.NavItem>
                    <NavBar.NavItem>
                        <a>Link 4</a>
                    </NavBar.NavItem>
                </NavBar.Nav>
            </NavBar>
        </Lookingglass>

        <Lookingglass backgroundColor="primary-d3" color="white">
            <NavBar>
                <Logo />
                <NavBar.Nav>
                    <NavBar.NavItem>
                        <a>Link 1</a>
                    </NavBar.NavItem>
                    <NavBar.NavItem>
                        <a>Link 2</a>
                    </NavBar.NavItem>
                    <NavBar.NavItem>
                        <a>Link 3</a>
                    </NavBar.NavItem>
                    <NavBar.NavItem>
                        <a>Link 4</a>
                    </NavBar.NavItem>
                </NavBar.Nav>
            </NavBar>
        </Lookingglass>

        <NavBar style={{ backgroundColor: 'purple', color: 'white' }}>
            <Logo />
            <NavBar.Nav>
                <NavBar.NavItem>
                    <a>Link 1</a>
                </NavBar.NavItem>
                <NavBar.NavItem>
                    <a>Link 2</a>
                </NavBar.NavItem>
                <NavBar.NavItem>
                    <a>Link 3</a>
                </NavBar.NavItem>
                <NavBar.NavItem>
                    <a>Link 4</a>
                </NavBar.NavItem>
            </NavBar.Nav>
        </NavBar>
    </>
);

/* ---------------- Spacing ---------------- */
export const Spacing = (args) => (
    <>
        <Lookingglass backgroundColor="primary" color="white">
            <NavBar>
                <Logo />
                <NavBar.Nav>
                    <NavBar.NavItem>
                        <a>Link 1</a>
                    </NavBar.NavItem>
                    <NavBar.NavItem>
                        <a>Link 2</a>
                    </NavBar.NavItem>
                    <NavBar.NavItem>
                        <a>Link 3</a>
                    </NavBar.NavItem>
                    <NavBar.NavItem>
                        <a>Link 4</a>
                    </NavBar.NavItem>
                </NavBar.Nav>
            </NavBar>
        </Lookingglass>
        <h6>Using Margin Auto</h6>
        <Lookingglass backgroundColor="primary" color="white">
            <NavBar>
                <Logo />
                <Lookingglass marginX="auto">
                    <NavBar.Nav>
                        <NavBar.NavItem>
                            <a>Link 1</a>
                        </NavBar.NavItem>
                        <NavBar.NavItem>
                            <a>Link 2</a>
                        </NavBar.NavItem>
                        <NavBar.NavItem>
                            <a>Link 3</a>
                        </NavBar.NavItem>
                        <NavBar.NavItem>
                            <a>Link 4</a>
                        </NavBar.NavItem>
                    </NavBar.Nav>
                </Lookingglass>
            </NavBar>
        </Lookingglass>
    </>
);

export const Buttons = (args) => (
    <>
        <Lookingglass backgroundColor="primary" color="white">
            <NavBar>
                <Logo />
                <div>
                    <Button btnStyle="none">No Hover</Button>
                    <Button btnStyle="none" hoverEffect="light">
                        Light
                    </Button>
                    <Button btnStyle="none" hoverEffect="dark">
                        Dark
                    </Button>
                    <Button btnStyle="none" hoverEffect="opacity">
                        Opacity
                    </Button>
                </div>
            </NavBar>
        </Lookingglass>

        <Lookingglass backgroundColor="dark" color="white">
            <NavBar>
                <Logo />
                <div>
                    <Button btnStyle="none">No Hover</Button>
                    <Button btnStyle="none" hoverEffect="light">
                        Light
                    </Button>
                    <Button btnStyle="none" hoverEffect="dark">
                        Dark
                    </Button>
                    <Button btnStyle="none" hoverEffect="opacity">
                        Opacity
                    </Button>
                </div>
            </NavBar>
        </Lookingglass>

        <Lookingglass backgroundColor="light" color="dark">
            <NavBar>
                <Logo />
                <div>
                    <Button btnStyle="none">No Hover</Button>
                    <Button btnStyle="none" hoverEffect="light">
                        Light
                    </Button>
                    <Button btnStyle="none" hoverEffect="dark">
                        Dark
                    </Button>
                    <Button btnStyle="none" hoverEffect="opacity">
                        Opacity
                    </Button>
                </div>
            </NavBar>
        </Lookingglass>
    </>
);

/* ---------------- Breakpoints ---------------- */
export const Breakpoints = (args) => (
    <Lookingglass backgroundColor="primary" color="white">
        <NavBar>
            <Logo />
            <Lookingglass div display={{ s: 'none', m: 'block' }}>
                <NavBar.Nav>
                    <NavBar.NavItem>
                        <a>Link 1</a>
                    </NavBar.NavItem>
                    <NavBar.NavItem>
                        <a>Link 2</a>
                    </NavBar.NavItem>
                    <NavBar.NavItem>
                        <a>Link 3</a>
                    </NavBar.NavItem>
                    <NavBar.NavItem>
                        <a>Link 4</a>
                    </NavBar.NavItem>
                </NavBar.Nav>
            </Lookingglass>
        </NavBar>
    </Lookingglass>
);

/* ---------------- Dropdown ---------------- */
export const Dropdown = (args) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef();

    return (
        <Lookingglass backgroundColor="primary" color="white">
            <NavBar>
                <Logo />
                <NavBar.Nav>
                    <NavBar.NavItem>
                        <a>Link 1</a>
                    </NavBar.NavItem>
                    <NavBar.NavItem>
                        <a>Link 2</a>
                    </NavBar.NavItem>
                    <NavBar.NavItem>
                        <a>Link 3</a>
                    </NavBar.NavItem>
                    <NavBar.NavItem>
                        <button
                            onClick={() => {
                                setShowDropdown(!showDropdown);
                            }}
                            ref={dropdownRef}
                        >
                            Dropdown
                        </button>
                    </NavBar.NavItem>
                </NavBar.Nav>
                <NavBar.Dropdown
                    show={showDropdown}
                    onClose={() => {
                        setShowDropdown(false);
                    }}
                    targetRef={dropdownRef}
                >
                    <List>
                        <List.Item>
                            <h6>Actions</h6>
                        </List.Item>
                        <List.Item>
                            <button>Button 1</button>
                        </List.Item>
                        <List.Item>
                            <button>Button 2</button>
                        </List.Item>
                        <List.Item>
                            <h6>Links</h6>
                        </List.Item>
                        <List.Item>
                            <button>Link 1</button>
                        </List.Item>
                        <List.Item>
                            <button>Link 2</button>
                        </List.Item>
                        <List.Item>
                            <button>Link with longer text</button>
                        </List.Item>
                    </List>
                </NavBar.Dropdown>
            </NavBar>
        </Lookingglass>
    );
};

// ensure Tray and dropdowns can be viewed in the docs canvas
Dropdown.decorators = [
    (Story) => (
        <div style={{ height: '250px' }}>
            <Story />
        </div>
    ),
];

Dropdown.parameters = {
    docs: { source: { type: 'code' } },
};

/* ---------------- DropdownLogin ---------------- */
export const DropdownLogin = (args) => {
    const [showSignIn, setShowSignIn] = useState(false);
    const showSignInRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Lookingglass backgroundColor="primary" color="white">
            <NavBar>
                <Logo />
                <Button
                    btnStyle="none"
                    hoverEffect="light"
                    ref={showSignInRef}
                    onClick={() => {
                        setShowSignIn(!showSignIn);
                    }}
                >
                    Login
                </Button>
                <NavBar.Dropdown show={showSignIn} onClose={() => setShowSignIn(false)} targetRef={showSignInRef}>
                    <Lookingglass div paddingY="2" paddingX="2">
                        <form style={{ width: '200px' }} onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>User Name</Label>
                                <Input type="text" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" />
                            </FormGroup>
                            <FormGroup>
                                <Label> Keep Me Signed In</Label>
                                <Input type="checkbox" />
                            </FormGroup>
                            <Button color="success" block>
                                Sign In
                            </Button>
                        </form>
                    </Lookingglass>
                </NavBar.Dropdown>
            </NavBar>
        </Lookingglass>
    );
};

// ensure Tray and dropdowns can be viewed in the docs canvas
DropdownLogin.decorators = [
    (Story) => (
        <div style={{ height: '250px' }}>
            <Story />
        </div>
    ),
];

DropdownLogin.parameters = {
    docs: { source: { type: 'code' } },
};

/* ---------------- Navigation Tray ---------------- */
const TrayCard = ({ children }) => (
    <Lookingglass padding="2" div>
        <Lookingglass backgroundColor="white">
            <Card>
                <Card.Content>{children}</Card.Content>
            </Card>
        </Lookingglass>
    </Lookingglass>
);

export const Tray = (args) => {
    const [showTray, setShowTray] = useState(false);

    return (
        <Lookingglass backgroundColor="primary" color="white">
            <NavBar>
                <Logo />
                <Button
                    btnStyle="none"
                    hoverEffect="light"
                    onClick={() => {
                        setShowTray(!showTray);
                    }}
                >
                    Open Tray
                </Button>
                <NavBar.Tray
                    show={showTray}
                    onClose={() => {
                        setShowTray(false);
                    }}
                >
                    <Lookingglass padding="2" backgroundColor="primary-d1">
                        <Flex cols="auto">
                            <TrayCard>Tray Card 1</TrayCard>
                            <TrayCard>Tray Card 2</TrayCard>
                            <TrayCard>Tray Card 3</TrayCard>
                            <TrayCard>Tray Card 4</TrayCard>
                            <TrayCard>Tray Card 5</TrayCard>
                            <TrayCard>Tray Card 6</TrayCard>
                        </Flex>
                    </Lookingglass>
                </NavBar.Tray>
            </NavBar>
        </Lookingglass>
    );
};

// ensure Tray and dropdowns can be viewed in the docs canvas
Tray.decorators = [
    (Story) => (
        <div style={{ height: '250px' }}>
            <Story />
        </div>
    ),
];

Tray.parameters = {
    docs: { source: { type: 'code' } },
};

/* ---------------- Navigation Drawers ---------------- */
export const NavDrawer = (args) => {
    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <>
            <Lookingglass backgroundColor="primary" color="white">
                <NavBar>
                    <Logo />
                    <Lookingglass div display={{ s: 'none', m: 'block' }}>
                        <NavBar.Nav>
                            <NavBar.NavItem>
                                <a>Link 1</a>
                            </NavBar.NavItem>
                            <NavBar.NavItem>
                                <a>Link 2</a>
                            </NavBar.NavItem>
                            <NavBar.NavItem>
                                <a>Link 3</a>
                            </NavBar.NavItem>
                            <NavBar.NavItem>
                                <a>Link 4</a>
                            </NavBar.NavItem>
                        </NavBar.Nav>
                    </Lookingglass>
                    <Lookingglass div display={{ s: 'block', m: 'none' }}>
                        <Button
                            btnStyle="none"
                            hoverEffect="light"
                            onClick={() => {
                                setShowDrawer(!showDrawer);
                            }}
                        >
                            Open Drawer
                        </Button>
                    </Lookingglass>
                </NavBar>
            </Lookingglass>
            <Drawer
                show={showDrawer}
                onClose={() => {
                    setShowDrawer(false);
                }}
            >
                <List style={{ width: '200px' }}>
                    <List.Item>
                        <a>Link 1</a>
                    </List.Item>
                    <List.Item>
                        <a>Link 2</a>
                    </List.Item>
                    <List.Item>
                        <a>Link 3</a>
                    </List.Item>
                    <List.Item>
                        <a>Link 4</a>
                    </List.Item>
                </List>
            </Drawer>
        </>
    );
};

// ensure Tray and dropdowns can be viewed in the docs canvas
NavDrawer.decorators = [
    (Story) => (
        <div style={{ height: '250px' }}>
            <Story />
        </div>
    ),
];

NavDrawer.parameters = {
    docs: { source: { type: 'code' } },
};
