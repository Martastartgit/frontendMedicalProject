import React, {useEffect, useState} from "react";

import {AdminCart} from "./AdminCart/AdminCart";
import {admin} from "../../services";
import {Header} from "../Header/Header";

function Admin() {

    const [value, setValue] = useState(null);

    useEffect( () => {
        const token = localStorage.getItem('access_token');
        const id = localStorage.getItem('id');

        async function getData() {
            const value = await admin(id, token);

            setValue({value});
        }

        getData()

    }, [])

    return (
        <>
            {value &&
                <>
                    <Header/>
                    <AdminCart item={value}/>
                </>
            }
        </>
    );
}

export default Admin;
