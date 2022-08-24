import { FC } from 'react';

import { joinClasses } from '@utils/basics';

import styles from '@styles/pages/Index.module.scss';

type Props = {};

const Home: FC<Props> = () => {
	return (
		<>
			<section
				className={joinClasses(
					'mh-100-nav grid grid-cols-2 grid-rows-2 bg-gradient-primary',
					styles['section-one'],
				)}
			>
				<h1 className="text-white fw-bold fs-primary-heading">
					Find teams.
					<br />
					Or players.
					<br />
					Or both.
				</h1>
			</section>
		</>
	);
};

export default Home;
