import { Button, NavLink } from '../components';

const Header = () => {
	return (
		<header className="fixed w-full">
			<nav>
				<ul>
					<li>
						<NavLink href="/">Teams</NavLink>
					</li>
					<li>
						<NavLink href="/">Games</NavLink>
					</li>
				</ul>
			</nav>
			<Button>Get Started</Button>
		</header>
	);
};

export default Header;
