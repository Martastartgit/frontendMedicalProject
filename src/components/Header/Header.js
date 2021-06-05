import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";

import './Header.css';

export const Header = () => {
    const name = localStorage.getItem('name');
    const id = localStorage.getItem('id');

    const [isLogged, setIsLogged] = useState(false);

    useEffect(()=> {
        const logged = localStorage.getItem('access_token')

        logged ? setIsLogged(true) : setIsLogged(false)

    }, [] );

    return (
            <div className={'wrapper'}>
                <div>LogoMedical</div>
                <div className={'navWrap'}>
                    {
                        !isLogged && <Link to='/login'>
                            <div className={ 'main-button' }>
                                Go to login
                            </div>
                        </Link>
                    }
                    {
                        !isLogged && <div className={ 'main-button' }>
                            <Link to={ '/register' }>
                                Go to register
                            </Link>
                        </div>
                    }
                    {
                        isLogged &&
                        <div className={ 'main-button' }>
                            <Link to={`/admin/${id}`}>{name}</Link>
                            <Link to={ '/logout' }>
                                Logout
                            </Link>
                        </div>
                    }
                </div>
            </div>

    )
}
