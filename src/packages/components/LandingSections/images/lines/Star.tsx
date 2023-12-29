import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const Star: React.FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <Box
      component={"svg"}
      width="37px"
      height="37px"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ ...sx }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.4086 14.6848L12.2007 0.412503L22.5433 10.4096L36.8156 12.2018L26.8185 22.5444L25.0263 36.8167L14.6838 26.8196L0.411424 25.0274L10.4086 14.6848Z"
        fill="#FFD180"
      />
    </Box>
  );
};
