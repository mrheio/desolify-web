import { default as NextLink, LinkProps } from 'next/link';
import { forwardRef, PropsWithChildren } from 'react';
import { joinClasses } from '../../utils/basics';

type Props = LinkProps & {
	underline?: boolean;
	className?: string;
	fullWidth?: boolean;
};

const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<Props>>(
	({ children, underline, fullWidth, className, href, ...rest }, ref) => {
		return (
			<NextLink href={href} passHref {...rest}>
				<a ref={ref} className={joinClasses('link', className)}>
					{children}
				</a>
			</NextLink>
		);
	},
);

Link.displayName = 'Link';

export default Link;
