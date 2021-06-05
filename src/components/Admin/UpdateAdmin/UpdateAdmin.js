import React, {useState} from 'react';
import {Redirect, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";

import {updateAdmin} from "../../../services";

export const UpdateAdmin = (props) => {
    const token = localStorage.getItem('access_token');

    const { register, handleSubmit, formState: { errors } } = useForm();

    const {id} = useParams();

    const [isSuccess, setSuccess] = useState(false);


    const onClick = () => {
        window.location.reload();
    }

    const validators = {
        required: 'Поле не може бути пустим'
    }

    const formSubmit = async (data) => {
        await updateAdmin(id, data, token)

        setSuccess(true);

        localStorage.setItem('name', data.name)

        alert('Дані змінено успішно')

    }

    if (isSuccess) {
        return (
            <Redirect to={`/admin/${id}`}/>
        )
    }

    return (
        <div className={'wrap'}>
            <form onSubmit={handleSubmit(formSubmit)}>
                <h1 className={'title'}>Зміна даних</h1>
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
                            defaultValue={props.name}
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
                            defaultValue={props.surname}
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
                            defaultValue={props.email}
                        />
                        <br/>
                        {errors.email &&
                        <span className={'error'}>{errors.email && errors.email.message}</span>
                        }
                    </div>
                </div>
                <input type='button' onClick={onClick} defaultValue='Очистити форму' className='regBtn btn btn-primary'/>
                <input type='submit' defaultValue='Відправити' className='regBtn btn btn-success'/>

            </form>

        </div>

    )

}
