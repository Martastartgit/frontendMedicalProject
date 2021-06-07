import React, {useState} from "react";
import {useForm} from "react-hook-form";

import './ProcedureFrom.css';

import {createProcedure} from "../../../services";
import {ModalWindow} from "../../../helper-components";

export const ProcedureForm = () => {
    const [isSuccess, setSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const token = localStorage.getItem('access_token');

    const onClick = () => {
        window.location.reload();
    }

    const validators = {
        required: 'Поле не може бути пустим'
    }

    const formSubmit = async (data) => {
        console.log(data);
        await createProcedure(data, token);

        setSuccess(true);

    }

    return (
        <div className={'wrap'}>
            <form onSubmit={handleSubmit(formSubmit)} className={'procedureForm'}>
                <h1 className={'title'}>Реєстрація</h1>
                <div>
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Назва:</label>
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
                                    value: 50,
                                    message: `Назва перевищує ліміт символів`
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
                    <label htmlFor="description" className="col-sm-2 col-form-label">Опис:</label>
                    <div className="col-sm-10">
                        <textarea
                            id='description'
                            name='description'
                            {...register('description',{...validators })}
                        />
                        <br/>
                        {errors.description &&
                        <span className={'error'}>{errors.desription && errors.description.message}</span>
                        }
                    </div>
                </div>
                <div>
                    <label htmlFor="symptoms" className="col-sm-2 col-form-label">Симптоми:</label>
                    <div className="col-sm-10">
                        <textarea
                            id='symptoms'
                            name='symptoms'
                            {...register('symptoms')}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="causes" className="col-sm-2 col-form-label">Причини:</label>
                    <div className="col-sm-10">
                        <textarea
                            id='causes'
                            name='causes'
                            {...register('causes',{...validators })}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="diagnosis" className="col-sm-2 col-form-label">Діагностика:</label>
                    <div className="col-sm-10">
                        <textarea
                            id='diagnosis'
                            name='diagnosis'
                            {...register('diagnosis')}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="treatment" className="col-sm-2 col-form-label">Лікування:</label>
                    <div className="col-sm-10">
                        <textarea
                            id='treatment'
                            name='treatment'
                            {...register('treatment')}
                        />
                    </div>
                </div>

                <input type='button' onClick={onClick} defaultValue='Очистити форму' className='regBtn btn btn-primary'/>
                <input type='submit' defaultValue='Відправити' className='regBtn btn btn-success'/>

            </form>
            {isSuccess &&
            <ModalWindow>
                <div className="alert alert-success" role="alert">
                    <p>Процедуру додано успішно!</p>
                </div>
            </ModalWindow>

            }
        </div>
    )
}
