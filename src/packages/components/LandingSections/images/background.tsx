import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const Background: React.FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <Box
      component={"svg"}
      width="719px"
      height="504px"
      viewBox="0 0 719 504"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ ...sx }}
    >
      <path
        d="M735.935 490.12C525.162 242.43 447.407 143.772 372.599 -80.7072M735.935 490.12C411.215 338.681 218.222 208.201 32.5491 -93.5307M735.935 490.12C548.335 491.716 213.177 453.471 50.7136 297.562M735.935 490.12C533.365 581.515 318.597 643.251 98.8559 643.501"
        stroke="#FFF59D"
        stroke-width="75.668"
      />
    </Box>
  );
};
