import { AppState, State } from "./model";
import {
  Actions,
} from "./cellActions";
import {
  CLEAR_HISTORY,
  UNDO,
  REDO
} from "./actionTypes";
import { undo } from "./undoredo";

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
