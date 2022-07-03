import React, { forwardRef } from 'react';

const StyledInput = forwardRef(
    (
        {
            label,
            name,
            placeholder,
            value,
            onChange,
            error,
            type = 'text',
        }: StyledInputProps,
        ref?: React.LegacyRef<HTMLInputElement>
    ) => {
        const getClasses = () => {
            if (error) {
                return 'w-full outline-none border-2 border-error rounded-md p-2';
            }
            return 'w-full outline-none border-2  border-primary rounded-md p-2 focus:border-primary-300';
        };

        return (
            <div>
                {label && (
                    <label className='block pb-1' htmlFor={name}>
                        {label}
                    </label>
                )}
                <input
                    className={getClasses()}
                    name={name}
                    title={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    ref={ref}
                    type={type}
                />
                {error && <div className='text-error pt-1'>{error}</div>}
            </div>
        );
    }
);
StyledInput.displayName = 'StyledInput';

type StyledInputProps = {
    label?: string;
    name?: string;
    placeholder?: string;
    value?: string | number | readonly string[];
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    error?: string;
    type?: React.HTMLInputTypeAttribute | undefined;
};

export default StyledInput;
