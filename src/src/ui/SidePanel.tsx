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
import { Link } from "@material-ui/core";

type SidebarProps = {
  boardCells: Array<CellState>;
  clearHistory: () => void;
};


const Sidebar = (props: SidebarProps) => {

  return (
    <div>
      <ConnectedControls />

    </div>
  );
};


const mapStateToProps = (main: RootState) => {
  return {
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
