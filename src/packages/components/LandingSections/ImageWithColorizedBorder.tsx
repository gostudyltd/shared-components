import React from "react";
import Stack from "@mui/material/Stack";
import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";
import { alpha } from "@mui/material/styles";
import { CdnImage } from "../../types/components";
import { getPicture } from "../../helpers/CloudinaryImage";
import { AccentColor } from "./components";
import { accentColorBase } from "./components/utils";

type ImageWithColorizedBorderProps = {
  image: CdnImage;
  mobileImage?: CdnImage;
  renderImage?: (src: string) => React.ReactNode;
  accentColor?: AccentColor;
  sx?: SxProps;
  imageSx?: SxProps;
};

export const ImageWithColorizedBorder: React.FC<
  ImageWithColorizedBorderProps
> = ({
  image,
  mobileImage,
  renderImage,
  accentColor = "primary",
  sx = {},
  imageSx = {},
}) => {
  const accent = accentColorBase[accentColor];

  return (
    <Stack
      sx={{
        padding: { xs: ".75rem", sm: "1rem" },
        border: `2px solid ${alpha(accent.main, 0.3)}`,
        borderRadius: "2rem",
        ...sx,
      }}
    >
      {renderImage ? (
        renderImage(image.src)
      ) : mobileImage ? (
        <>
          {getPicture(
            image.src,
            image.width,
            image.height,
            {
              borderRadius: "1rem",
              display: { xs: "none", sm: "block" },
              ...imageSx,
            },
            {
              borderRadius: "1rem",
              width: "100%",
              verticalAlign: "top",
              ...imageSx,
            },
            "discover"
          )}
          {getPicture(
            mobileImage.src,
            mobileImage.width,
            mobileImage.height,
            {
              borderRadius: "1rem",
              display: { xs: "block", sm: "none" },
              ...imageSx,
            },
            {
              borderRadius: "1rem",
              width: "100%",
              verticalAlign: "top",
              ...imageSx,
            },
            "discover"
          )}
        </>
      ) : (
        getPicture(
          image.src,
          image.width,
          image.height,
          { borderRadius: "1rem", ...imageSx },
          {
            borderRadius: "1rem",
            width: "100%",
            verticalAlign: "top",
            ...imageSx,
          },
          "discover"
        )
      )}
    </Stack>
  );
};
