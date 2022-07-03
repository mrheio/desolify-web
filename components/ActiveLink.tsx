import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { UrlObject } from 'url';

const ActiveLink: FunctionComponent<ActiveLinkType> = ({
    href,
    children,
    ...props
}) => {
    const router = useRouter();

    const getClasses = () => {
        if (router.pathname === href) {
            return 'link link--active';
        }
        return 'link';
    };

    return (
        <Link href={href}>
            <a className={getClasses()}>{children}</a>
        </Link>
    );
};

export default ActiveLink;

type ActiveLinkType = {
    href: string | UrlObject;
    children: JSX.Element | string;
};
