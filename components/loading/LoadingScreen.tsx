import React from 'react';
import LoadingIndicator from './LoadingIndicator';

const LoadingScreen = () => {
	return (
		<div className="h-screen grid place-items-center">
			<LoadingIndicator />
		</div>
	);
};

export default LoadingScreen;
