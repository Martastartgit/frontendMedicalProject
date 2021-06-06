import React, {useEffect, useState} from 'react';

import {getAdminHistory} from "../../../services";

export const AdminHistory = () => {
    const [value, setValue] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem('id');
        const token = localStorage.getItem('access_token');

        async function getData(){
            const value = await getAdminHistory(id, token);
            setValue({value});
            console.log(value);
        }

        getData()
    }, [])

    return (
        <>
            gdgrt
        </>
    )
}
