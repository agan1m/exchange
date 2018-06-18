import React, { Component } from 'react';
import { Link, Route, Switch} from "react-router-dom";

import PrivateRoute from "../PrivateRoute";
import Login from '../Login'

class AppRouter extends Component {
    
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <PrivateRoute />
                </Switch>
            </div>
        );
    }
}

export default AppRouter;