import { joinClasses } from '@utils/basics';
import Image from 'next/image';
import { FC } from 'react';

import styles from './GamingIllustration.module.scss';

type Props = {};

const GamingIllustration: FC<Props> = ({}) => {
	return (
		<span className={joinClasses('relative grid grid-cols-3 grid-rows-2 place-items-center self-end h-full')}>
			<Image
				src="/images/gaming_illustrations_bg.png"
				layout="fill"
				objectFit="contain"
				alt="background bubbles"
			/>
			<span className={joinClasses('self-end justify-self-end', styles['gaming-illustration-image-1'])}>
				<Image
					src={'/svg/gaming_illustration_1.svg'}
					width={220}
					height={220}
					objectFit="contain"
					alt="gaming controller"
				/>
			</span>
			<span className={joinClasses('self-end justify-self-start', styles['gaming-illustration-image-2'])}>
				<Image
					src={'/svg/gaming_illustration_2.svg'}
					width={220}
					height={220}
					objectFit="contain"
					alt="gaming planet"
				/>
			</span>
			<span className={joinClasses('self-start justify-self-start', styles['gaming-illustration-image-3'])}>
				<Image
					src={'/svg/gaming_illustration_3.svg'}
					width={220}
					height={220}
					objectFit="contain"
					alt="gaming connection"
				/>
			</span>
		</span>
	);
};

export default GamingIllustration;
