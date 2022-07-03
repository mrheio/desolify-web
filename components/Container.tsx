import { ReactNode } from 'react';

const Container = ({ className, fluid = false, children }: ContainerProps) => {
    const getClasses = () => {
        let classes = `mx-auto ${fluid ? 'w-full' : 'max-w-3xl'}`;
        if (className) {
            classes = `${classes} ${className}`;
        }
        return classes;
    };

    return <div className={getClasses()}>{children}</div>;
};

type ContainerProps = {
    className?: string;
    fluid?: boolean;
    children: ReactNode;
};

export default Container;
