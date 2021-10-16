import { AppState } from "./model";

export function undo(state: AppState) : AppState {
    return {
        ...state, 
        history: {
            ...state.history,
            activeItem: state.history.activeItem - 1
        }
    }
}

export function redo(state: AppState) : AppState {
    return state;
}
