import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { registration } from "../../services";
import './Register.css';
import {ModalWindow} from "../../helper-components/ModalWindow";

export const Register = () => {
    const [isSuccess, setSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onClick = () => {
        window.location.reload();
    }

    const validators = {
        required: 'Поле не може бути пустим'
    }

    const formSubmit = async (data) => {
        console.log(data);
        await registration(data);

        setSuccess(true);

        localStorage.setItem('name', data.name)

    }


    return (
        <div className={'wrap'}>
            <form onSubmit={handleSubmit(formSubmit)}>
                <h1 className={'title'}>Реєстрація</h1>
                <div>
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Ім'я:</label>
                    <div className="col-sm-10">
                        <input
                            type='text'
                            name='name'
                            className='form-control'
                            id='inputName'
                            {...register('name',{
                                ...validators,
                                minLength: {
                                    value: 2,
                                    message: 'Не менше двох символів'
                                },
                                maxLength: {
                                    value: 25,
                                    message: `Ім'я перевищує ліміт символів`
                                }
                            })}
                        />
                        <br/>
                        {errors.name &&
                            <span className={'error'}>{errors.name && errors.name.message}</span>
                        }
                    </div>
                </div>
                <div>
                    <label htmlFor="inputSurname" className="col-sm-2 col-form-label">Прізвище:</label>
                    <div className="col-sm-10">
                        <input
                            type='text'
                            name='surname'
                            className='form-control'
                            id='inputSurname'
                            {...register('surname',{
                                ...validators,
                                minLength: {
                                    value: 2,
                                    message: 'Не менше двох символів'
                                },
                                maxLength: {
                                    value: 50,
                                    message: `Прізвище перевищує ліміт символів`
                                }
                            })}
                        />
                        <br/>
                        {errors.surname &&
                           <span className={'error'}>{errors.surname && errors.surname.message}</span>
                        }
                    </div>
                </div>
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
                <input type='button' onClick={onClick} defaultValue='Очистити форму' className='regBtn btn btn-primary'/>
                <input type='submit' defaultValue='Відправити' className='regBtn btn btn-success'/>


            </form>
            {isSuccess &&
                <ModalWindow>
                    <div className="alert alert-success" role="alert">
                        <p>Реєстрацію завершено успішно!</p>
                        <p>На Вашу електронну пошту відправлено лист з підтвердженням емейлу.</p>
                    </div>
                </ModalWindow>

            }
        </div>

    )
}
