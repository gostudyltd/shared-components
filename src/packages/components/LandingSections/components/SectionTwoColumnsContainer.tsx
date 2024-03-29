import React from "react";
import { SectionTwoColumnsContainerProps } from "./types";
import { SectionContainer } from "./SectionContainer";
import { Stack } from "@mui/material";

export const SectionTwoColumnsContainer: React.FC<
  SectionTwoColumnsContainerProps
> = ({
  sectionContainerSx,
  firstColumn,
  secondColumn,
  disableContainerPaddings,
  secondColumnSx,
  firstColumnSx,
}) => {
  return (
    <SectionContainer
      twoColumns
      sx={sectionContainerSx}
      disableContainerPaddings={disableContainerPaddings}
    >
      <Stack
        sx={{
          flex: "1 1 0",
          width: { xs: "100%", sm: "50%" },
          ...firstColumnSx,
        }}
      >
        {firstColumn}
      </Stack>
      <Stack
        sx={{
          flex: "1 1 0",
          width: { xs: "100%", sm: "50%" },
          ...secondColumnSx,
        }}
      >
        {secondColumn}
      </Stack>
    </SectionContainer>
  );
};
