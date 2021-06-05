import React, {useEffect, useState} from 'react'
import { Redirect } from "react-router-dom";

import { logout } from '../../services'

export const Logout = () => {
    const [isLogout, setIsLogout] = useState(false);


    useEffect(() => {
        logout()
            .then(() => {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                localStorage.removeItem('name');
                localStorage.removeItem('id');
                setIsLogout(true)
            })

    }, [])

    return (
        <>
            {
                isLogout && <Redirect to='/'/>
            }
        </>
    );
}
