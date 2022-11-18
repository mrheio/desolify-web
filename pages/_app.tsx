import type { AppProps } from 'next/app';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Layout } from '../layout';

import AuthGuard from 'auth/AuthGuard';
import '../styles/reset.scss';
import '../styles/styles.scss';
import '../styles/utility.scss';

config.autoAddCss = false;

const queryClient = new QueryClient();

function Desolify({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			{Component.protected ? (
				<AuthGuard>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</AuthGuard>
			) : (
				<Layout>
					<Component {...pageProps} />
				</Layout>
			)}
		</QueryClientProvider>
	);
}

export default Desolify;
