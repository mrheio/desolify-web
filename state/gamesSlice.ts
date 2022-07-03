import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddGameFormData, gamesService } from '../api';
import { Game } from '../models/game';
import { isCustomError } from '../utils/errors/CustomError';
import { resetAllStatuses, resetOperationStatus } from '../utils/state';

export interface GamesState {
    games: Game[];
    loading: {
        get: boolean;
        add: boolean;
        delete: boolean;
    };
    error: {
        get: string | null;
        add: string | null;
        delete: string | null;
    };
    success: {
        get: string | null;
        add: string | null;
        delete: string | null;
    };
}

const initialState: GamesState = {
    games: [],
    loading: {
        get: false,
        add: false,
        delete: false,
    },
    error: {
        get: null,
        add: null,
        delete: null,
    },
    success: {
        get: null,
        add: null,
        delete: null,
    },
};

export const getGames = createAsyncThunk<Game[], void, { rejectValue: string }>(
    'games/get',
    async (_, { rejectWithValue }) => {
        const res = await gamesService.getGames();
        return res;
    }
);

export const addGame = createAsyncThunk<
    Game,
    AddGameFormData,
    { rejectValue: string }
>('games/add', async (formData: AddGameFormData, { rejectWithValue }) => {
    try {
        const res = await gamesService.addGame(formData);
        return res;
    } catch (error) {
        if (isCustomError(error)) {
            return rejectWithValue(error.message);
        }
        throw error;
    }
});

export const deleteGame = createAsyncThunk<Game, Game, { rejectValue: string }>(
    'games/delete',
    async (game, { rejectWithValue }) => {
        await gamesService.deleteGame(game.id);
        return game;
    }
);

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        resetGamesStatuses: (state) => {
            resetAllStatuses(state);
        },
        resetGetGamesStatus: (state) => {
            resetOperationStatus(state, 'get');
        },
        resetAddGameStatus: (state) => {
            resetOperationStatus(state, 'add');
        },
        resetDeleteGameStatus: (state) => {
            resetOperationStatus(state, 'delete');
        },
        startGetGames: (state) => {
            state.loading.get = true;
        },
        setGames: (state, action: PayloadAction<Game[]>) => {
            state.games = action.payload;
            state.loading.get = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getGames.pending, (state) => {
                state.loading.get = true;
                state.success.get = null;
                state.error.get = null;
            })
            .addCase(getGames.fulfilled, (state, action) => {
                state.games = action.payload;
                state.loading.get = false;
                state.success.get = 'Games fetched';
            });
        builder
            .addCase(addGame.pending, (state) => {
                state.loading.add = true;
                state.success.add = null;
                state.error.add = null;
            })
            .addCase(addGame.fulfilled, (state, action) => {
                state.games.push(action.payload);
                state.loading.add = false;
                state.success.add = `Game ${action.payload.name} added`;
            })
            .addCase(addGame.rejected, (state, action) => {
                state.loading.add = false;
                if (action.payload) {
                    state.error.add = action.payload;
                }
            });
        builder
            .addCase(deleteGame.pending, (state) => {
                state.loading.delete = true;
                state.success.delete = null;
                state.error.delete = null;
            })
            .addCase(deleteGame.fulfilled, (state, action) => {
                state.games = state.games.filter(
                    (e) => e.id !== action.payload.id
                );
                state.loading.delete = false;
                state.success.delete = `Game ${action.payload.name} removed`;
            });
    },
});

export const {
    resetGamesStatuses,
    resetGetGamesStatus,
    resetAddGameStatus,
    resetDeleteGameStatus,
    setGames,
} = gamesSlice.actions;

const gamesReducer = gamesSlice.reducer;

export default gamesReducer;
