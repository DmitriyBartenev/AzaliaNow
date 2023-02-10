import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from '../styles/Form.module.scss';

type Inputs = {

}

const Form = () => {
    
    return(
        <div className={styles.form_container}>
            <h1>Sign Up</h1>
            <form className={styles.form}>
                <label>Enter your Name</label>
                <input
                    type='text'
                    />
                <label>Enter your Surname</label>
                <input
                    type='text'
                    />
                <label>Enter your E-mail</label>
                <input
                    type='text'
                    />
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form;