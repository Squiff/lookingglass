import React from 'react';
import FlexExample from './components/FlexExample';
import ColorExamples from './components/ColorExamples';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

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
                </div>

                <Switch>
                    <Route path="/flex">
                        <FlexExample />
                    </Route>
                    <Route path="/color">
                        <ColorExamples />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default DemoApp;
