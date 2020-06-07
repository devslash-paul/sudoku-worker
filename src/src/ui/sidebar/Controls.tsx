import React, { Dispatch } from "react";
import { encodeFull } from "../../transit";
import { connect } from "react-redux";
import { State, Settings } from "../../state/model";
import { Actions, checkState } from "../../state/cellActions";
import { Grid, Button } from "@material-ui/core";
import CSS from "csstype";
import { useToasts } from "react-toast-notifications";
import {
  onNew,
  onSetHighlight,
  onChangePainting,
  onImport,
} from "../../state/sidebarActions";
import { ActionCreators } from "redux-undo";
import { RootState } from "../../state/store";

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
  margin: "0px",
  borderRadius: "0",
  background: '#f2f2f2',
  boxSizing: "border-box",
  flexGrow: 1,
};
const topLeft: CSS.Properties = {
  borderTopLeftRadius: "10px",
};
const topRight: CSS.Properties = {
  borderTopRightRadius: "10px",
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
    autoDismiss: true
  });
};

type ControlProps = {
  painting: boolean;
  settings: Settings;

  full: () => string;
  onNew: () => void;
  onChangeHighlight: (e1: boolean) => void;
  onChangePainting: (e1: boolean) => void;
  doImport: (board: string) => void;
  onUndo: () => void;
  doCheck: () => void;
  onRedo: () => void;
};

const Controls = (props: ControlProps) => {
  const { addToast } = useToasts();
  // const vfun = (e: any) => { };
  // const vof = () => { };

  return (
    <>
      <Grid container>
        <Button
          disableElevation
          style={{ ...boxStyle, ...topLeft }}
          variant="outlined"
          onClick={props.onNew}
        >
          New
        </Button>
        <Button
          disableElevation
          style={boxStyle}
          variant="outlined"
          onClick={e => onImportClicked(props.doImport)}
        >
          Import
        </Button>
        <Button
          disableElevation
          style={{ ...boxStyle, ...topRight }}
          variant="outlined"
          onClick={() => doExport(addToast, props.full)}
        >
          Share
        </Button>
                <Button
          disableElevation
          style={{ ...boxStyle, ...topRight }}
          variant="outlined"
          onClick={() => props.doCheck()}
        >
          Check
        </Button>
      </Grid>
      <Grid container>
        <Button
          disableElevation
          style={{ ...boxStyle }}
          variant="outlined"
          onClick={() => props.onUndo()}
        >Undo</Button>
        <Button
          disableElevation
          style={{ ...boxStyle }}
          variant="outlined"
          onClick={() => props.onRedo()}>Redo</Button>
      </Grid>
      {/* <Grid>
        <Button variant="outlined" style={boxStyle} disableElevation>
          <span style={cellStyle}>
            <div>1</div>
          </span>
        </Button>
        <Button variant="outlined" style={boxStyle} disableElevation>
          <Cell
            number={null}
            small={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            selected={false}
            focused={false}
            size={buttonWidth}
            cells={1}
            highlight={null}
            onClick={vfun}
            onClickText={vfun}
            onBlur={vof}
            onMouseover={vof}
            onInput={vfun}
          />
        </Button>
      </Grid> */}
      <div>
        <label htmlFor="painting">Enable Painting</label>
        <input
          id="painting"
          type="checkbox"
          checked={props.painting}
          onChange={e => props.onChangePainting(e.target.checked)}
        />
      </div>
    </>
  );
};

const mapStateToProps = (main: RootState) => ({
  painting: main.settings.state === State.PAINTING,
  settings: main.settings,
  full: () => encodeFull(main.cells.present.cells)
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
