import React, {useState} from 'react'
import {Redirect, useHistory} from "react-router-dom";

import {deleteAdmin} from "../../../services";
import './DeleteAdmin.css';
import {ModalWindow} from "../../../helper-components/ModalWindow";

export const DeleteAdmin = () => {
    const [isDeleted, setIsDeleted] = useState(false);

    const id = localStorage.getItem('id');
    const token = localStorage.getItem('access_token');

    let history = useHistory();

    async function deleteData () {
        await deleteAdmin(id, token)

        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('name');
        localStorage.removeItem('id');

        setIsDeleted(true)

    }

    if (isDeleted) {
        return (
            <Redirect to='/'/>
        )
    }

    function handleChange() {
        history.goBack();
    }

    return (
        <ModalWindow>
            <div>
                <h3>Ви дійсно хочете видалити акаунт?</h3>
                <button onClick={handleChange} className="delete btn btn-secondary">Ні</button>
                <button onClick={deleteData} className="delete btn btn-primary">Так</button>
            </div>
        </ModalWindow>

    )
}
