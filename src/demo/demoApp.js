import React from 'react';
import FlexExample from './components/FlexExample';
import ColorExamples from './components/ColorExamples';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AlertExamples from './components/AlertExamples';
import ButtonExample from './components/ButtonExample';
import Typography from './components/Typography';
import DrawerExample from './components/DrawerExample';
import ModalExample from './components/ModalExample';
import SpinnerExample from './components/SpinnerExample';
import LoaderExample from './components/LoaderExample';

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
                </Switch>
            </div>
        </Router>
    );
}

export default DemoApp;
