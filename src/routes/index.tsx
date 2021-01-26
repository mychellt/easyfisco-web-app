import React from "react";
import {Switch, Route} from 'react-router-dom';


import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import RecoverPassword from "../pages/RecoverPassword";
import Sigup from "../pages/Sigup";


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/recover-password" exact component={RecoverPassword} />
        <Route path="/sigup" exact component={Sigup} />
    </Switch>
)

export default Routes;