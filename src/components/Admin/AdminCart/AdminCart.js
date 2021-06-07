import React from 'react';
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";

import {AdminHistory} from "../AdminHistory";
import {DeleteAdmin} from "../DeleteAdmin";
import {UpdateAdmin} from "../UpdateAdmin";

export const AdminCart = (item) => {
    const { name, surname } = item.item.value;

    let match = useRouteMatch();

    return (

        <>
            <div className="card">
                <div className="card-header">
                    {name} {surname}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Адміністратор</h5>
                    <Link to={`${match.url}/edit_data`} className="btn btn-primary">Змінити дані</Link>
                    <Link to={`/change_password`} className="btn btn-primary">Змінити пароль</Link>
                    <Link to={`${match.url}/history`} className="btn btn-primary">Історія</Link>
                    <Link to={`${match.url}/delete`} className="btn btn-primary">Видалити акаунт</Link>
                </div>
            </div>
            <>
                <Switch>
                    <Route path={`${match.path}/edit_data`} render={() => <UpdateAdmin {...item.item.value}/>} />
                    <Route path={`${match.path}/delete`} render={() => <DeleteAdmin/>} />
                    <Route path={`${match.path}/history`} render={() => <AdminHistory/>} />
                </Switch>
            </>
        </>

    )
}

