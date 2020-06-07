import { HighlightChangeEvent, ImportEvent, PaintEvent, ClearHistoryEvent, HistoryEvent, NewEvent } from "./cellActions";
import { NEW, HIGHLIGHT_CHANGE, IMPORT, BEGIN_PAINTING, END_PAINTING, PAINT, CLEAR_HISTORY, UNDO, REDO } from "./actionTypes";

export function onNew() :NewEvent{
    return {
        type: NEW, 
    }
}

export function onSetHighlight(value: boolean): HighlightChangeEvent {
    return {
        type: HIGHLIGHT_CHANGE,
        value,
    }
}

export function onImport(value: string): ImportEvent {
    return {
        type: IMPORT,
        value }
}

export function onChangePainting(value: boolean): PaintEvent {
    return {
        type: PAINT,
        subtype: value ? BEGIN_PAINTING: END_PAINTING,
    }
}
export function clearEvents(): ClearHistoryEvent {
    return {
        type: CLEAR_HISTORY,
    }
}

export function onUndo(): HistoryEvent {
    return {
        type: UNDO
    }
}

export function onRedo(): HistoryEvent {
    return {
        type: REDO
    }
}