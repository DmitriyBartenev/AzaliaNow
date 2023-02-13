import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";

import { baseURL } from "@/config";

import styles from '../styles/Form.module.scss';

const schema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')])
})

type Inputs = {
    name: string,
    surname: string,
    email: string,
    password: string,
    confirmPassword: string
}

const Form = () => {
    
    const [isSubmitted, setSubmitted] = useState(false);

    const { register, handleSubmit, reset, formState: {errors} } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try{

            const response = await axios.post(`${baseURL}/auth`, data)
            
            if(response.status === 200){
                setSubmitted(true)
            }

        }catch(error){
            console.log(error)
        }
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.form_container}>
                <h1>Sign In</h1>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <label>Enter your Name</label>
                    <input
                        type='text'
                        {...register('name')}
                        />
                    <p>{errors.name?.message}</p>
                    <label>Enter your Surname</label>
                    <input
                        type='text'
                        {...register('surname')}
                        />
                    <p>{errors.surname?.message}</p>
                    <label>Enter your E-mail</label>
                    <input
                        type='text'
                        {...register('email')}
                        />
                    <p>{errors.email?.message}</p>
                    <label>Enter your Password</label>
                    <input
                        type='password'
                        {...register('password')}
                        />
                    <p>{errors.password?.message}</p>
                    <label>Confirm your Password</label>
                    <input
                        type='password'
                        {...register('confirmPassword')}
                        />
                    <p>{errors.confirmPassword?.message}</p>
                    <div className={styles.button_container}>
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;