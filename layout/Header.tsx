import { Navbar } from '../components';

import { FC } from 'react';

type Props = {};

const Header: FC<Props> = ({}) => {
	return (
		<header>
			<Navbar />
		</header>
	);
};

export default Header;
