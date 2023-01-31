import Image from 'next/image';

import { images } from '@/public';

import styles from '../styles/Header.module.scss';
import axios from 'axios';


const Header = () => {
    
    const { cart } = images;

    
    
    return(
        <header className={styles.header}>
            <p>Sign Up</p>
            <p>LogIn</p>
            <div className={styles.cart}>
                <Image src={cart} alt='cart' width={36} height={36}/>
                <p>num</p>
            </div>
        </header>
    )
}

export default Header;