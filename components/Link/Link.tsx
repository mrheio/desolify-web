import { joinClasses } from '@utils/basics';
import { default as NextLink, LinkProps } from 'next/link';
import { forwardRef, PropsWithChildren } from 'react';

interface Props extends LinkProps {
	underline?: boolean;
	className?: string;
	fullWidth?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<Props>>(
	({ children, underline, fullWidth, className, href, ...rest }, ref) => {
		return (
			<NextLink href={href} passHref className={joinClasses('link', className)} {...rest}>
				<a ref={ref}>{children}</a>
			</NextLink>
		);
	},
);

Link.displayName = 'Link';

export default Link;
