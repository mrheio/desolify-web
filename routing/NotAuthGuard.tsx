import { useRouter } from 'next/router';
import { FC, ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state';

const NotAuthGuard: FC<NotAuthGuardProps> = ({ children }) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push('/');
        }
    }, [user, router]);

    return children;
};

type NotAuthGuardProps = {
    children: ReactElement;
};

export default NotAuthGuard;
