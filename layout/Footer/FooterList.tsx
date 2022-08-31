import { NavLink } from '@components';

type FooterListItem = {
	text: string;
	link: string;
};

type FooterListProps = {
	items: FooterListItem[];
};

const FooterList = ({ items }: FooterListProps) => {
	return (
		<ul className="space-y-4">
			{items.map((item) => (
				<li key={item.link}>
					<NavLink href={item.link}>{item.text}</NavLink>
				</li>
			))}
		</ul>
	);
};

export default FooterList;
