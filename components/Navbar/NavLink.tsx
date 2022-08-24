import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { UrlObject } from 'url';

type NavLinkProps = {
	href: string | UrlObject;
	children: ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
	const router = useRouter();

	const getStyle = () => (router.pathname === href ? 'active' : 'normal');

	return (
		<a className="link" data-style={getStyle()}>
			<Link href={href}>{children}</Link>
		</a>
	);
};

export default NavLink;
