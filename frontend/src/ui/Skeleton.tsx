import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import CSS from "csstype";

export type SkeletonProps = {
  board: JSX.Element;
  side: JSX.Element;
};

const bodyStyle: CSS.Properties = {
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'center',
};

const boardStyle: CSS.Properties = {
  position: "relative",
  margin: "auto",
  padding: "1em",
};

const controlStyle: CSS.Properties = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: "2em",
};

const collapse: CSS.Properties = {
  right: "-15px",
  top: "50vh",
  display: "none",
  position: "absolute",
  padding: "10px",
  borderTopRightRadius: "15px",
  borderBottomRightRadius: "15px",
};

const rel: CSS.Properties = {
  position: "relative",
};

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const useWindowDimensions = () => {
  const [dim, setDim] = useState(getWindowDimensions());
  useEffect(() => {
    const handle = () => {
      setDim(getWindowDimensions);
    };

    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return dim;
};

export const Skeleton = (props: SkeletonProps) => {
  const dim = useWindowDimensions();
  return (
    <div style={bodyStyle}>
      <div style={controlStyle}>
        {props.side}
      </div>
      <div style={boardStyle}>{props.board}</div>
    </div>
  );
};
