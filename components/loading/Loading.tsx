import { ReactNode } from 'react';
import LoadingIndicator from './LoadingIndicator';
import LoadingScreen from './LoadingScreen';

const Loading = ({ condition, screen = false, children }: LoadingProps) => {
	return condition ? screen ? <LoadingScreen /> : <LoadingIndicator /> : <>{children}</>;
};

export default Loading;

type LoadingProps = {
	condition: boolean;
	screen?: boolean;
	children: ReactNode | ReactNode[];
};
