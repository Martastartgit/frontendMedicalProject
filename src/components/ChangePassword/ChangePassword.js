import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {adminPasswordForgot} from "../../services";

export const ChangePassword = () => {
    const token = localStorage.getItem('access_token');

    const [isSuccess, setSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onClick = () => {
        window.location.reload();
    }

    const validators = {
        required: 'Поле не може бути пустим'
    }

    const formSubmit = async (data) => {
        await adminPasswordForgot(data, token);
        setSuccess(true);
    }

    return (
        <div className={'wrap'}>
            <form onSubmit={handleSubmit(formSubmit)}>
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
                <input type='button' onClick={onClick} defaultValue='Очистити форму' className='btn btn-primary'/>
                <input type='submit' defaultValue='Відправити' className='btn btn-success'/>
            </form>
            {isSuccess &&
            <div className="alert alert-success" role="alert">
                <p>На Вашу електронну пошту відправлено лист з ссилкою на зміну пароля.</p>
            </div>
            }
        </div>
    )
}
