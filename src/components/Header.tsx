import React, { useContext, useState } from 'react';
import Image from 'next/image';

import AppContext from '@/src/context/AppContext';

import Form from './Form';

import { images } from '@/src/public/_index';

import styles from '../styles/Header.module.scss';

const Header: React.FC = () => {
	const [showForm, setShowForm] = useState<boolean>(false);

	const { logged } = useContext(AppContext);

	const { cart } = images;

	return (
		<header className={styles.header}>
			<p onClick={() => setShowForm(true)}>Sign In/Sign Up</p>
			{showForm && <Form setShowForm={setShowForm} />}
			{logged && (
				<div className={styles.cart}>
					<Image src={cart} alt="cart" width={36} height={36} />
					<span>0</span>
				</div>
			)}
		</header>
	);
};

export default Header;
