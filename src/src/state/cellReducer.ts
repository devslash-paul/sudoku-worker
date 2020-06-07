import { CellState } from "./model";
import { InsertEvent, InsertSmallEvent, DeleteEvent, NewEvent, ImportEvent } from "./cellActions";
import { INSERT, INSERT_SMALL, DELETE, NEW, IMPORT } from "./actionTypes";
import { getInitialState } from './default'

export type WholeCellState = {
    cells: Array<CellState>
}

export type CellActions = InsertEvent | InsertSmallEvent | DeleteEvent | NewEvent | ImportEvent;

export function cellReducer(state = getInitialState().cells.present, action: CellActions): WholeCellState {
    switch (action.type) {
        case INSERT:
            return doInsert(state, action.index, action.number);
        case INSERT_SMALL:
            return doInsertSmall(state, action);
        case DELETE:
            return doDelete(state, action);
        case NEW:
            return doClearBoard(state)
        case IMPORT:
            return doImport(state, action.value)

        default:
            return state;
    }
}

function doClearBoard(state: WholeCellState): WholeCellState {
    const newCells = new Array(81).fill({ mainNum: null, small: [] });
    return {
        ...state,
        cells: newCells,
    };
}

function doInsert(state: WholeCellState, idx: number, value: number): WholeCellState {
    // only works with a single selection
    const newCells = [...state.cells];
    const cell = newCells[idx];

    if (cell.mainNum === value) {
        // no op
        return state;
    }

    newCells[idx] = { ...cell, mainNum: value };
    return { ...state, cells: newCells };
}

function doInsertSmall(state: WholeCellState, action: InsertSmallEvent): WholeCellState {
    const cells = [...state.cells];
    const validIdx = action.index.filter(x => cells[x].mainNum == null)
    const adding = validIdx
        .map(x => cells[x].small.indexOf(action.number) === -1)
        .reduce((p, n) => p || n, false);

    validIdx.forEach(index => {
        const alreadyHas = cells[index].small.indexOf(action.number) !== -1;
        if (adding && !alreadyHas) {
            cells[index] = {
                ...cells[index],
                small: [...cells[index].small, action.number]
            };
        } else if (!adding && alreadyHas) {
            cells[index] = {
                ...cells[index],
                small: cells[index].small.filter(s => s !== action.number)
            };
        }
    });
    //   const hist: Array<AppEvent> = validIdx.map(i => {
    //     return {
    //       kind: adding ? "ADD": "REMOVE",
    //       index: [i],
    //       small: [action.number]
    //     }
    //   })
    //   const history = [...state.history.items, ...collapseHistory(hist)];
    return {
        ...state,
        cells: [...cells],
    };
}

function doDelete(state: WholeCellState, action: DeleteEvent) {
    let iState = [...state.cells];
    //   let historyItem: Array<AppEvent> = [];
    action.index.forEach(idx => {
        let deleteCell = state.cells[idx];
        const newDeleteCells = [...iState];
        if (deleteCell.mainNum == null) {
            //   historyItem.push({kind: "REMOVE", index: [idx], small: deleteCell.small})
            deleteCell = {
                ...deleteCell,
                small: []
            };
        } else {
            //   historyItem.push({kind: "REMOVE", index: [idx], large: deleteCell.mainNum})
            deleteCell = {
                ...deleteCell,
                mainNum: null
            };
        }
        newDeleteCells[idx] = deleteCell;
        iState = [...newDeleteCells];
    });
    //   const historyItems: Array<AppEvent> = [...state.history.items, ...collapseHistory(historyItem)]

    return {
        ...state,
        cells: iState,
        // history: {
        //   ...state.history,
        //   items: historyItems,
        //   activeItem: historyItems.length - 1
        // },
    };
}

function doImport(state: WholeCellState, value: string): WholeCellState {
    let cells = new Array(81);
    for (let i = 0; i < 81; i++) {
        if (value.charAt(i) !== "0" && !isNaN(parseInt(value.charAt(i)))) {
            cells[i] = { mainNum: parseInt(value.charAt(i)), small: [] };
        } else {
            cells[i] = { mainNum: null, small: [] };
        }
    }
    return {
        ...state,
        cells
    };
}