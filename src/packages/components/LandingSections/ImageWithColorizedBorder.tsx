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
  renderImage?: (src: string) => React.ReactNode;
  accentColor?: AccentColor;
  sx?: SxProps;
  imageSx?: SxProps;
};

export const ImageWithColorizedBorder: React.FC<
  ImageWithColorizedBorderProps
> = ({
  image,
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
      {renderImage
        ? renderImage(image.src)
        : getPicture(
            image.src,
            image.width,
            image.height,
            { borderRadius: "1rem", ...imageSx },
            { borderRadius: "1rem", width: "100%", ...imageSx },
            "discover"
          )}
    </Stack>
  );
};
