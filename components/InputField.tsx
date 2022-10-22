import { ChangeEventHandler, forwardRef, HTMLInputTypeAttribute } from 'react';
import { joinClasses } from 'utils/basics';

type InputFieldProps = {
	name: string;
	labelText?: string;
	placeholder?: string;
	fluid?: boolean;
	error?: string;
	type?: HTMLInputTypeAttribute;
	onChange?: ChangeEventHandler<HTMLInputElement>;
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
	({ name, labelText, placeholder, fluid = false, error, type = 'text', onChange }, ref) => {
		if (labelText) {
			return (
				<div {...(fluid ? { className: 'w-full' } : {})}>
					<label className="block text-white" htmlFor={name}>
						{labelText}
					</label>
					<input
						className={joinClasses(
							'p-2 rounded-sm outline-none border-2',
							!error && 'border-transparent active:border-primary-700 focus:border-primary-700',
							error && 'border-rose-600',
							fluid && 'w-full',
						)}
						name={name}
						title={name}
						type={type}
						placeholder={placeholder}
						ref={ref}
						onChange={onChange}
					/>
					{error && <span className="text-rose-600">{error}</span>}
				</div>
			);
		}

		return (
			<>
				<input
					className={joinClasses(
						'p-2 rounded-sm outline-none border-2',
						!error && 'border-transparent active:border-primary-700 focus:border-primary-700',
						error && 'border-rose-600',
						fluid && 'w-full',
					)}
					name={name}
					title={name}
					type={type}
					placeholder={placeholder}
					ref={ref}
					onChange={onChange}
				/>
				{error && <span className="text-rose-600">{error}</span>}
			</>
		);
	},
);
InputField.displayName = 'InputField';

export default InputField;
