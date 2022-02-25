import React from "react";
import { ILinkIconProps } from "./util";
import MenuIconBase from "./MenuIconBase";

const MenuIcon = ({ path, currentPath }: ILinkIconProps) => {
  if (currentPath.includes(path)) {
    return (
      <MenuIconBase
        fillColor1="#2DAEE5"
        fillColor2="#2DAEE5"
        fillColor3="#2DAEE5"
      />
    );
  }
  return <MenuIconBase />;
};

export default MenuIcon;
