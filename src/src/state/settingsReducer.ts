import { ResizeEvent, PaintEvent } from "./cellActions";
import { RESIZE_START, RESIZE, RESIZE_END, PAINT } from "./actionTypes";
import { State } from "./model";
import { getInitialState } from "./default";

export type SettingsActions = ResizeEvent | PaintEvent;

export type SettingsState = {
    state: State,
    boardSize: number,
    enableHighlight: boolean,
}

export function settingsReducer(state:SettingsState = {...getInitialState().settings}, action: SettingsActions): SettingsState {
    switch (action.type) {
        case RESIZE:
        case RESIZE_START:
        case RESIZE_END:
            return doResize(state, action)
        case PAINT:
            switch (action.subtype) {
                case "BEGIN_PAINING":
                    return {
                        ...state,
                        state: State.PAINTING
                    }
                case "END_PAINING":
                    return {
                        ...state,
                        state: State.NORMAL
                    }
                    default:
                        return state;
            }
        default:
            return state;
    }
}

function doResize(state: SettingsState, data: ResizeEvent): SettingsState {
    if (data.type === RESIZE) {
        return {
            ...state,
            boardSize: data.size
        };
    }
    const freeze = data.type === RESIZE_START;
    return {
        ...state,
        state: freeze ? State.FROZEN : State.NORMAL
    };
}