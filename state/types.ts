export type SetFn<State> = (
    partial:
        | State
        | Partial<State>
        | ((state: State) => State | Partial<State>),
    replace?: boolean | undefined
) => void;
