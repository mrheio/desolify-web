import { FC, PropsWithChildren } from 'react';
import Footer from './Footer/Footer';
import Header from './Header';

type Props = {};

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
	return (
		<>
			<Header />
			<main className="min-h-main-content pt-navbar bg-gradient-primary px-8">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
