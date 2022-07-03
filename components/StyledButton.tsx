import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

const StyledButton: FunctionComponent<StyledButtonProps> = ({
    fluid = false,
    circle = false,
    type,
    onClick,
    children,
    ...rest
}) => {
    return (
        <button
            className={`bg-primary text-on-primary rounded-md px-4 py-2 font-semibold hover:bg-primary-400 smooth-transition mt-4 ${
                fluid && 'w-full'
            } ${circle ? 'rounded-full w-20 h-20' : ''}`}
            type={type}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};

export default StyledButton;

type StyledButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    fluid?: boolean;
    circle?: boolean;
};
