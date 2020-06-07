import { ShowToastEvent, HideToastEvent } from "./uiActions";
import { SHOW_TOAST, HIDE_TOAST } from "./actionTypes";

export type UIState = {
    toast: String | null,
}

export type UIAction = ShowToastEvent | HideToastEvent;

export function UIReducer(state: UIState = { toast: null }, action: UIAction) {
    switch (action.type) {
        case SHOW_TOAST:
        case HIDE_TOAST:
            return state;

        default: return state;
    }
}