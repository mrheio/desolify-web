import styles from './LoadingIndicator.module.css';

const LoadingIndicator = () => {
	return (
		<div className={styles.loading}>
			<div></div>
			<div></div>
		</div>
	);
};

export default LoadingIndicator;
