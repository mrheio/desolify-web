import React from 'react';
import styles from '../styles/LoadingIndicator.module.css';

const LoadingIndicator = () => {
    return (
        <div className={styles.loading}>
            <div></div>
            <div></div>
        </div>
    );
};

export default LoadingIndicator;
