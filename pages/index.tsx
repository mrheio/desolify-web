import { FC } from 'react';

import { joinClasses } from '@utils/basics';

import styles from '@styles/pages/Index.module.scss';

type Props = {};

const Home: FC<Props> = () => {
	return (
		<>
			<section className={joinClasses('grid grid-cols-2 grid-rows-2', styles['section-one'])}>
				<h1>Home screen</h1>
				<h1>Home screen</h1>
			</section>
		</>
	);
};

export default Home;
