import { Box, Stack } from "@mui/material";
import React from "react";
import { SectionTitle } from "./SectionTitle";
import { SectionImageColumnPropsV2 } from "./types";
import { withCustomTheme } from "../../hoc/withCustomTheme";
import { ImageWithColorizedBorder } from "../ImageWithColorizedBorder";
import { getPicture } from "../../../helpers/CloudinaryImage";

export const SectionImageColumnV2: React.FC<SectionImageColumnPropsV2> =
  withCustomTheme(
    ({
      image,
      imageSx = {},
      sectionTitle,
      withBorder = false,
      accentColor = "primary",
    }) => {
      const imageAdditionalSx = sectionTitle
        ? { marginTop: { xs: "1.25rem", sm: "2rem" }, mx: "auto" }
        : {};
      return (
        <Stack>
          {sectionTitle && <SectionTitle {...sectionTitle} />}
          {withBorder ? (
            <ImageWithColorizedBorder
              accentColor={accentColor}
              image={image}
              sx={{
                maxWidth: "588px",
                width: "100%",
                ...imageAdditionalSx,
                ...imageSx,
              }}
            />
          ) : (
            getPicture(
              image.src,
              image.width,
              image.height,
              {
                maxWidth: "588px",
                width: "100%",
                ...imageAdditionalSx,
                ...imageSx,
              },
              {
                maxWidth: "588px",
                width: "100%",
                ...imageAdditionalSx,
                ...imageSx,
              },
              "hero"
            )
          )}
        </Stack>
      );
    }
  );
