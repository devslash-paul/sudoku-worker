import React from "react";
import CSS from "csstype";

export type SkeletonProps = {
  board: JSX.Element;
  side: JSX.Element;
};

const bodyStyle: CSS.Properties = {
  display: "flex",
  height: "100vh"
};

const boardStyle: CSS.Properties = {
  position: "relative",
  margin:'auto',
  padding: "20px"
};

const sidebarStyle: CSS.Properties = {
  position: 'relative',
  background: "rgb(170, 170, 170)",
  padding: "20px",
  width: "22%",
  minWidth: "270px",
  minHeight: '100vh',
  maxHeight: '100vh',
  overflowY: 'scroll'
};

const collapse: CSS.Properties = {
  right: '-15px',
  top: '50vh',
  position: 'absolute',
  background: 'lightgray',
  padding: '10px',
  borderTopRightRadius: '15px',
  borderBottomRightRadius: '15px'
}

const rel: CSS.Properties = {
  position: 'relative'
}

export class Skeleton extends React.PureComponent<SkeletonProps> {
  render() {
    return (
      <div style={bodyStyle}>
        <div style={rel}>
          <span style={collapse}>X</span>
          <div style={sidebarStyle}>
            {this.props.side}
          </div>
        </div>
        <div style={boardStyle}>{this.props.board}</div>
      </div>
    );
  }
}
