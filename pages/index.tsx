import { FC } from 'react';

import styles from '@styles/pages/Index.module.scss';

type Props = {};

const Home: FC<Props> = () => {
	return (
		<>
			<section className={styles.homepage}>
				<h1>Home screen</h1>
			</section>
		</>
	);
};

export default Home;
