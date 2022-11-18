import { FC } from 'react';

import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLogOut, useUser } from 'utils/hooks';
import { URLS } from '../utils/misc';
import Button from './Button/Button';
import Link from './Link/Link';
import NavLink from './Link/NavLink';

type Props = {};

const Navbar: FC<Props> = ({}) => {
	const { user } = useUser();
	const logOutMutation = useLogOut();

	return (
		<nav className="fixed top-0 left-0 right-0 h-navbar bg-primary-700 text-white px-8 flex justify-between items-center gap-6 z-40">
			<span className="flex gap-8">
				<Link href={URLS.HOME}>
					<h1 className="fs-secondary-heading fw-bold">DESOLIFY</h1>
				</Link>
			</span>

			<ul className="hidden sm:flex sm:gap-4 sm:flex-1">
				<li>
					<NavLink href={URLS.TEAMS}>Teams</NavLink>
				</li>
				<li>
					<NavLink href={URLS.GAMES}>Games</NavLink>
				</li>
			</ul>

			<span>
				{user && (
					<Button shape="rounded" onClick={() => logOutMutation.mutate()}>
						<FontAwesomeIcon icon={faGamepad} />
						<span className="ml-4">Log Out</span>
					</Button>
				)}
				{!user && (
					<Link href={URLS.LOGIN}>
						<Button shape="rounded">
							<FontAwesomeIcon icon={faGamepad} />
							<span className="ml-4">Get Started</span>
						</Button>
					</Link>
				)}
			</span>
		</nav>
	);
};

export default Navbar;
