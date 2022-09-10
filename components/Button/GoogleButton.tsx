import { joinClasses } from '@utils/basics';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type GoogleButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const GoogleButton = ({ className, ...rest }: GoogleButtonProps) => {
	return (
		<button className={joinClasses(styles.button, 'bg-gray-50 hover:bg-white')} {...rest}>
			<img className="inline-block mr-4 w-8" src="svg/google-icon.svg" />
			Sign in with Google
		</button>
	);
};

export default GoogleButton;
