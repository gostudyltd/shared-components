import React, { MutableRefObject } from "react";
import { Box, SxProps } from "@mui/material";
import { AccentColor } from "./types";
import { accentColorBase } from "./utils";
import {
  SectionContainerOverlay,
  SectionContainerOverlayProps,
} from "./SectionContainerOverlay";
import { withCustomTheme } from "../../hoc/withCustomTheme";

type Props = {
  accentColor: AccentColor;
  sx?: SxProps;
  overlayVariant?: SectionContainerOverlayProps["variant"];
  overlayColor?: string;
  gradientBg?: boolean;
  nodeRef?: MutableRefObject<HTMLDivElement | null>;
  overlaySx?: SxProps;
};

const getBackgroundByAccentColor = (
  accentColor: AccentColor,
  revertGradient?: boolean
): string => {
  if (accentColor === "warning")
    return `linear-gradient(${
      revertGradient ? "-239.72deg" : "282.72deg"
    }, #FFEDD1 31.93%, #FFF3E0 31.94%)`;
  // if (accentColor === 'error') return 'linear-gradient(282.72deg, #FFEDD1 31.93%, #FFF3E0 31.94%)'
  return `linear-gradient(linear-gradient(${
    revertGradient ? "-239.72deg" : "282.72deg"
  }, #D3EEFF 31.93%, #E1F3FF 31.94%)`;
};

export const SectionContainerWrapperColorized: React.FC<
  React.PropsWithChildren<Props>
> = withCustomTheme(
  ({
    accentColor,
    children,
    sx = {},
    overlayVariant,
    overlayColor,
    gradientBg,
    nodeRef,
    overlaySx,
  }) => {
    return (
      <Box
        sx={{
          background: gradientBg
            ? getBackgroundByAccentColor(accentColor, true)
            : accentColorBase[accentColor].secondary,
          ...sx,
        }}
        position={"relative"}
        overflow={"hidden"}
        ref={nodeRef}
      >
        <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
          {children}
        </Box>
        {overlayVariant && (
          <SectionContainerOverlay
            sx={overlaySx}
            accentColor={accentColor}
            variant={overlayVariant}
            color={overlayColor}
          />
        )}
      </Box>
    );
  }
);
