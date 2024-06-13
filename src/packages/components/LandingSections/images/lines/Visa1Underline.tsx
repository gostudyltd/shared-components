import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const Visa1Underline: React.FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <Box
      component={"svg"}
      width="457px"
      height="9px"
      viewBox="0 0 457 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ ...sx }}
    >
      <path
        d="M456 6.5C265.91 1.54098 164.459 0.804968 1 6.50004"
        stroke="#2962FF"
        stroke-width="5"
      />
    </Box>
  );
};
