import { Box, Stack } from "@mui/material";
import React from "react";
import { SectionTitle } from "./SectionTitle";
import { SectionImageColumnProps } from "./types";
import { withCustomTheme } from "../../hoc/withCustomTheme";

export const SectionImageColumn: React.FC<SectionImageColumnProps> =
  withCustomTheme(({ image, imageSx = {}, sectionTitle }) => {
    const imageAdditionalSx = sectionTitle
      ? { marginTop: { xs: "1.25rem", sm: "2rem" }, mx: "auto" }
      : {};
    return (
      <Stack>
        {sectionTitle && <SectionTitle {...sectionTitle} />}
        <Box
          component={"img"}
          src={image}
          alt="hero"
          width={"100%"}
          maxWidth={"588px"}
          sx={{
            ...imageAdditionalSx,
            ...imageSx,
          }}
        />
      </Stack>
    );
  });
