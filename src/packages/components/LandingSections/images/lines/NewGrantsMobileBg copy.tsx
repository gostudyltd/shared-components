import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const NewGrantsMobileBg: React.FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <Box
      component={"svg"}
      width="375px"
      height="777px"
      viewBox="0 0 375 777"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ ...sx }}
    >
      <g clip-path="url(#clip0_8448_2860)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.0586 553.727L41.9922 546.293L47.3799 551.5L54.8148 552.434L49.607 557.822L48.6734 565.257L43.2857 560.049L35.8508 559.115L41.0586 553.727Z"
          fill="#90CAF9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M319.322 176.849L313.337 171.005L321.604 169.723L327.448 163.738L328.73 172.004L334.715 177.849L326.448 179.131L320.604 185.116L319.322 176.849Z"
          fill="#BBDEFB"
        />
        <path
          d="M533.844 676.152C458.972 744.82 411.258 737.832 365.493 716.876C319.727 695.921 199.281 605.971 149.02 620.6C98.7603 635.229 115.342 723.019 83.43 730.38C51.5177 737.74 0.798066 657.854 -63.9997 665.582"
          stroke="#2962FF"
          strokeWidth="20"
        />
        <path
          d="M414.576 401.959C317.61 432.27 277.397 405.655 244.887 367.227C212.377 328.799 141.615 196.168 89.9043 188.035C38.194 179.902 15.8695 266.411 -16.1437 259.502C-48.1568 252.593 -60.0904 158.721 -122.024 138.16"
          stroke="#2962FF"
          strokeWidth="20"
        />
      </g>
      <defs>
        <clipPath id="clip0_8448_2860">
          <rect width="375" height="777" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
};
