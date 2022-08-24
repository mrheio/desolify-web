import { Navbar } from '@components';

import styles from '@styles/pages/Index.module.scss';
import { FC } from 'react';

type Props = {};

const Header: FC<Props> = ({}) => {
	return (
		<div className={styles.header}>
			<Navbar />
		</div>
	);
};

export default Header;
