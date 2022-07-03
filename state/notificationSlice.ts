import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NotificationState {
    message: string | null;
    type: 'success' | 'error' | 'warning' | 'info' | null;
}

const initialState: NotificationState = {
    message: null,
    type: null,
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        showSuccess: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
            state.type = 'success';
        },
        showError: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
            state.type = 'error';
        },
        showWarning: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
            state.type = 'warning';
        },
        showInfo: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
            state.type = 'info';
        },
        resetNotification: (state) => {
            state.message = null;
            state.type = null;
        },
    },
});

export const {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    resetNotification,
} = notificationSlice.actions;

const notificationReducer = notificationSlice.reducer;

export default notificationReducer;
