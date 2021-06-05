import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {adminPasswordReset} from "../../services";
import {Redirect} from "react-router-dom";

export const PasswordReset = (props) => {
    const { match: {params: {token}} } = props;

    const [isSuccess, setSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onClick = () => {
        window.location.reload();
    }

    const validators = {
        required: 'Поле не може бути пустим'
    }

    const formSubmit = async (data) => {
        await adminPasswordReset(data, token);
        setSuccess(true);
    }

    if (isSuccess) {
        return (
            <Redirect to={`/login`}/>
        )
    }

    return (
        <div className={'wrap'}>
            <form onSubmit={handleSubmit(formSubmit)}>
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
                                    message: 'Слабкий пароль'
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
                <input type='button' onClick={onClick} defaultValue='Очистити форму' className='btn btn-primary'/>
                <input type='submit' defaultValue='Відправити' className='btn btn-success'/>
            </form>
        </div>
    )
}
