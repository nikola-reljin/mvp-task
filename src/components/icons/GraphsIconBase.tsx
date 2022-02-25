import React from "react";

interface IGraphsIconBaseProps {
  filLColor0?: string;
  fillColor1?: string;
  fillColor2?: string;
  fillColor3?: string;
}

const GraphsIconBase = ({
  filLColor0 = "none",
  fillColor1 = "#B3B3B3",
  fillColor2 = "#B3B3B3",
  fillColor3 = "#CDCCCC",
}: IGraphsIconBaseProps) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill={filLColor0}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.8819 13.21H12.7719L4.21191 21.77C5.9604 23.3099 8.10561 24.3287 10.404 24.7107C12.7023 25.0928 15.0618 24.8227 17.2144 23.9313C19.367 23.0398 21.2266 21.5626 22.5819 19.6675C23.9372 17.7724 24.7341 15.5352 24.8819 13.21Z"
        fill={fillColor1}
      />
      <path
        d="M3.112 20.66C1.57115 18.9126 0.551492 16.768 0.168971 14.4699C-0.213549 12.1718 0.0564146 9.81243 0.948167 7.66014C1.83992 5.50785 3.31768 3.64895 5.21343 2.2948C7.10917 0.940651 9.34684 0.145584 11.672 0V12.11L3.112 20.67V20.66Z"
        fill={fillColor2}
      />
      <path
        d="M13.2319 0V11.65H24.8819C24.695 8.62141 23.4076 5.76557 21.262 3.61996C19.1164 1.47435 16.2605 0.186932 13.2319 0V0Z"
        fill={fillColor3}
      />
    </svg>
  );
};

export default GraphsIconBase;
