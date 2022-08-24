import { default as NextLink, LinkProps } from 'next/link';
import { forwardRef, PropsWithChildren } from 'react';

interface Props extends LinkProps {
	underline?: boolean;
	className?: string;
	fullWidth?: boolean;
	style: 'normal' | 'active';
}

const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<Props>>(
	({ children, underline, fullWidth, className, style = 'normal', href, ...rest }, ref) => {
		const getClasses = () => {
			return className ? `link ${className}` : 'link';
		};

		return (
			<NextLink href={href} passHref>
				<a ref={ref} className={getClasses()} data-style={style} {...rest}>
					{children}
				</a>
			</NextLink>
		);
	},
);

Link.displayName = 'Link';

export default Link;
