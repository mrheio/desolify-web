import React, { FC } from 'react';

import { Button, Link } from '@components';

import styles from '@components/Navbar/Navbar.module.scss';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { URLS } from '@utils/misc';

interface Props {}

const Navbar: FC<Props> = ({}) => {
	return (
		<nav className={styles.navbar}>
			<Link className={styles['navbar__logo']} href={'/'}>
				<h1>DESOLIFY</h1>
			</Link>
			<ul className={styles['navbar__linkList']}>
				<li>
					{/* TODO: change this */}
					<Link href={URLS.HOME}>Teams</Link>
				</li>
				<li>
					{/* TODO: change this */}
					<Link href={URLS.HOME}>Games</Link>
				</li>
			</ul>

			<Button icon={<FontAwesomeIcon icon={faGamepad} />} shape="rounded">
				Get Started
			</Button>
		</nav>
	);
};

export default Navbar;
