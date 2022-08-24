import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type ButtonStyle = 'primary' | 'secondary' | 'naked';
type ButtonVariant = 'simple' | 'google';
type ButtonShape = 'normal' | 'rounded';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	style?: ButtonStyle;
	variant?: ButtonVariant;
	shape?: ButtonShape;
};

const Button = ({
	style = 'primary',
	variant = 'simple',
	shape = 'normal',
	className,
	type = 'button',
	children,
	...rest
}: ButtonProps) => {
	return (
		<button
			className={`${styles.button}`}
			data-style={style}
			data-variant={variant}
			data-shape={shape}
			type={type}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
