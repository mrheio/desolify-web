import { default as NextLink, LinkProps } from 'next/link';
import { forwardRef, PropsWithChildren } from 'react';

import { joinClasses } from '@utils/funcs';

import styles from '@components/Button/Button.module.scss';

interface Props extends LinkProps {
	underline?: boolean;
	className?: string;
	fullWidth?: boolean;
	primary?: boolean;
	secondary?: boolean;
	naked?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<Props>>(
	({ children, underline, fullWidth, className, primary, secondary, naked, href, ...rest }, ref) => {
		const linkClasses = joinClasses(
			primary && styles['button--primary'],
			secondary && styles['button--secondary'],
			fullWidth && 'full-width',
			className,
		);

		return (
			<NextLink href={href} passHref>
				<a
					ref={ref}
					style={{ textDecoration: underline ? 'underline' : undefined }}
					className={linkClasses}
					{...rest}
				>
					{children}
				</a>
			</NextLink>
		);
	},
);

Link.displayName = 'Link';

export default Link;
