import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { images } from '@/public/_index';

import styles from '../styles/Header.module.scss';

const Header: React.FC = () => {
    
    const { cart } = images;

    return(
        <header className={styles.header}>
            <Link href='/auth'>
                <p>Sign In</p>
            </Link>
            <div className={styles.cart}>
                <Image src={cart} alt='cart' width={36} height={36}/>
                <p>0</p>
            </div>
        </header>
    )
}

export default Header;