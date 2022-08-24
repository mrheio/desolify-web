import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { UrlObject } from 'url';
import Link from './Link';

type NavLinkProps = {
	href: string | UrlObject;
	children: ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
	const router = useRouter();

	const getStyle = () => (router.pathname === href ? 'active' : 'normal');

	return (
		<Link style={getStyle()} href={href}>
			{children}
		</Link>
	);
};

export default NavLink;
