import { NavLink } from '@components';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { URLS } from '@utils/misc';
import { FC } from 'react';

type Props = {};

const Footer: FC<Props> = ({ }) => {
	return (
		<footer className=" bg-[#23212a] p-10 text-slate-400 ">
			<div className="flex flex-col space-y-8">
				<div className="flex justify-center">
					<ul className='space-y-4'>
						<li>
							<NavLink href={URLS.ABOUT}>About</NavLink>
						</li>
						<li>
							<NavLink href={URLS.HELP}>Get Help</NavLink>
						</li>
						<li>

							<NavLink href={URLS.GUIDELINES}>Guidelines</NavLink>
						</li>
					</ul>
				</div>
				<div className='border-t-purple-900 border-t-4 border-dotted p-4'>
					<div className="flex justify-between items-center">
						<span className='font-semibold text-2xl text-white'>
							DESOLIFY
						</span>
						<NavLink href={URLS.AUTH}>
							<span className='font-normal text-md text-white bg-indigo-500 px-4 py-2 rounded-full'>
								<FontAwesomeIcon icon={faGamepad} />
								Get Started
							</span>
						</NavLink>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
