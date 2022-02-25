import React from "react";
import { ILinkIconProps } from "./util";
import AnalyseIconBase from "./AnalyseIconBase";

const AnalyseIcon = ({ path, currentPath }: ILinkIconProps) => {
  if (currentPath.includes(path)) {
    return (
      <AnalyseIconBase
        fillColor1="#005B97"
        fillColor2="#003397"
        fillColor3="#2DAEE5"
        fillColor4="#2DAEE5"
      />
    );
  }
  return <AnalyseIconBase />;
};

export default AnalyseIcon;
