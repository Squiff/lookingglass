import React from 'react';
import ColorExamples from './components/ColorExamples';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AlertExamples from './components/AlertExamples';
import ModalExample from './components/ModalExample';
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
                        <Link to="/color">Color</Link>
                    </div>
                    <div>
                        <Link to="/alert">Alert</Link>
                    </div>
                    <div>
                        <Link to="/modals">Modals</Link>
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
                    <Route path="/color">
                        <ColorExamples />
                    </Route>
                    <Route path="/alert">
                        <AlertExamples />
                    </Route>
                    <Route path="/modals">
                        <ModalExample />
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
