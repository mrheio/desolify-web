import { joinClasses } from '@utils/basics';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './InputField.module.scss';

type InputFieldProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	label?: string;
	variant?: 'primary' | 'secondary';
	onDark?: boolean;
};

const InputField = ({ label, variant = 'primary', onDark = false, ...rest }: InputFieldProps) => {
	return (
		<div className={styles['input-container']}>
			{label && <label className={joinClasses(styles.label, onDark && styles['label-light'])}>{label}</label>}
			<input className={joinClasses(styles.input, styles[`input-${variant}`])} {...rest} />
		</div>
	);
};

export default InputField;
