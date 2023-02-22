import React from 'react';
import Image from 'next/image';

import { images } from '@/public/_index';

import styles from '../styles/Header.module.scss';
import Form from './Form';

const Header: React.FC = () => {
    
    const [showForm, setShowForm] = React.useState<boolean>(false);

    const { cart } = images;

    return(
        <header className={styles.header}>
            <p onClick={() => setShowForm(true)}>Sign In</p>
            {
                showForm && <Form showForm={showForm} setShowForm={setShowForm}/>
            }
            <div className={styles.cart}>
                <Image src={cart} alt='cart' width={36} height={36}/>
                <span>0</span>
            </div>
        </header>
    )
}

export default Header;