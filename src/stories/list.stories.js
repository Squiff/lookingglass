import List from '../lib/components/List';
import Lookingglass from '../lib/components/Lookingglass';

export const argTypes = {};

export const Standard = (args) => {
    return (
        <>
            <List>
                <List.Item>List Item 1</List.Item>
                <List.Item>List Item 2</List.Item>
                <List.Item>List Item 3</List.Item>
            </List>
        </>
    );
};

export const NavList = (args) => {
    return (
        <>
            <Lookingglass border="1" borderRadius="2" borderColor="light" display="inline-block" padding="0" div>
                <List style={{ width: '100px' }}>
                    <List.Item>
                        <Lookingglass marginBottom="1">
                            <h6>Actions</h6>
                        </Lookingglass>
                    </List.Item>
                    <List.Button>Button 1</List.Button>
                    <List.Button>Button 2</List.Button>
                    <List.Button>Button 3</List.Button>
                    <List.Item>
                        <hr />
                    </List.Item>
                    <List.Item>
                        <Lookingglass marginBottom="1">
                            <h6>Links</h6>
                        </Lookingglass>
                    </List.Item>
                    <List.Link>Link 1</List.Link>
                    <List.Link>Link 2</List.Link>
                    <List.Link>Link 3</List.Link>
                </List>
            </Lookingglass>
        </>
    );
};

/* ---------- Composition ------------- */
const MyListItem = ({ children, ...props }) => (
    <Lookingglass paddingX="1" paddingY="3" fontSize="1.25">
        <List.Item {...props}>{children}</List.Item>
    </Lookingglass>
);

export const Composition = (args) => {
    return (
        <List>
            <MyListItem>List Item 1</MyListItem>
            <MyListItem>List Item 2</MyListItem>
            <MyListItem>List Item 3</MyListItem>
            <MyListItem>List Item 4</MyListItem>
        </List>
    );
};
