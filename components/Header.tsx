import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state';
import ActiveLink from './ActiveLink';

const Header = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <header className='fixed w-full'>
            <nav className='h-navbar flex gap-4 justify-between items-center bg-white px-2 shadow-md'>
                <span className='flex gap-4'>
                    <ActiveLink href='/'>Home</ActiveLink>
                    {user && (
                        <>
                            <ActiveLink href='/teams'>Teams</ActiveLink>
                            <ActiveLink href='/games'>Games</ActiveLink>
                        </>
                    )}
                </span>

                <span className='flex gap-4'>
                    {!user && (
                        <>
                            <ActiveLink href='/login'>Login</ActiveLink>
                            <ActiveLink href='/register'>Register</ActiveLink>
                        </>
                    )}
                    {user?.roles?.admin && (
                        <ActiveLink href='/admin'>Admin</ActiveLink>
                    )}
                </span>
            </nav>
        </header>
    );
};

export default Header;
