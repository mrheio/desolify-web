import { FC } from 'react';

import NavLink from '@components/Link/NavLink';
import { joinClasses } from '@utils/basics';
import { URLS } from '@utils/misc';
import styles from './Navbar.module.scss';

interface Props {}

const Navbar: FC<Props> = ({}) => {
	return (
		<nav className={joinClasses(styles.navbar, 'fw-semi-bold')}>
			<ul className={styles['navbar-list']}>
				<li>
					<NavLink href={URLS.HOME}>Teams</NavLink>
				</li>
				<li>
					<NavLink href={URLS.GAMES}>Games</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
