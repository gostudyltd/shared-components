import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const NewGrantsBg: React.FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <Box
      component={"svg"}
      width="1440px"
      height="270px"
      viewBox="0 0 1440 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ ...sx }}
    >
      <path
        d="M-28 96.1145C142 259.5 320.5 203.59 395.5 206.5C563 213 777 -16 914.5 26C1052 68 1077.48 229.928 1158 248.5C1238.52 267.073 1325.5 76.6144 1489 96.1144"
        stroke="#2962FF"
        strokeWidth="40"
      />
    </Box>
  );
};
