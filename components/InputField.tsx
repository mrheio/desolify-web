import { FC, HTMLInputTypeAttribute } from 'react';
import { joinClasses } from 'utils/basics';

type InputFieldProps = {
	name: string;
	labelText?: string;
	fluid?: boolean;
	error?: string;
	type?: HTMLInputTypeAttribute;
};

const InputField: FC<InputFieldProps> = ({ name, labelText, fluid = false, error, type = 'text' }) => {
	return (
		<div {...(fluid ? { className: 'w-full' } : {})}>
			{labelText && (
				<label className="block text-white" htmlFor={name}>
					{labelText}
				</label>
			)}
			<input
				className={joinClasses(
					'p-2 rounded-sm outline-none border-2',
					!error && 'border-transparent',
					error && 'border-rose-600',
					fluid && 'w-full',
				)}
				name={name}
				title={name}
				type={type}
			/>
			{error && <span className="text-rose-600">{error}</span>}
		</div>
	);
};

export default InputField;
