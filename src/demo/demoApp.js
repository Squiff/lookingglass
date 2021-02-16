import React from 'react';
import FlexExample from './components/FlexExample';
import ColorExamples from './components/ColorExamples';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AlertExamples from './components/AlertExamples';
import Typography from './components/Typography';
import DrawerExample from './components/DrawerExample';
import ModalExample from './components/ModalExample';
import SpinnerExample from './components/SpinnerExample';
import LoaderExample from './components/LoaderExample';
import CardExamples from './components/CardExamples';
import TableExamples from './components/TableExamples';
import TabsExample from './components/TabsExample';
import UtilitiesExamples from './components/UtilitiesExamples';

function DemoApp() {
    return (
        <Router>
            <div>
                <div>
                    <div>
                        <Link to="/flex">Flex</Link>
                    </div>
                    <div>
                        <Link to="/color">Color</Link>
                    </div>
                    <div>
                        <Link to="/alert">Alert</Link>
                    </div>
                    <div>
                        <Link to="/typography">Typography</Link>
                    </div>
                    <div>
                        <Link to="/drawers">Drawers</Link>
                    </div>
                    <div>
                        <Link to="/modals">Modals</Link>
                    </div>
                    <div>
                        <Link to="/spinners">Spinners</Link>
                    </div>
                    <div>
                        <Link to="/loader">Loader</Link>
                    </div>
                    <div>
                        <Link to="/card">Card</Link>
                    </div>
                    <div>
                        <Link to="/table">Table</Link>
                    </div>
                    <div>
                        <Link to="/tabs">Tabs</Link>
                    </div>
                    <div>
                        <Link to="/utilities">Utilities</Link>
                    </div>
                </div>

                <Switch>
                    <Route path="/flex">
                        <FlexExample />
                    </Route>
                    <Route path="/color">
                        <ColorExamples />
                    </Route>
                    <Route path="/alert">
                        <AlertExamples />
                    </Route>
                    <Route path="/typography">
                        <Typography />
                    </Route>
                    <Route path="/drawers">
                        <DrawerExample />
                    </Route>
                    <Route path="/modals">
                        <ModalExample />
                    </Route>
                    <Route path="/spinners">
                        <SpinnerExample />
                    </Route>
                    <Route path="/loader">
                        <LoaderExample />
                    </Route>
                    <Route path="/card">
                        <CardExamples />
                    </Route>
                    <Route path="/table">
                        <TableExamples />
                    </Route>
                    <Route path="/tabs">
                        <TabsExample />
                    </Route>
                    <Route path="/utilities">
                        <UtilitiesExamples />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default DemoApp;
