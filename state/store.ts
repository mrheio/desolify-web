import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import gamesReducer from './gamesSlice';
import notificationReducer from './notificationSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        games: gamesReducer,
        notification: notificationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
