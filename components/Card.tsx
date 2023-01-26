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
    
    const [addToCart, setAddToCart] = React.useState(false);
    const [warningMessage, setWarningMessage] = React.useState(false);
    const [favourite, setFavourite] = React.useState(false);
    const [counter, setCounter] = React.useState(0);

    const pushToCart = () => {
        if(counter === 0){
            setWarningMessage(true)
        }else {
            setAddToCart(true);
            setWarningMessage(false)
        }

    }

    return(
        <li className={styles.card}>
            <Image src={image} alt='card' width={220} height={220}/>
            <div className={styles.container}>
                <p className={styles.category}>{category}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.price}><span className={styles.price__amount}>{parseInt(price) * 70} ₽</span> /шт.</p>
                <div className={styles.wrapper}>
                    <button 
                        onClick={pushToCart}
                        style={{backgroundColor: !addToCart ? '#4056A1' : '#00B177'}}
                        >
                            {addToCart ? 'В корзине' : 'В корзину'}
                    </button>
                    {
                        !addToCart && 
                        <div className={styles.counter}>
                            <button 
                                className={styles.action}
                                disabled={counter === 0}
                                onClick={() => setCounter(counter - 1)}
                                />
                            <p>{counter}</p>
                            <button 
                                className={styles.action}
                                onClick={() => setCounter(counter + 1)}
                                />
                        </div>
                    }
                    <Image 
                        src={FavouritesIcon} 
                        alt='FavouritesIcon' 
                        width={40} 
                        height={40} 
                        onClick={() => setFavourite(true)}
                        />
                </div>
                {
                    warningMessage &&
                    <p className={styles.warning_message}>Please add to your cart at least one item</p>
                }
            </div>
        </li>
    )
}

export default Card;