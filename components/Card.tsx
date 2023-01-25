import React from "react";
import Image from "next/image";

import FavouritesIcon from '../public/favourites.svg';

import styles from '../styles/Card.module.scss';

interface CardProps {
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

const Card: React.FC<CardProps> = ({ title, price, category, description, image }) => {
    

    return(
        <li className={styles.card}>
            <Image src={image} alt='card' width={220} height={220}/>
            <p className={styles.category}>{category}</p>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}><span className={styles.price__amount}>{parseInt(price) * 70} ₽</span> /шт.</p>
            <div className={styles.wrapper}>
                <button>В корзине</button>
                <Image src={FavouritesIcon} alt='FavouritesIcon' width={40} height={40}/>
            </div>
        </li>
    )
}

export default Card;