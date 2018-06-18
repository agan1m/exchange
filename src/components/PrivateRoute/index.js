import React, { Component } from 'react';
import {Redirect, Switch, Route} from 'react-router-dom'

import Home from '../Home'

class PrivateRoute extends Component {
    state = {
        isAuth: true
    }
    render() {
        const {isAuth} = this.state
        if(!isAuth) return <Redirect to='/login'/>
        return (
            <Route exact path='/' component={Home}/>
        );
    }
}

export default PrivateRoute;