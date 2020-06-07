import { AppState, State } from "./model";
import {
  Actions,
} from "./cellActions";
import { defaultState } from "./default";
import {
  HIGHLIGHT_CHANGE,
  RESIZE,
  RESIZE_START,
  RESIZE_END,
  CLEAR_HISTORY,
  UNDO,
  REDO
} from "./actionTypes";
import { undo } from "./undoredo";

const validStateAction = (state: State, action: Actions) => {
  switch (state) {
    case State.NORMAL:
      // All things can happen when state is normal
      return true;
    case State.FROZEN:
      return (
        action.type === RESIZE ||
        action.type === RESIZE_END ||
        action.type === RESIZE_START
      );
  }
  return true;
};

export function AppReducer (
  state: AppState = {...defaultState},
  action: Actions
): AppState {
  if (!validStateAction(state.settings.state, action)) {
    return state;
  }

  // if (isPainting(state, action)) {
  //   return paintReducer(state, action);
  // }

  switch (action.type) {

    case HIGHLIGHT_CHANGE:
      return doChangeHighlight(state, action.value);
    case CLEAR_HISTORY: 
      return doClearHistory(state);
    case UNDO:
      return undo(state)
    case REDO:
      return undo(state)
    default:
      return state;
  }
}

function doClearHistory(state: AppState) : AppState {
  return {
    ...state,
    history: {
      items: [],
      activeItem: -1
    }
  }
}

function doChangeHighlight(state: AppState, value: boolean): AppState {
  return {
    ...state,
    settings: {
      ...state.settings,
      enableHighlight: value
    }
  };
}

