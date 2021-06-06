import React from "react";
import {  Route, Switch } from "react-router-dom";

import {ChangePassword} from "../ChangePassword/ChangePassword";
import {Confirmation} from "../../helper-components/EmailConfirmer/EmailConfirmer";
import {Header} from "../Header/Header";
import {Logout} from "../Logout/Logout";
import {Login} from "../Login/Login";
import {Register} from "../Register/Register";
import {PasswordReset} from "../ChangePassword/PasswordReset";
import Admin from "../Admin/FullAdmin/Admin";

function MainHeader() {

    return (
            <Switch>
                <Route exact path='/' component={ Header } />
                <Route path='/login' component={ Login }/>
                <Route path='/logout' component={ Logout }/>
                <Route path='/register' render={() => <Register/>}/>
                <Route path='/confirm/:token' component={ Confirmation }/>
                <Route path={'/change_password'} component={ ChangePassword }/>
                <Route path={'/password/reset/:token'} component={ PasswordReset }/>
            </Switch>
    );
}

export default MainHeader;
