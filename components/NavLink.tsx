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

	const classes = () => {
		return router.pathname === href ? 'link link--active' : 'link';
	};

	return (
		<Link href={href}>
			<a className={classes()}>{children}</a>
		</Link>
	);
};

export default NavLink;
