import { Header } from '@layout';
import { FC, PropsWithChildren } from 'react';
import Footer from './Footer/Footer';

type Props = {};

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
	return (
		<>
			<Header />
			<main className="min-h-main-content pt-navbar">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
