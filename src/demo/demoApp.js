import React from 'react';
import FlexExample from './components/FlexExample';
import ColorExamples from './components/ColorExamples';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AlertExamples from './components/AlertExamples';
import ButtonExample from './components/ButtonExample';
import Typography from './components/Typography';

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
                        <Link to="/button">Button</Link>
                    </div>
                    <div>
                        <Link to="/typography">Typography</Link>
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
                    <Route path="/button">
                        <ButtonExample />
                    </Route>
                    <Route path="/typography">
                        <Typography />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default DemoApp;
