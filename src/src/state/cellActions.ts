import {
  INSERT,
  INSERT_SMALL,
  DELETE,
  DRAG_CELL,
  BLUR_CELL,
  MOVE,
  CLICK_TEXT,
  NEW,
  HIGHLIGHT_CHANGE,
  IMPORT,
  RESIZE,
  RESIZE_START,
  PAINT,
  RESIZE_END,
  BEGIN_PAINTING,
  END_PAINTING,
  SEND_COORDINATE,
  CLEAR_HISTORY,
  UNDO,
  REDO,
  SHOW_TOAST,
} from "./actionTypes";
import { Action } from 'redux';
import { Coordinate } from "./model";
import { ThunkAction } from 'redux-thunk';
import { RootState } from "./store";
import { ShowToastEvent, HideToastEvent, showToast } from "./uiActions";

export type Actions =
  | InsertEvent
  | InsertSmallEvent
  | DeleteEvent
  | ResizeEvent
  | HighlightChangeEvent
  | ImportEvent
  | CoordinateEvent
  | PaintEvent
  | NewEvent
  | ClearHistoryEvent
  | HistoryEvent 
  | ShowToastEvent;

export type CoordinateEvent = {
  type: typeof SEND_COORDINATE;
  coordinate: Coordinate;
};

export type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

export type HistoryEvent = {
  type: typeof UNDO | typeof REDO
}

export type PaintEvent = {
  type: typeof PAINT;
  subtype: typeof BEGIN_PAINTING | typeof END_PAINTING;
};

export type ImportEvent = {
  type: typeof IMPORT;
  value: string;
};

export type ClearHistoryEvent = {
  type: typeof CLEAR_HISTORY;
}

export type NewEvent = {
  type: typeof NEW;
};

export type HighlightChangeEvent = {
  type: typeof HIGHLIGHT_CHANGE;
  value: boolean;
};

export type ClickTextEvent = {
  type: typeof CLICK_TEXT;
  index: number;
  number: number;
};

export type MoveEvent = {
  type: typeof MOVE;
  direction: Direction;
};
export type BlurEvent = {
  type: typeof BLUR_CELL;
  index: number;
};
export type DragCellEvent = {
  type: typeof DRAG_CELL;
  index: number;
};
export type InsertSmallEvent = {
  type: typeof INSERT_SMALL;
  index: Array<number>;
  number: number;
};
export type InsertEvent = {
  type: typeof INSERT;
  index: number;
  number: number;
};

export type DeleteEvent = {
  type: typeof DELETE;
  index: Set<number>;
};

export type ResizeEvent =
  | {
      type: typeof RESIZE;
      size: number;
    }
  | {
      type: typeof RESIZE_START | typeof RESIZE_END;
    };

export function resize(size: number): ResizeEvent {
  return {
    type: RESIZE,
    size
  };
}

export function insertCell(index: number, number: number): InsertEvent {
  return {
    type: INSERT,
    index,
    number
  };
}

export function insertSmallCell(
  index: Array<number>,
  number: number
): InsertSmallEvent {
  return {
    type: INSERT_SMALL,
    number,
    index
  };
}

export function deleteCell(index: Set<number>): DeleteEvent {
  return {
    type: DELETE,
    index
  };
}

export const checkState = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch, getState) => {
  const state = getState();
  var str = state.cells.present.cells.map(x => x.mainNum || '0').join('')
  var resp = await fetch("/api/count?sudoku=" + str)
  var txt = await resp.text()
  if(txt == "1") {
    dispatch(showToast("Still on track"))
  } else {
    dispatch(showToast("Something is wrong"))
  }
}