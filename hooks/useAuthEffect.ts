import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authService } from '../api';
import { AppDispatch, setUser, startSetUser } from '../state';

const useAuthEffect = () => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(startSetUser());
        const sub = authService.getUser$().subscribe((val) => {
            dispatch(setUser(val));
        });

        return () => {
            sub.unsubscribe();
        };
    }, []);
};

export default useAuthEffect;
