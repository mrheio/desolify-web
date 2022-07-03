import { ButtonHTMLAttributes } from 'react';

const IconButton = ({
    style = 'primary',
    children,
    type = 'button',
    onClick,
    ...rest
}: IconButtonProps) => {
    const getClasses = () => {
        let classes = 'h-16 w-16 rounded-full';
        if (style === 'error') {
            classes = `${classes} text-error hover:text-error-300`;
        }
        return classes;
    };

    return (
        <button
            className={getClasses()}
            type={type}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    style?: 'primary' | 'error';
};

export default IconButton;
