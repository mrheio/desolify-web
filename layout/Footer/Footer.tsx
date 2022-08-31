import { Button, NavLink } from '@components';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { URLS } from '@utils/misc';
import { FC } from 'react';
import FooterList from './FooterList';

const urls = [
	{
		text: 'About',
		link: URLS.ABOUT,
	},
	{
		text: 'Get Help',
		link: URLS.HELP,
	},
	{
		text: 'Guidelines',
		link: URLS.GUIDELINES,
	},
];

type Props = {};

const Footer: FC<Props> = ({}) => {
	return (
		<footer className=" bg-[#23212a] p-10 text-slate-400">
			<div className="flex flex-col space-y-8">
				<div className="flex justify-center">
					<FooterList items={urls} />
				</div>
				<div className="border-t-purple-900 border-t-4 border-dotted p-4">
					<div className="flex justify-between items-center">
						<span className="font-semibold text-2xl text-white">DESOLIFY</span>
						<Button shape="rounded">
							<NavLink href={URLS.AUTH}>
								<FontAwesomeIcon icon={faGamepad} />
								<span className="ml-4">Get Started</span>
							</NavLink>
						</Button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
