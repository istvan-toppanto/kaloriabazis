import React from 'react'
import Header from './Header';
import About from './About';
import Notifications from './Notifications';
import Account from './Account';
import Main from "./Main/Main";
import FoodIntake from "./FoodIntake";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from './Users';
import { Settings } from '@material-ui/icons';


const App = () => {
    return (
        <Router>
            <div>
                <Header></Header>
                <Switch>
                    <Route path="/foodintake">
                        <FoodIntake />
                    </Route>
                    <Route path="/settings">
                        <Settings />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/notifications">
                        <Notifications />
                    </Route>
                    <Route path="/account">
                        <Account />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </div>
        </Router >


    );
}

export default App;