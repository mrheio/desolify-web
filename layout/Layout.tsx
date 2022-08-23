import { FC, PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
	return (
		<>
			<Header />
			<main className="pt-navbar min-h-screen">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
