import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import TabsExample from './components/TabsExample';

function DemoApp() {
    return (
        <Router>
            <div>
                <div>
                    <div>
                        <Link to="/tabs">Tabs</Link>
                    </div>
                </div>

                <Switch>
                    <Route path="/tabs">
                        <TabsExample />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default DemoApp;
