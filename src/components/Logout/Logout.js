import React, { useEffect } from 'react'
import { Redirect } from "react-router-dom";

import { logout } from '../../services'

export const Logout = () => {

    useEffect(() => {
        logout()
            .then(() => {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
            })
    }, [])

    return (
        <Redirect to='/'/>
    );
}
