import { FC, ReactNode } from 'react';
import styles from './Loading.module.scss';

type LoadingProps = {
	fullScreen?: boolean;
	isLoading?: boolean;
	children?: ReactNode;
};

const Loading: FC<LoadingProps> = ({ fullScreen = false, isLoading = false, children }) => {
	if (!isLoading) {
		return children;
	}

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
