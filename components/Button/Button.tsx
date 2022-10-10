import { ButtonHTMLAttributes } from 'react';
import { joinClasses } from '../../utils/basics';
import styles from './Button.module.scss';

type ButtonStyle = 'primary' | 'secondary' | 'naked';
type ButtonVariant = 'google';
type ButtonShape = 'rounded';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	style?: ButtonStyle;
	variant?: ButtonVariant;
	shape?: ButtonShape;
};

const Button = ({ style = 'primary', variant, shape, className, type = 'button', children, ...rest }: ButtonProps) => {
	return (
		<button
			className={joinClasses(
				styles.button,
				styles[`button-${style}`],
				variant && styles[`button-${variant}`],
				shape && styles[`button-${shape}`],
				className,
			)}
			type={type}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
