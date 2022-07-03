import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authService, LoginFormData, RegisterFormData } from '../api';
import { AppUser } from '../models/user';
import { isCustomError } from '../utils/errors/CustomError';
import { resetAllStatuses, resetOperationStatus } from '../utils/state';

export interface AuthState {
    user: AppUser | null;
    loading: {
        get: boolean;
        login: boolean;
        register: boolean;
        logout: boolean;
    };
    error: {
        get: string | null;
        login: string | null;
        register: string | null;
        logout: string | null;
    };
    success: {
        get: string | null;
        login: string | null;
        register: string | null;
        logout: string | null;
    };
}

const initialState: AuthState = {
    user: null,
    loading: {
        get: false,
        login: false,
        register: false,
        logout: false,
    },
    error: {
        get: null,
        login: null,
        register: null,
        logout: null,
    },
    success: {
        get: null,
        login: null,
        register: null,
        logout: null,
    },
};

export const login = createAsyncThunk<
    void,
    LoginFormData,
    { rejectValue: string }
>('auth/logIn', async (formData, { rejectWithValue }) => {
    try {
        await authService.logInWithEmailAndPassword(formData);
    } catch (error) {
        if (isCustomError(error)) {
            return rejectWithValue(error.message);
        }
        throw error;
    }
});

export const register = createAsyncThunk<
    void,
    RegisterFormData,
    { rejectValue: string }
>('auth/register', async (formData, { rejectWithValue }) => {
    try {
        await authService.register(formData);
    } catch (error) {
        if (isCustomError(error)) {
            return rejectWithValue(error.message);
        }
        throw error;
    }
});

export const logout = createAsyncThunk('auth/logOut', async (_) => {
    await authService.logOut();
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuthStatuses: (state) => {
            resetAllStatuses(state);
        },
        resetGetUserStatus: (state) => {
            resetOperationStatus(state, 'get');
        },
        resetLoginStatus: (state) => {
            resetOperationStatus(state, 'login');
        },
        resetRegisterStatus: (state) => {
            resetOperationStatus(state, 'register');
        },
        resetLogoutStatus: (state) => {
            resetOperationStatus(state, 'logout');
        },
        startSetUser: (state) => {
            state.loading.get = true;
        },
        setUser: (state, action: PayloadAction<AppUser | null>) => {
            state.user = action.payload;
            state.loading.get = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading.login = true;
                state.error.login = null;
                state.success.login = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading.login = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading.login = false;
                if (action.payload) {
                    state.error.login = action.payload;
                }
            });
        builder
            .addCase(register.pending, (state) => {
                state.loading.register = true;
                state.error.register = null;
                state.success.register = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading.register = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading.register = false;
                if (action.payload) {
                    state.error.register = action.payload;
                }
            });
        builder
            .addCase(logout.pending, (state) => {
                state.loading.logout = true;
                state.error.logout = null;
                state.success.logout = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading.logout = false;
            });
    },
});

export const {
    resetAuthStatuses,
    resetLoginStatus,
    resetRegisterStatus,
    resetLogoutStatus,
    resetGetUserStatus,
    startSetUser,
    setUser,
} = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
