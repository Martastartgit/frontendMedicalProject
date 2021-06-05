import React from 'react';
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";

import {UpdateAdmin} from "../UpdateAdmin/UpdateAdmin";

export const AdminCart = (item) => {
    const { name, surname, email } = item.item.value;

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
                    <Link to={`/delete`} className="btn btn-primary">Видалити акаунт</Link>
                </div>
            </div>
            <>
                <Switch>
                    <Route path={`${match.path}/edit_data`} render={() => <UpdateAdmin {...item.item.value}/>} />
                </Switch>
            </>
        </>

    )

}
// <ul>
//
//
//     <li>Історія</li>
//     <li>Видалити акаунт</li>
// </ul>
