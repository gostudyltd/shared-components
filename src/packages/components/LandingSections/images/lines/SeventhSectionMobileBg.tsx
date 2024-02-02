import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const SeventhSectionMobileBg: React.FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <Box
      component={"svg"}
      width="375px"
      height="1578px"
      viewBox="0 0 375 1578"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ ...sx }}
    >
      <path
        d="M-30.9982 120.798C68.7829 345.292 274.593 209.499 308.601 374.041C342.608 538.584 -115.213 797.554 48.6603 1089.7C212.534 1381.84 423.065 954.832 521.379 1074.33C619.692 1193.82 303.514 1314.33 434.8 1527.7"
        stroke="#BBDEFB"
        stroke-width="32.6741"
      />
    </Box>
  );
};
