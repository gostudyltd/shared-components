import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const NewGrantFirstSectionBg: React.FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <>
      <Box
        component={"svg"}
        width="1439px"
        height="776px"
        viewBox="0 0 1439 766"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        sx={{ display: { xs: "none", md: "block" }, ...sx }}
      >
        <path
          opacity="0.1"
          d="M1310.41 847.722C1418.96 189.438 1409.22 -164.66 1314.96 -779.818C1158.15 -120.514 1032.47 223.954 706.848 770.627C810.553 148.961 825.261 -205.535 734.741 -853.932C570.997 -172.85 382.745 132.562 97.5531 658.816C139.186 298.712 86.1562 -202.33 18.258 -444.966"
          stroke="#90CAF9"
          strokeWidth="100"
        />
      </Box>
      <Box
        component={"svg"}
        width="375px"
        height="788px"
        viewBox="0 0 375 788"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        sx={{ display: { xs: "block", md: "none" }, ...sx }}
      >
        <path
          opacity="0.1"
          d="M349.072 784.142C398.075 434.69 405.299 249.005 396.125 -70.9797C333.536 280.629 288.549 465.804 181.714 763.917C228.327 433.864 242.428 247.148 235.239 -90.4226C170.092 272.859 108.627 439.62 13.7225 725.648C35.5441 535.082 34.7409 273.659 22.494 148.48"
          stroke="#90CAF9"
          strokeWidth="54.3978"
        />
      </Box>
    </>
  );
};
