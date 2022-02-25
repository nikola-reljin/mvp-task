import React from "react";
import { ILinkIconProps } from "./util";
import PaymentsIconBase from "./PaymentsIconBase";
import LogoutIconBase from "./LogoutIconBase";

const LogoutIcon = ({ path, currentPath }: ILinkIconProps) => {
  if (currentPath.includes(path)) {
    return <LogoutIconBase fillColor1="#005B97" fillColor2="#2DAEE5" />;
  }
  return <LogoutIconBase />;
};

export default LogoutIcon;
