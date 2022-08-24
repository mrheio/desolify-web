import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { joinClasses } from '@utils/basics';

import styles from './BlurCard.module.scss';

type Props = HTMLAttributes<HTMLDivElement> & {};

const BlurCard: FC<PropsWithChildren<Props>> = ({ children, className, ...rest }) => {
	return (
		<div
			className={joinClasses(
				'inline-flex flex-col gap-4 items-start content-center p-7 bg-blur-card backdrop-blur-xl rounded-3xl',
				styles['blur-card'],
				className,
			)}
			{...rest}
		>
			{children}
		</div>
	);
};

export default BlurCard;
