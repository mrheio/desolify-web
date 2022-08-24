import { FC } from 'react';

import Button from '@components/Button/Button';
import Link from '@components/Link/Link';
import NavLink from '@components/Link/NavLink';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { joinClasses } from '@utils/basics';
import { URLS } from '@utils/misc';
import styles from './Navbar.module.scss';

interface Props {}

const Navbar: FC<Props> = ({}) => {
	return (
		<nav className={joinClasses(styles.navbar, 'fw-semi-bold')}>
			<span className={styles['navbar-left']}>
				<Link href="/">
					<h1>DESOLIFY</h1>
				</Link>
				<ul className={styles['navbar-list']}>
					<li>
						<NavLink href={URLS.TEAMS}>Teams</NavLink>
					</li>
					<li>
						<NavLink href={URLS.GAMES}>Games</NavLink>
					</li>
				</ul>
			</span>
			<span className={styles['navbar-right']}>
				<Button shape="rounded">
					<FontAwesomeIcon icon={faGamepad} />
					<span className={styles['navbar-button-text']}>Get Started</span>
				</Button>
			</span>
		</nav>
	);
};

export default Navbar;
