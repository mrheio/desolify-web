import { FC } from 'react';

import styles from '@components/Navbar/Navbar.module.scss';
import { URLS } from '@utils/misc';
import NavLink from './NavLink';

interface Props {}

const Navbar: FC<Props> = ({}) => {
	return (
		<nav className={`${styles.navbar} fw-semi-bold`}>
			<ul className={styles['navbar-list']}>
				<li>
					{/* TODO: change this */}
					<NavLink href={URLS.HOME}>Teams</NavLink>
				</li>
				<li>
					{/* TODO: change this */}
					<NavLink href={URLS.GAMES}>Games</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
