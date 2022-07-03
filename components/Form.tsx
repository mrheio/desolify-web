import { FormEventHandler } from 'react';

const Form = ({ error, children, onSubmit, className, ...rest }: FormProps) => {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        onSubmit?.(event);
    };

    const getClasses = () => {
        let classes = `w-full max-w-lg mx-auto`;
        if (className) {
            classes = `${classes} ${className}`;
        }
        return classes;
    };

    return (
        <form className={getClasses()} onSubmit={handleSubmit} {...rest}>
            {children}
            {error && (
                <div className='text-center text-error font-semibold '>
                    {error}
                </div>
            )}
        </form>
    );
};

type FormProps = React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
> & {
    error?: string | null;
};

export default Form;
