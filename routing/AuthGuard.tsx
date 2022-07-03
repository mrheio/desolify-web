import { useRouter } from 'next/router';
import { FC, ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state';

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    return children;
};

type AuthGuardProps = {
    children: ReactElement;
};

export default AuthGuard;
