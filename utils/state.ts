export type StateWithStatus = {
    loading: Record<string, boolean> | boolean;
    error: Record<string, string | null> | string | null;
    success: Record<string, string | null> | string | null;
};

const resetLoading = (state: StateWithStatus) => {
    let { loading } = state;
    if (typeof loading === 'object') {
        for (const [k, v] of Object.entries(loading)) {
            loading[k] = false;
        }
        return;
    }
    if (typeof loading === 'boolean') {
        loading = false;
        return;
    }
};

const resetError = (state: StateWithStatus) => {
    let { error } = state;
    if (typeof error === 'object' && error !== null) {
        for (const [k, v] of Object.entries(error)) {
            error[k] = null;
        }
        return;
    }
    if (typeof error === 'string') {
        error = null;
        return;
    }
};

const resetSuccess = (state: StateWithStatus) => {
    let { success } = state;
    if (typeof success === 'object' && success !== null) {
        for (const [k, v] of Object.entries(success)) {
            success[k] = null;
        }
        return;
    }
    if (typeof success === 'string') {
        success = null;
        return;
    }
};

export const resetAllStatuses = (state: StateWithStatus) => {
    resetLoading(state);
    resetSuccess(state);
    resetError(state);
};

export const resetOperationStatus = (
    state: StateWithStatus,
    operation: string
) => {
    const { loading, error, success } = state;
    if (typeof loading === 'object') {
        loading[operation] = false;
    }
    if (typeof error === 'object' && error !== null) {
        error[operation] = null;
    }
    if (typeof success === 'object' && success !== null) {
        success[operation] = null;
    }
};
