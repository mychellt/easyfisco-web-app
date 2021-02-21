import React from "react";
import {Switch, Route} from 'react-router-dom';


import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import RecoverPassword from "../pages/RecoverPassword";
import Sigup from "../pages/Sigup";
import Customer from "../pages/Customer";
import AddSupplier from "../pages/AddSupplier";


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard"  component={Dashboard} />
        <Route path="/recover-password"  component={RecoverPassword} />
        <Route path="/sigup"  component={Sigup} />
        <Route path="/supplier"  component={Customer} />
        <Route path="/customer"  component={Customer} />
    </Switch>
)

export default Routes;