import Image from 'next/image';

import { images } from '@/public';

import styles from '../styles/Header.module.scss';
import axios from 'axios';


const Header = () => {
    
    const { cart } = images;

    
    
    return(
        <header className={styles.header}>
            <h3>Log In/Sign Up</h3>
            <div className={styles.cart}>
                <Image src={cart} alt='cart' width={36} height={36}/>
                <p>num</p>
            </div>
        </header>
    )
}

export default Header;