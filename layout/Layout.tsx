import { Header } from '@layout';
import { FC, PropsWithChildren } from 'react';
import Footer from './Footer';

import styles from '@styles/Layout.module.scss';

interface Props {}

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles['layout__main']}>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
