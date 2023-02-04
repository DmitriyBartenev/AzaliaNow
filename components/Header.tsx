import Image from 'next/image';

import { images } from '@/public/_index';

import styles from '../styles/Header.module.scss';

const Header = () => {
    
    const { cart } = images;

    return(
        <header className={styles.header}>
            <p>Sign Up</p>
            <p>LogIn</p>
            <div className={styles.cart}>
                <Image src={cart} alt='cart' width={36} height={36}/>
                <p>0</p>
            </div>
        </header>
    )
}

export default Header;