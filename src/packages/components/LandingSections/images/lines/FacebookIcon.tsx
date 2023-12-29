import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const FacebookIcon: React.FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <Box
      component={"svg"}
      width="16px"
      height="17px"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ ...sx }}
    >
      <path
        d="M16 8.52926C16 4.12182 12.4182 0.548828 8 0.548828C3.58176 0.548828 0 4.12182 0 8.52926C0 12.2718 2.58304 15.4122 6.06752 16.2747V10.9681H4.41792V8.52926H6.06752V7.47839C6.06752 4.76218 7.29984 3.50318 9.97312 3.50318C10.48 3.50318 11.3546 3.60246 11.7123 3.70142V5.91199C11.5235 5.8922 11.1955 5.88231 10.7882 5.88231C9.47648 5.88231 8.9696 6.37805 8.9696 7.66673V8.52926H11.5827L11.1338 10.9681H8.9696V16.4513C12.9302 15.974 16 12.6095 16 8.52926Z"
        fill="#2962FF"
      />
    </Box>
  );
};
