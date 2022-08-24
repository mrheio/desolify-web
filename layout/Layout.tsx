import { Header } from '@layout';
import { FC, PropsWithChildren } from 'react';
import Footer from './Footer';

import styles from './Layout.module.scss';

type Props = {};

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
