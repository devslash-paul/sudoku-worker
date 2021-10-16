import { AppState, State } from "./model";
import {
  Actions,
} from "./cellActions";
import {
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
  state: AppState = {history: {
    activeItem: -1, items: []
  }},
  action: Actions
): AppState {
  switch (action.type) {
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
