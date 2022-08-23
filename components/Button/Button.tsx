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

const getClasses = (style: ButtonStyle, variant: ButtonVariant, shape: ButtonShape) =>
	`${styles.Button} ${styles.Button}--${style} ${styles.Button}--${variant} ${styles.Button}--${shape}`;

const Button = ({
	style = 'primary',
	variant = 'simple',
	shape = 'normal',
	type = 'button',
	children,
	...rest
}: ButtonProps) => {
	return (
		<button className={getClasses(style, variant, shape)} type={type} {...rest}>
			{children}
		</button>
	);
};

export default Button;
