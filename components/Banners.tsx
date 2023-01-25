import React from "react";

import Image from "next/image";

import ArrowIcon from '../public/arrow.svg';
import Bannner1 from '../public/banner1.png';
import Banner2 from '../public/banner2.png';

import styles from '../styles/Banner.module.scss';

const Banners: React.FC = () => {



    return(
        <div className={styles.banners}>
            <p>Всё для комфортной работы</p>
            <Image src={ArrowIcon} alt='arrow' width={43} height={18}/>
            <div>
                <Image src={Bannner1} alt='banner 1' width={332} height={140}/>
                <Image src={Banner2} alt='banner 2' width={332} height={140}/>
            </div>
        </div>
    )
}

export default Banners;