import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import {confirmEmail} from '../../services'

export const Confirmation = (props) => {
    const { match: {params: {token}} } = props;

    useEffect( () => {
        async function sendConfirm () {
            await confirmEmail(token);
        }
        sendConfirm()
    })

    return (
        <div>
            <h2>Ваш емеїл підтверджено!</h2>
            <Link to={'/login'}>Будь ласка, залогінтесь</Link>
        </div>
    )
}
