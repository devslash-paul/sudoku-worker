import React, { Dispatch } from "react";
import { encodeFull } from "../../transit";
import { connect } from "react-redux";
import { State, Settings } from "../../state/model";
import { Actions, checkState } from "../../state/cellActions";
import { Grid, Button, Link } from "@material-ui/core";
import CSS from "csstype";
import { useToasts } from "react-toast-notifications";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import LinkIcon from "@material-ui/icons/Link";
import ToggleButton from "@material-ui/lab/ToggleButton";
import {
  onNew,
  onSetHighlight,
  onChangePainting,
  onImport,
} from "../../state/sidebarActions";
import { ActionCreators } from "redux-undo";
import { RootState } from "../../state/store";
import ImportIcon from "./import.svg";
import ShareIcon from "./share.svg";
import NewIcon from "./new.svg";
import { WholeCellState } from "../../state/cellReducer";
import { useWindowDimensions } from "../Skeleton";

// const buttonWidth = 33;
// const cellStyle: CSS.Properties = {
//   boxSizing: "border-box",
//   background: "white",
//   height: buttonWidth + "px",
//   width: buttonWidth + "px",
//   border: "1px solid black",
//   lineHeight: buttonWidth + "px",
//   fontSize: buttonWidth / 1.2 + "px"
// };

const boxStyle: CSS.Properties = {
  borderRadius: "0",
  // background: '#f2f2f2',
  boxSizing: "border-box",
  // flexGrow: 1,
};

const onImportClicked = (doImport: (e1: string) => void) => {
  const response = window.prompt("Please enter the sodoku: ");
  if (response !== null) {
    doImport(response);
  }
};

const doExport = (addToast: any, board: () => string) => {
  navigator.clipboard.writeText(window.location.host + "/share/" + board());
  addToast("URL copied to clipboard", {
    appearance: "info",
    autoDismiss: true,
  });
};

type ControlProps = {
  painting: boolean;
  settings: Settings;
  board: string;

  full: () => string;
  onNew: () => void;
  onChangeHighlight: (e1: boolean) => void;
  onChangePainting: (e1: boolean) => void;
  doImport: (board: string) => void;
  onUndo: () => void;
  doCheck: () => void;
  onRedo: () => void;
};

const nounIcon: CSS.Properties = {
  width: "1em",
  fontSize: "1.5rem",
  height: "1em",
};

const Text = (props: {dim: {width: number, height: number}, text: string}) => {
  const {dim, text} = props;
  if(dim.width < 800) {
    return <></>
  }
  return <>{text}</>
}

const Controls = (props: ControlProps) => {
  const { addToast } = useToasts();
  const dim = useWindowDimensions();

  // const vfun = (e: any) => { };
  // const vof = () => { };

  return (
    <>
      <Grid container>
        <Button
          disableElevation
          style={{ ...boxStyle }}
          variant="outlined"
          onClick={props.onNew}
        >
          <img style={nounIcon} src={NewIcon} />
          <Text dim={dim} text='New' />
        </Button>
        <Button
          disableElevation
          style={boxStyle}
          variant="outlined"
          onClick={(e) => onImportClicked(props.doImport)}
        >
          <img style={nounIcon} src={ImportIcon} />
          <Text dim={dim} text='Import' />
        </Button>
        <Button
          disableElevation
          style={{ ...boxStyle }}
          variant="outlined"
          onClick={() => doExport(addToast, props.full)}
        >
          <img style={nounIcon} src={ShareIcon} />
          <Text dim={dim} text='Share' />
        </Button>
        <Button
          disableElevation
          style={{ ...boxStyle }}
          variant="outlined"
          onClick={() => props.doCheck()}
        >
          ✓
          <Text dim={dim} text='Check' />
        </Button>
        <Button
          variant="outlined"
          href={"https://www.sudokuwiki.org/sudoku.html?db=" + props.board}
          style={boxStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solver
        </Button>
      </Grid>
      <Grid container style={{'marginTop': '0.8em'}}>
        <div style={{'width': '4em'}}>

        </div>
        <div style={{'margin':' auto'}}>
        <Button
          disableElevation
          style={{ ...boxStyle }}
          variant="outlined"
          onClick={() => props.onUndo()}
        >
          <UndoIcon />
        </Button>
        <Button
          disableElevation
          style={{ ...boxStyle }}
          variant="outlined"
          onClick={() => props.onRedo()}
        >
          <RedoIcon />
        </Button>
        </div>
        <div>
        <ToggleButton
          selected={props.painting}
          onClick={(e) => props.onChangePainting(!props.painting)}
          style={{'width': '4em'}}
        >
          <LinkIcon />
        </ToggleButton>
        </div>
      </Grid>
    </>
  );
};

const encodeBoard = (cells: WholeCellState) => {
  return cells.cells.map((x) => x.mainNum || "0").reduce((p, n) => p + n, "");
};

const mapStateToProps = (main: RootState) => ({
  painting: main.settings.state === State.PAINTING,
  settings: main.settings,
  board: encodeBoard(main.cells.present),
  full: () => encodeFull(main.cells.present.cells),
});

const mapDispatchToProps = (dispatch: any) => ({
  onNew: () => dispatch(onNew()),
  onChangeHighlight: (value: boolean) => dispatch(onSetHighlight(value)),
  onChangePainting: (value: boolean) => dispatch(onChangePainting(value)),
  doImport: (value: string) => dispatch(onImport(value)),
  doCheck: () => dispatch(checkState()),
  onUndo: () => dispatch(ActionCreators.undo()),
  onRedo: () => dispatch(ActionCreators.redo()),
});

export const ConnectedControls = connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
