import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type ButtonStyle = 'primary' | 'secondary' | 'naked';
type ButtonVariant = 'simple' | 'google';
type ButtonShape = 'normal' | 'rounded';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	style?: ButtonStyle;
	variant?: ButtonVariant;
	shape?: ButtonShape;
	icon?: JSX.Element;
};

const Button = ({
	style = 'primary',
	variant = 'simple',
	shape = 'normal',
	type = 'button',
	icon,
	children,
	...rest
}: ButtonProps) => {
	return (
		<button
			className={[
				styles.button,
				styles[`button--${style}`],
				styles[`button--${variant}`],
				styles[`button--${shape}`],
				icon && styles['button--with-icon'],
			].join(' ')}
			type={type}
			{...rest}
		>
			{icon && icon}
			{children}
		</button>
	);
};

export default Button;
