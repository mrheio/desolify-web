import { ReactNode, useEffect } from 'react';

const Drawer = ({ opened = false, onClickOutside, children }: DrawerProps) => {
    const getOverlayClasses = () => {
        let classes = 'top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-20';
        return `${classes} ${opened ? 'fixed' : 'hidden'}`;
    };

    const getClasses = () => {
        let classes =
            'fixed top-0 right-0 p-4 w-[65%] max-w-md bg-foreground h-screen z-50 smooth-transition';
        return `${classes} ${
            opened ? 'visible' : 'invisible translate-x-full'
        }`;
    };

    useEffect(() => {
        if (opened) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'visible';
        }
    }, [opened]);

    return (
        <>
            <aside className={getClasses()}>{children}</aside>
            <label
                className={getOverlayClasses()}
                onClick={onClickOutside}
            ></label>
        </>
    );
};

type DrawerProps = {
    opened: boolean;
    onClickOutside: () => void;
    children: ReactNode;
};

export default Drawer;
