import Image from 'next/image';
import { FC } from 'react';

import { BlurCard, GamingIllustration } from '@components';

type Props = {};

const HomeCallToAction: FC<Props> = ({}) => {
	return (
		<section className={'relative grid grid-cols-rows-2-2 mh-100-nav bg-gradient-primary'}>
			<h1 className="text-white fw-bold fs-primary-heading place-self-center">
				Find teams.
				<br />
				Or players.
				<br />
				Or both.
			</h1>

			<span className="py-4">
				<GamingIllustration />
			</span>

			<span className={'inline-block relative p-4 justify-self-end self-top h-max'}>
				<Image
					src="/svg/play_together_illustration.svg"
					width={480}
					height={340}
					objectFit="contain"
					alt="play together"
				/>
			</span>

			<span className="p-16">
				<BlurCard className="w-full">
					<h2>
						Play with others,
						<br />
						anywhere, anytime
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsam autem, magnam suscipit
						officia sapiente aspernatur accusantium, quia, voluptas blanditiis cupiditate.
					</p>
				</BlurCard>
			</span>
		</section>
	);
};

export default HomeCallToAction;
