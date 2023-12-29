import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const FirstUnderline: React.FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <Box
      component={"svg"}
      width="283px"
      height="11px"
      viewBox="0 0 283 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ ...sx }}
    >
      <path
        d="M1 3C118.396 9.19873 181.051 10.1188 282 3"
        stroke="#2962FF"
        stroke-width="6"
      />
    </Box>
  );
};
