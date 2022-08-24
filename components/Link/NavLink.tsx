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

	return (
		<Link className={router.pathname === href ? 'link-active' : ''} href={href}>
			{children}
		</Link>
	);
};

export default NavLink;
