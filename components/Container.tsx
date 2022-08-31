import { joinClasses } from '@utils/basics';
import { ReactNode } from 'react';

type ContainerProps = {
	className?: string;
	children: ReactNode;
};

const Container = ({ className, children }: ContainerProps) => {
	return <div className={joinClasses('max-w-full px-4 sm:max-w-4xl mx-auto', className)}>{children}</div>;
};

export default Container;
