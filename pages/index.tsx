import { FC } from 'react';

import Image from 'next/image';
import { Card, DualSection } from '../components';

type Props = {};

const Home: FC<Props> = () => {
	return (
		<section className="py-8">
			<DualSection
				leftElement={
					<div className="w-full self-center">
						<h1 className="text-white fw-bold fs-primary-heading">
							Find teams.
							<br />
							Or players.
							<br />
							Or both.
						</h1>
					</div>
				}
				rightElement={
					<div className="w-full sm:grid sm:grid-cols-3 sm:grid-rows-2">
						<div className="hidden sm:block">
							<Image
								src="/svg/gaming_illustration_1.svg"
								width={220}
								height={220}
								objectFit="contain"
								alt="gaming controller"
							/>
						</div>

						<div className="sm:col-start-3">
							<Image
								src="/svg/gaming_illustration_2.svg"
								width={220}
								height={220}
								objectFit="contain"
								alt="gaming planet"
							/>
						</div>

						<div className="hidden sm:block col-start-2 row-start-2">
							<Image
								src="/svg/gaming_illustration_3.svg"
								width={220}
								height={220}
								objectFit="contain"
								alt="gaming connection"
							/>
						</div>
					</div>
				}
			/>

			<DualSection
				leftElement={
					<div className="hidden sm:block sm:w-full relative">
						<Image
							src="/svg/play_together_illustration.svg"
							layout="fill"
							objectFit="contain"
							alt="play together"
						/>
					</div>
				}
				rightElement={
					<Card
						title="Lorem, ipsum dolor."
						content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iusto voluptatibus
					pariatur architecto sapiente! Dolor quo alias itaque esse perferendis aut laboriosam
					molestias ullam?"
					/>
				}
			/>

			<DualSection
				leftElement={
					<Card
						title="Lorem, ipsum."
						content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis voluptatibus eum
						laudantium."
					/>
				}
				rightElement={
					<div className="hidden sm:block sm:w-full relative">
						<Image
							src="/svg/compete_illustration.svg"
							layout="fill"
							objectFit="contain"
							alt="play together"
						/>
					</div>
				}
			/>
		</section>
	);
};

export default Home;
