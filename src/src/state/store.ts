import { AppReducer } from "./reducer";
import { createStore, combineReducers } from "redux";
import undoable from 'redux-undo';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cellReducer } from './cellReducer'
import { settingsReducer } from './settingsReducer'

const rootReducer = combineReducers({
    cells: undoable(cellReducer),
    settings: settingsReducer,
    main: AppReducer
  })
export const store = createStore(
  rootReducer,
  composeWithDevTools()
);
export type RootState = ReturnType<typeof rootReducer>;

store.subscribe(() => localStorage.setItem("state", JSON.stringify(store.getState())));