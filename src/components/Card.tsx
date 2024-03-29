import React, { useState } from 'react';
import Image from 'next/image';

import { ICard } from '../models/ICard';

import { icons, images } from '@/src/public/_index';

import styles from '../styles/Card.module.scss';

const Card: React.FC<ICard> = ({ category, image, price, rating, title }) => {
	const { Favorites } = icons;
	const { bestseller } = images;

	const [addToCart, setAddToCart] = useState<boolean>(false);
	const [warningMessage, setWarningMessage] = useState<boolean>(false);
	const [favourite, setFavourite] = useState<boolean>(false);
	const [counter, setCounter] = useState<number>(0);

	const pushToCart = () => {
		if (counter === 0) {
			setWarningMessage(true);
		} else {
			setAddToCart(true);
			setWarningMessage(false);
		}
	};

	const renderStars = () => {
		let stars = [];
		for (let i = 0; i < 5; i++) {
			stars.push(
				<span
					key={i}
					className={
						Math.round(rating.rate) > i ? `${styles.star}` : `${styles.empty}`
					}
				/>
			);
		}
		return stars;
	};

	return (
		<li className={styles.card}>
			<Image src={image} alt="card" width={220} height={220} />
			{rating.count > 300 && (
				<Image
					src={bestseller}
					alt="bestseller"
					width={64}
					height={24}
					className={styles.bestseller}
				/>
			)}
			<div className={styles.container}>
				<div className={styles.rating}>
					<p>{category}</p>
					<div className={styles.rating__amount}>
						{renderStars()}
						<p>{rating.count} отзыва</p>
					</div>
				</div>
				<p className={styles.title}>{title}</p>
				<p className={styles.price}>
					<span className={styles.price__amount}>
						{Math.ceil(price * 70)} ₽
					</span>{' '}
					/шт.
				</p>
				<div className={styles.wrapper}>
					<button
						onClick={pushToCart}
						style={{ backgroundColor: !addToCart ? '#4056A1' : '#00B177' }}
					>
						{addToCart ? 'В корзине' : 'В корзину'}
					</button>
					{!addToCart && (
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
					)}
					<Favorites
						onClick={() => setFavourite(!favourite)}
						className={`${favourite ? styles.active : ''}`}
					/>
				</div>
				{warningMessage && (
					<p className={styles.warning_message}>
						Please add to your cart at least one item
					</p>
				)}
			</div>
		</li>
	);
};

export default Card;
