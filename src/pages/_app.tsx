import React from 'react';
import type { AppProps } from 'next/app';

import AppContext from '../context/AppContext';

import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
	const [logged, setLogged] = React.useState<boolean>(false);

	return (
		<AppContext.Provider value={{ logged, setLogged }}>
			<Component {...pageProps} />
		</AppContext.Provider>
	);
}
