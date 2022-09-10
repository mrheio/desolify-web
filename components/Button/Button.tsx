import { joinClasses } from '@utils/basics';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type ButtonStyle = 'primary' | 'secondary' | 'naked';
type ButtonShape = 'rounded';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	style?: ButtonStyle;
	shape?: ButtonShape;
};

const Button = ({ style = 'primary', shape, className, type = 'button', children, ...rest }: ButtonProps) => {
	return (
		<button
			className={joinClasses(
				styles.button,
				styles[`button-${style}`],
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
