import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";

import { baseURL } from "@/config";

import styles from '../styles/Form.module.scss';

const schema = yup.object().shape({
    firstName: yup.string().required(),
    secondName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')])
})

type Inputs = {
    firstName: string,
    lastName: string,
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
        <div className={styles.form_container}>
            <h1>Sign In</h1>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label>Enter your Name</label>
                <input
                    type='text'
                    placeholder="firstName"
                    {...register('firstName')}
                    />
                <label>Enter your Surname</label>
                <input
                    type='text'
                    placeholder="lastName"
                    {...register('lastName')}
                    />
                <label>Enter your E-mail</label>
                <input
                    type='text'
                    placeholder="email"
                    {...register('email')}
                    />
                <label>Enter your Password</label>
                <input
                    type='text'
                    placeholder="enter your password"
                    {...register('password')}
                    />
                <label>Confirm your Password</label>
                <input
                    type='text'
                    placeholder="confirm your password"
                    {...register('confirmPassword')}
                    />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form;