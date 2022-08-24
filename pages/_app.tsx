import type { AppProps } from 'next/app';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Layout } from '@layout';

import '@styles/reset.scss';
import '@styles/styles.scss';
import '@styles/utility.scss';

config.autoAddCss = false;

function Desolify({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default Desolify;
