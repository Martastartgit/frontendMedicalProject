import React from "react";
import {Route, Switch} from "react-router-dom";

import {ChangePassword, PasswordReset} from "../ChangePassword";
import {Confirmation} from "../../helper-components";
import {Header} from "../Header";
import {Logout} from "../Logout";
import {Login} from "../Login";
import {Register} from "../Register";
import {SiteAdmin} from "../SiteAdmin";
import Admin from "../Admin/FullAdmin/Admin";
import {AllProcedures, ProcedureForm, Procedures} from "../Procedures";


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
                <Route path='/admin/site' render={() => <SiteAdmin/>}/>
                <Route path={'/admin/procedures'} component={ Procedures }/>
                <Route path={'/admin/create_procedures'} component={ ProcedureForm }/>
                <Route path='/admin/all_procedures' component={ AllProcedures }/>
                <Route path='/admin/:id' render={() => <Admin/>}/>
            </Switch>
    );
}

export default MainHeader;
