import React from "react";
import ShortcutsIconBase from "./ShortcutsIconBase";
import { ILinkIconProps } from "./util";

const ShortcutsIcon = ({ path, currentPath }: ILinkIconProps) => {
  if (currentPath.includes(path)) {
    return (
      <ShortcutsIconBase
        fillColor1="#2DAEE5"
        fillColor2="#005B97"
        fillColor3="#2DAEE5"
        fillColor4="#2DAEE5"
      />
    );
  }
  return <ShortcutsIconBase />;
};

export default ShortcutsIcon;
