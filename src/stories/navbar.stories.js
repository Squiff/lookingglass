import { useRef, useState } from 'react';
import Button from '../lib/components/Button';
import Drawer from '../lib/components/Drawer';
import Flex from '../lib/components/Flex';
import FormGroup from '../lib/components/FormGroup';
import { Input } from '../lib/components/Input';
import Label from '../lib/components/Label';
import List from '../lib/components/List';
import Lookingglass from '../lib/components/Lookingglass';
import SideScroller from '../lib/components/SideScroller';
import NavBar from '../lib/components/NavBar';
import Card from '../lib/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const argTypes = {};
export const parameters = {
    layout: 'fullscreen',
};

const DropdownContent = () => (
    <List>
        <DropdownItem>Dropdown Item 1</DropdownItem>
        <DropdownItem>Dropdown Item 2</DropdownItem>
        <DropdownItem>Dropdown Item 3</DropdownItem>
        <DropdownItem>Dropdown Item 4</DropdownItem>
    </List>
);

const DropdownItem = ({ children, ...props }) => (
    <Lookingglass paddingX="3" paddingY="2" fontSize="0.875">
        <List.Button {...props}>{children}</List.Button>
    </Lookingglass>
);

const TrayContent = () => (
    <Lookingglass div paddingX="4" paddingY="2" paddingTop="4" marginBottom="2">
        {/* <h6>Additional Items</h6> */}
        <Flex cols="auto">
            <List>
                <TrayItem>Additional Item 1</TrayItem>
                <TrayItem>Additional Item 2</TrayItem>
                <TrayItem>Additional Item 3</TrayItem>
                <TrayItem>Additional Item 4</TrayItem>
            </List>

            <List>
                <TrayItem>Additional Item 5</TrayItem>
                <TrayItem>Additional Item 6</TrayItem>
                <TrayItem>Additional Item 7</TrayItem>
                <TrayItem>Additional Item 8</TrayItem>
            </List>

            <List>
                <TrayItem>Additional Item 9</TrayItem>
                <TrayItem>Additional Item 10</TrayItem>
                <TrayItem>Additional Item 11</TrayItem>
                <TrayItem>Additional Item 12</TrayItem>
            </List>
        </Flex>
    </Lookingglass>
);

const TrayItem = ({ children }) => (
    <Lookingglass paddingX="4" fontSize="0.875">
        <List.Button>{children}</List.Button>
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

    return (
        <>
            {/* <Lookingglass backgroundColor="primary" color="white"> */}
            <NavBar>
                <Logo />
                <Lookingglass display={{ s: 'none', l: 'block' }} div>
                    <NavBar.Nav>
                        <NavBar.NavLink>Home</NavBar.NavLink>
                        <NavBar.NavLink>About</NavBar.NavLink>
                        <NavBar.NavLink>Services</NavBar.NavLink>
                        <NavBar.NavLink>Help</NavBar.NavLink>
                        <NavBar.NavButton
                            onClick={() => {
                                setShowDropdown(!showDropdown);
                            }}
                            ref={dropdownRef}
                            aria-expanded={showDropdown}
                            dropdown
                        >
                            Dropdown
                        </NavBar.NavButton>

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
                    hoverEffect="dark"
                    className="navbar__btn"
                    onClick={() => {
                        setShowTray(!showTray);
                    }}
                    aria-expanded={showTray}
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
            {/* </Lookingglass> */}
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
                <NavBar.NavLink>Link 1</NavBar.NavLink>
                <NavBar.NavLink>Link 2</NavBar.NavLink>
                <NavBar.NavLink>Link 3</NavBar.NavLink>
                <NavBar.NavLink>Link 4</NavBar.NavLink>
            </NavBar.Nav>
        </NavBar>

        <Lookingglass backgroundColor="primary" color="white">
            <NavBar>
                <Logo />
                <NavBar.Nav>
                    <NavBar.NavLink>Link 1</NavBar.NavLink>
                    <NavBar.NavLink>Link 2</NavBar.NavLink>
                    <NavBar.NavLink>Link 3</NavBar.NavLink>
                    <NavBar.NavLink>Link 4</NavBar.NavLink>
                </NavBar.Nav>
            </NavBar>
        </Lookingglass>

        <Lookingglass backgroundColor="primary-d3" color="white">
            <NavBar>
                <Logo />
                <NavBar.Nav>
                    <NavBar.NavLink>
                        <a>Link 1</a>
                    </NavBar.NavLink>
                    <NavBar.NavLink>
                        <a>Link 2</a>
                    </NavBar.NavLink>
                    <NavBar.NavLink>
                        <a>Link 3</a>
                    </NavBar.NavLink>
                    <NavBar.NavLink>
                        <a>Link 4</a>
                    </NavBar.NavLink>
                </NavBar.Nav>
            </NavBar>
        </Lookingglass>

        <NavBar style={{ backgroundColor: 'purple', color: 'white' }}>
            <Logo />
            <NavBar.Nav>
                <NavBar.NavLink>
                    <a>Link 1</a>
                </NavBar.NavLink>
                <NavBar.NavLink>
                    <a>Link 2</a>
                </NavBar.NavLink>
                <NavBar.NavLink>
                    <a>Link 3</a>
                </NavBar.NavLink>
                <NavBar.NavLink>
                    <a>Link 4</a>
                </NavBar.NavLink>
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
                    <NavBar.NavLink>Link 1</NavBar.NavLink>
                    <NavBar.NavLink>Link 2</NavBar.NavLink>
                    <NavBar.NavLink>Link 3</NavBar.NavLink>
                    <NavBar.NavLink>Link 4</NavBar.NavLink>
                </NavBar.Nav>
            </NavBar>
        </Lookingglass>
        <h6>Using Margin Auto</h6>
        <Lookingglass backgroundColor="primary" color="white">
            <NavBar>
                <Logo />
                <Lookingglass marginX="auto">
                    <NavBar.Nav>
                        <NavBar.NavLink>Link 1</NavBar.NavLink>
                        <NavBar.NavLink>Link 2</NavBar.NavLink>
                        <NavBar.NavLink>Link 3</NavBar.NavLink>
                        <NavBar.NavLink>Link 4</NavBar.NavLink>
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
                    <NavBar.NavLink>Link 1</NavBar.NavLink>
                    <NavBar.NavLink>Link 2</NavBar.NavLink>
                    <NavBar.NavLink>Link 3</NavBar.NavLink>
                    <NavBar.NavLink>Link 4</NavBar.NavLink>
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
                    <NavBar.NavLink>
                        <a>Link 1</a>
                    </NavBar.NavLink>
                    <NavBar.NavLink>
                        <a>Link 2</a>
                    </NavBar.NavLink>
                    <NavBar.NavLink>
                        <a>Link 3</a>
                    </NavBar.NavLink>
                    <NavBar.NavButton
                        onClick={() => {
                            setShowDropdown(!showDropdown);
                        }}
                        ref={dropdownRef}
                        aria-expanded={showDropdown}
                        dropdown
                    >
                        Dropdown
                    </NavBar.NavButton>
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
                            <Lookingglass margin="0" marginTop="2">
                                <h6>Actions</h6>
                            </Lookingglass>
                        </List.Item>
                        <List.Button>Button 1</List.Button>
                        <List.Button>Button 2</List.Button>
                        <List.Item>
                            <Lookingglass margin="0" marginTop="2">
                                <h6>Links</h6>
                            </Lookingglass>
                        </List.Item>
                        <List.Link>Link 1</List.Link>
                        <List.Link>Link 2</List.Link>
                        <List.Link>Link with longer text</List.Link>
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
    const signInRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Lookingglass backgroundColor="primary" color="white">
            <NavBar>
                <Logo />
                <Lookingglass fontWeight="600">
                    <Button
                        btnStyle="none"
                        hoverEffect="light"
                        ref={signInRef}
                        onClick={() => {
                            setShowSignIn(!showSignIn);
                        }}
                        aria-expanded={showSignIn}
                    >
                        Login
                    </Button>
                </Lookingglass>
                <NavBar.Dropdown
                    show={showSignIn}
                    onClose={() => setShowSignIn(false)}
                    targetRef={signInRef}
                >
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
    <Lookingglass backgroundColor="primary-d2" color="white" marginX="2">
        <Card>
            <Lookingglass padding="2" fontSize="0.875" fontWeight="600" textAlign="center">
                <Card.Content>{children}</Card.Content>
            </Lookingglass>
        </Card>
    </Lookingglass>
);

export const Tray = (args) => {
    const [showTray, setShowTray] = useState(false);

    return (
        <Lookingglass backgroundColor="primary" color="white">
            <NavBar>
                <Logo />
                <Lookingglass fontWeight="600">
                    <Button
                        btnStyle="none"
                        hoverEffect="light"
                        onClick={() => {
                            setShowTray(!showTray);
                        }}
                        aria-expanded={showTray}
                    >
                        Open Tray
                    </Button>
                </Lookingglass>
                <NavBar.Tray
                    show={showTray}
                    onClose={() => {
                        setShowTray(false);
                    }}
                >
                    <Lookingglass div padding="2" backgroundColor="primary">
                        <SideScroller scrollFactor={0.4}>
                            <Flex wrap="nowrap" cols={{ l: 8, m: 6, s: 3 }}>
                                <TrayCard>Tray Card 1</TrayCard>
                                <TrayCard>Tray Card 2</TrayCard>
                                <TrayCard>Tray Card 3</TrayCard>
                                <TrayCard>Tray Card 4</TrayCard>
                                <TrayCard>Tray Card 5</TrayCard>
                                <TrayCard>Tray Card 6</TrayCard>
                                <TrayCard>Tray Card 7</TrayCard>
                                <TrayCard>Tray Card 8</TrayCard>
                                <TrayCard>Tray Card 9</TrayCard>
                                <TrayCard>Tray Card 10</TrayCard>
                                <TrayCard>Tray Card 11</TrayCard>
                                <TrayCard>Tray Card 12</TrayCard>
                            </Flex>
                        </SideScroller>
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
                            <NavBar.NavLink>
                                <a>Link 1</a>
                            </NavBar.NavLink>
                            <NavBar.NavLink>
                                <a>Link 2</a>
                            </NavBar.NavLink>
                            <NavBar.NavLink>
                                <a>Link 3</a>
                            </NavBar.NavLink>
                            <NavBar.NavLink>
                                <a>Link 4</a>
                            </NavBar.NavLink>
                        </NavBar.Nav>
                    </Lookingglass>
                    <Lookingglass div display={{ s: 'block', m: 'none' }}>
                        <Button
                            btnStyle="none"
                            hoverEffect="light"
                            onClick={() => {
                                setShowDrawer(!showDrawer);
                            }}
                            aria-expanded={showDrawer}
                            aria-label="toggle navigation"
                        >
                            <Lookingglass fontSize="1">
                                <FontAwesomeIcon icon={faBars} />
                            </Lookingglass>
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
                    <List.Link>Link 1</List.Link>
                    <List.Link>Link 2</List.Link>
                    <List.Link>Link 3</List.Link>
                    <List.Link>Link 4</List.Link>
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
