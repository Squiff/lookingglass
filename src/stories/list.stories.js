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
                        <button>Button 3</button>
                    </List.Item>
                    <List.Item>
                        <div>
                            <hr />
                        </div>
                    </List.Item>
                    <List.Item>
                        <h6>Links</h6>
                    </List.Item>
                    <List.Item>
                        <a>Link 1</a>
                    </List.Item>
                    <List.Item>
                        <a>Link 2</a>
                    </List.Item>
                    <List.Item>
                        <a>Link 3</a>
                    </List.Item>
                </List>
            </Lookingglass>
        </>
    );
};
