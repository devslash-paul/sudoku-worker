import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { CellState } from "../state/model";
import {
  clearEvents
} from "../state/sidebarActions";
import { Actions } from "../state/cellActions";
import { RootState } from '../state/store';
import { ConnectedControls } from "./sidebar/Controls";
import { WholeCellState } from "../state/cellReducer";

type SidebarProps = {
  board: string;
  boardCells: Array<CellState>;

  clearHistory: () => void;
};


const Sidebar = (props: SidebarProps) => {

  return (
    <div>
      <ConnectedControls />

      {/* <h5>Saved Boards</h5>
      <Button variant="contained" color="primary">
        Save
      </Button> */}
      {/* <BoardUI
        board={props.boardCells}
        interact={false}
        size={200}
        onEnterNum={vfun}
        onEnterSmallNum={vfun}
        onDelete={vfun}
      /> */}
      {/* <h5>History <LayersClearIcon onClick={props.clearHistory}/></h5> */}
      {/* <History /> */}
      <h5>External resources</h5>
      <a
        href={"https://www.sudokuwiki.org/sudoku.html?db=" + props.board}
        target="_blank"
        rel="noopener noreferrer"
      >
        Sudoku Wiki
      </a>
    </div>
  );
};

const encodeBoard = (cells: WholeCellState) => {
  return cells.cells.map(x => x.mainNum || "0").reduce((p, n) => p + n, "");
};

const mapStateToProps = (main: RootState) => {
  return {
    board: encodeBoard(main.cells.present),
    boardCells: main.cells.present.cells,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => {
  return {
    clearHistory: () => dispatch(clearEvents()),
  };
};

export const ConnectedPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
