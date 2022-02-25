import React from "react";
import { ILinkIconProps } from "./util";
import PaymentsIconBase from "./PaymentsIconBase";

const PaymentsIcon = ({ path, currentPath }: ILinkIconProps) => {
  if (currentPath.includes(path)) {
    return <PaymentsIconBase fillColor2="#2DAEE5" fillColor3="#2DAEE5" />;
  }
  return <PaymentsIconBase />;
};

export default PaymentsIcon;
