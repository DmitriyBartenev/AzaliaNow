import React, { SetStateAction, Dispatch, useState, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import AppContext from "@/AppContext";
import { auth } from 'firebase-config';
import { baseURL } from "@/config";

import { icons } from "@/public/_index";

import styles from '../styles/Form.module.scss';

const schema = yup.object().shape({
    name: yup.string().required('Please enter your Name'),
    surname: yup.string().required('Please enter your Surname'),
    email: yup.string().email().required('Please enter your E-mail'),
    password: yup.string().min(6).max(20).required('Please enter your Password'),
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
    setShowForm: Dispatch<SetStateAction<boolean>>
}

const Form: React.FC<FormProps> = ({ setShowForm }) => {
    
    const [isSubmitted, setSubmitted] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const { Close } = icons;

    const { logged, setLogged } = useContext(AppContext);

    const onSubmit:SubmitHandler<Inputs> = async (data) => {
     
        const { email, password } = data;

        try{

            if(logged) {
                await createUserWithEmailAndPassword(auth, email, password)
            }
            else {
                await signInWithEmailAndPassword(auth, email, password)
            }

            setError(false);
            setTimeout(() => {
                setSubmitted(false);
                setShowForm(false);
                reset();
            }, 2000)
    
        }catch(error){
            setError(true);
            const status = (error as Error).message;
            console.log(status);
        }

    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.form_container}>
                <h3>{ logged ? 'Sign Up' : 'Sign In' }</h3>
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
                    {
                        !logged 
                        &&
                        <p onClick={() => setLogged?.(true)}>
                            If you do not have an account yet, kindly create one - it is free.
                        </p> 
                    }
                    <div className={styles.button_container}>
                        <button type="submit">
                            { logged ? 'Sign Up' : 'Sign In' }
                        </button>
                    </div>
                    <Close onClick={() => setShowForm(false)}/>
                </form>
            </div>
        </div>
    )
}

export default Form;