import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const FirstDecoration: React.FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <Box
      component={"svg"}
      width="30px"
      height="31px"
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ ...sx }}
    >
      <path
        d="M8.47286 19.9115C11.5461 18.261 14.6617 16.6777 17.6737 14.9164C19.5257 13.8334 21.3358 12.696 22.8725 11.1782C24.3037 9.76462 24.6608 7.94593 25.1606 6.0807"
        stroke="#80D8FF"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M24.4823 25.6913C21.2837 27.1495 17.9028 28.8476 14.3369 27.9681C13.4765 27.7559 12.6049 27.5345 11.7803 27.2062C11.596 27.1328 11.4603 27.1203 11.3716 26.9667"
        stroke="#80D8FF"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M3.29973 11.8224C6.59648 9.74607 8.09175 5.75872 8.77352 2.11618"
        stroke="#80D8FF"
        stroke-width="4"
        stroke-linecap="round"
      />
    </Box>
  );
};
