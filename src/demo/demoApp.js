import React from 'react';
import ColorExamples from './components/ColorExamples';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AlertExamples from './components/AlertExamples';
import TableExamples from './components/TableExamples';
import TabsExample from './components/TabsExample';

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
                        <Link to="/table">Table</Link>
                    </div>
                    <div>
                        <Link to="/tabs">Tabs</Link>
                    </div>
                </div>

                <Switch>
                    <Route path="/color">
                        <ColorExamples />
                    </Route>
                    <Route path="/alert">
                        <AlertExamples />
                    </Route>
                    <Route path="/table">
                        <TableExamples />
                    </Route>
                    <Route path="/tabs">
                        <TabsExample />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default DemoApp;
