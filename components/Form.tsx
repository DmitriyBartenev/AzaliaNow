import React, { SetStateAction, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";

import { baseURL } from "@/config";

import styles from '../styles/Form.module.scss';

import { icons } from "@/public/_index";

const schema = yup.object().shape({
    name: yup.string().required('Please enter your Name'),
    surname: yup.string().required('Please enter your Surname'),
    email: yup.string().email().required('Please enter your E-mail'),
    password: yup.string().min(4).max(15).required('Please enter your Password'),
    confirmPassword: yup.string().oneOf([yup.ref('password')])
});

type Inputs = {
    name: string,
    surname: string,
    email: string,
    password: string,
    confirmPassword: string
};

interface FormProps {
    showForm: boolean,
    setShowForm: React.Dispatch<SetStateAction<boolean>>
}

const Form: React.FC<FormProps> = ({ showForm, setShowForm }) => {
    
    const [isSubmitted, setSubmitted] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const { Close } = icons;

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        
        try{

            const response = await axios.post(`${baseURL}/auth`, data);
            
            if(response.status === 201){
                setSubmitted(true)
            }

        }catch(error){
            setError(true);
            const status = (error as Error).message;
            throw new Error(`Something Went Wrong. ${status}`)
        }

        setError(false);
        setTimeout(() => {
            setSubmitted(false)
            reset();
        }, 1500)
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
                    <p>{errors.confirmPassword && 'Passwords mismatch'}</p>
                    {
                        isSubmitted && <p>Succesfully Submitted</p>
                    }
                    {
                        isError && <p>Oops...Something Went Wrong</p>
                    }
                    <div className={styles.button_container}>
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                    <Close onClick={() => setShowForm(false)}/>
                </form>
            </div>
        </div>
    )
}

export default Form;