import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { UrlObject } from 'url';
import Link from './Link';

type NavLinkProps = {
	href: string | UrlObject;
	children: ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
	const { pathname } = useRouter();

	return (
		<Link className={pathname === href ? 'link-active' : undefined} href={href}>
			{children}
		</Link>
	);
};

export default NavLink;
