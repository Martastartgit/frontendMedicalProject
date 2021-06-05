import React, {useEffect, useState} from 'react'
import {Redirect} from "react-router-dom";

import {deleteAdmin} from "../../../services";

export const DeleteAdmin = () => {
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(()=> {
        const token = localStorage.getItem('access_token');
        const id = localStorage.getItem('id');
        async function deleteData () {
            // await deleteAdmin(id, token)
            //
            // localStorage.removeItem('access_token');
            // localStorage.removeItem('refresh_token');
            // localStorage.removeItem('name');
            // localStorage.removeItem('id');

            setIsDeleted(true)

        }
        deleteData()

    }, [] );

    if (isDeleted) {
        return (
            <Redirect to='/'/>
        )
    }

    return (
        <>

        </>

    )
}
