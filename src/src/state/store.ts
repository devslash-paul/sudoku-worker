import { AppReducer } from "./reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import undoable from 'redux-undo';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cellReducer } from './cellReducer'
import { settingsReducer } from './settingsReducer'
import {reducer as toastrReducer} from 'react-redux-toastr'
import { UIReducer } from "./uiReducer";

const rootReducer = combineReducers({
    cells: undoable(cellReducer),
    settings: settingsReducer,
    main: AppReducer,
    ui: UIReducer,
    toastr: toastrReducer,
  })
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk,))//composeWithDevTools(),
);
export type RootState = ReturnType<typeof rootReducer>;

store.subscribe(
  () => localStorage.setItem("state", JSON.stringify(store.getState())));