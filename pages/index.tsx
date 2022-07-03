import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { StyledButton } from '../components';
import { AppDispatch, logout, RootState } from '../state';

const Home: NextPage = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch: AppDispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logout());
    };

    return (
        <div>
            User data: {JSON.stringify(user)}
            {user && (
                <StyledButton onClick={handleLogOut}>Log out</StyledButton>
            )}
        </div>
    );
};

export default Home;
