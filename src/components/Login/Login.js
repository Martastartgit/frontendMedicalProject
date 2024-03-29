import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Redirect } from "react-router-dom";

import './Login.css';
import { login } from "../../services";

export const Login = () => {
    const [isSuccess, setSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const name = localStorage.getItem('name');

    const onClick = () => {
        window.location.reload();
    }

    const validators = {
        required: 'Поле не може бути пустим'
    }

    const formSubmit = async (data) => {
        let newVar = await login(data);

        if (newVar.access_token) {
            setSuccess(true)
        }

        localStorage.setItem('access_token', newVar.access_token)
        localStorage.setItem('refresh_token', newVar.refresh_token)
        localStorage.setItem('id', newVar._id)

        if (!name) {
            localStorage.setItem('name', newVar.name)
        }

    }

    if (isSuccess) {
        return (
            <Redirect to={'/admin/site'}/>
        )
    }

    return (
        <div className={'wrap'}>
            <form onSubmit={handleSubmit(formSubmit)}>
                <h1 className={'title'}>Логінація</h1>
                <div>
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Електронна адреса:</label>
                    <div className="col-sm-10">
                        <input
                            type='email'
                            name='email'
                            className='form-control'
                            id='inputEmail'
                            {...register('email',{
                                ...validators,
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                                    message: 'Не вірний адрес електронної пошти'
                                }
                            })}
                            placeholder='email@example.com'
                        />
                        <br/>
                        {errors.email &&
                        <span className={'error'}>{errors.email && errors.email.message}</span>
                        }
                    </div>
                </div>
                <div>
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Пароль:</label>
                    <div className="col-sm-10">
                        <input
                            type='password'
                            name='password'
                            className='form-control'
                            id='inputPassword'
                            {...register('password',{
                                ...validators,
                                pattern: {
                                    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                                    message: 'Не вірний пароль'
                                }
                            })}
                            placeholder='password'

                        />
                        <br/>
                        {errors.password &&
                        <span className={'error'}>{errors.password && errors.password.message}</span>
                        }
                    </div>
                </div>
                <Link to={`/change_password`} className='login btn btn-warning'>Забули пароль</Link>
                <input type='button' onClick={onClick} defaultValue='Очистити форму' className='login btn btn-primary'/>
                <input type='submit' defaultValue='Відправити' className='login btn btn-success'/>
            </form>

        </div>
   )
}
