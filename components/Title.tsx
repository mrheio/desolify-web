const Title = ({ text, size, className }: TitleProps) => {
    const getClasses = () => {
        let classes = className ?? '';
        if (size === 's') {
            classes = `${classes} text-lg mb-2`;
        }
        if (size === 'm') {
            classes = `${classes} text-xl mb-4`;
        }
        if (size === 'l') {
            classes = `${classes} text-2xl mb-6`;
        }
        if (size === 'xl') {
            classes = `${classes} text-3xl mb-8`;
        }
        if (size === 'xxl') {
            classes = `${classes} text-4xl mb-16`;
        }
        return classes;
    };

    if (size === 's') {
        return <h5 className={getClasses()}>{text}</h5>;
    }

    if (size === 'm') {
        return <h4 className={getClasses()}>{text}</h4>;
    }

    if (size === 'l') {
        return <h3 className={getClasses()}>{text}</h3>;
    }

    if (size === 'xl') {
        return <h2 className={getClasses()}>{text}</h2>;
    }

    if (size === 'xxl') {
        return <h1 className={getClasses()}>{text}</h1>;
    }

    return null;
};

type TitleProps = {
    text: string;
    size: 's' | 'm' | 'l' | 'xl' | 'xxl';
    className?: string;
};

export default Title;
