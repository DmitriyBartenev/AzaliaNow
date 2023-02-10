import React from "react";

import styles from '../styles/Form.module.scss';

const Form = () => {
    
    return(
        <form className={styles.form}>
            <label>Enter your Name</label>
            <input
                type='text'
                placeholder='Dmitriy'/>
            <label>Enter your Surname</label>
            <input
                type='text'
                placeholder='Bartenev'/>
            <label>Enter your E-mail</label>
            <input
                type='text'
                placeholder='12345@gmail.com'/>
            <button>
                Log In
            </button>
        </form>
    )
}

export default Form;