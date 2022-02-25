import React from "react";
import { ILinkIconProps } from "./util";
import GraphsIconBase from "./GraphsIconBase";

const GraphsIcon = ({ path, currentPath }: ILinkIconProps) => {
  if (currentPath.includes(path)) {
    return (
      <GraphsIconBase
        fillColor1="#005B97"
        fillColor2="#005B97"
        fillColor3="#2DAEE5"
      />
    );
  }
  return <GraphsIconBase />;
};

export default GraphsIcon;
