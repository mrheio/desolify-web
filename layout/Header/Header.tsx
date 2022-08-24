import { FC } from 'react';

import { Button, Link, Navbar } from '@components';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { URLS } from '@utils/misc';

import styles from './Header.module.scss';

type Props = {};

const Header: FC<Props> = ({}) => {
	return (
		<header className={styles.header}>
			<span className={styles['header-left']}>
				<Link href={URLS.HOME}>
					<h1>DESOLIFY</h1>
				</Link>

				<Navbar />
			</span>
			<span className={styles['header-right']}>
				<Button shape="rounded">
					<FontAwesomeIcon icon={faGamepad} />
					<span className={styles['header-button-text']}>Get Started</span>
				</Button>
			</span>
		</header>
	);
};

export default Header;
