import { FC } from 'react';
import styles from './Loading.module.scss';

type LoadingProps = {
	fullScreen?: boolean;
};

const Loading: FC<LoadingProps> = ({ fullScreen = false }) => {
	if (fullScreen) {
		return (
			<div className="min-h-main-content flex items-center">
				<div className={styles.spinner}>
					<div className={styles.dot1}></div>
					<div className={styles.dot2}></div>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.spinner}>
			<div className={styles.dot1}></div>
			<div className={styles.dot2}></div>
		</div>
	);
};

export default Loading;
