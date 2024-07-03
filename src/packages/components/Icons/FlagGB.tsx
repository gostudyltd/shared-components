import { Box, SxProps } from "@mui/material";
import React from "react";

export const FlagGB: React.FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <Box
      component={"svg"}
      width="76px"
      height="54px"
      viewBox="0 0 76 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ ...sx }}
    >
      <g clip-path="url(#clip0_8163_6917)">
        <rect x="0.400391" width="75.6" height="54" rx="10.8" fill="#1A47B8" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.44269 0H0.400391V9L67.9144 54L76.0004 54V45L8.44269 0Z"
          fill="white"
        />
        <path
          d="M3.08275 0L76.0004 48.7276V54H73.3809L0.400391 5.22201V0H3.08275Z"
          fill="#F93939"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M68.8004 0H76.0004V9C76.0004 9 29.2357 38.981 7.60039 54H0.400391V45L68.8004 0Z"
          fill="white"
        />
        <path
          d="M76.0004 0H73.5587L0.400391 48.7695V54H3.08275L76.0004 5.26145V0Z"
          fill="#F93939"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.8939 0H48.5698V16.6565H76.0004V37.3325H48.5698V54H27.8939V37.3325H0.400391V16.6565H27.8939V0Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.232 0H44.1688V20.7692H76.0004V33.2308H44.1688V54H32.232V33.2308H0.400391V20.7692H32.232V0Z"
          fill="#F93939"
        />
      </g>
      <defs>
        <clipPath id="clip0_8163_6917">
          <rect x="0.400391" width="75.6" height="54" rx="10.8" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
};
