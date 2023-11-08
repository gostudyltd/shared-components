import React from "react";
import { SectionContainer } from "./components/SectionContainer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";
import { SectionTitle } from "./components/SectionTitle";
import {
  AccentColor,
  SectionContainerProps,
  SectionTitleProps,
} from "./components/types";
import { CdnImage } from "../../types/components";
import { getPicture } from "../../helpers/CloudinaryImage";

type LeftContentProps = {
  content?: React.ReactNode;
  button?: RoundedColorizedSection["button"];
  sx?: SxProps;
  accentColor?: AccentColor;
};
const LeftContent: React.FC<LeftContentProps> = ({
  content,
  button,
  sx,
  accentColor = "warning",
}) => {
  return (
    <Stack sx={sx}>
      {content}
      {button && (
        <Box sx={{ marginTop: { xs: "2rem", sm: "2.5rem" } }}>
          <Button
            variant="contained"
            color={accentColor}
            size="large"
            onClick={button.onClick}
            sx={{
              px: { xs: "0", sm: "2rem" },
              fontSize: { xs: "1rem", sm: "1.125rem" },
              height: { xs: "2.625rem", sm: "3.5rem" },

              ...button.sx,
            }}
          >
            {button.text}
          </Button>
        </Box>
      )}
    </Stack>
  );
};

const getBackgroundByAccentColor = (
  accentColor: AccentColor,
  revertGradient?: boolean
): string => {
  if (accentColor === "warning")
    return `linear-gradient(${
      revertGradient ? "-239.72deg" : "282.72deg"
    }, #FFEDD1 31.93%, #FFF3E0 31.94%)`;
  if (accentColor === "error")
    return "linear-gradient(282.72deg, #FDE4E4 31.93%, #FFEEEE 31.94%)";
  return `linear-gradient(linear-gradient(${
    revertGradient ? "-239.72deg" : "282.72deg"
  }, #D3EEFF 31.93%, #E1F3FF 31.94%)`;
};

type RoundedColorizedSection = {
  accentColor?: AccentColor;
  sectionTitle?: SectionTitleProps;
  leftContent?: React.ReactNode;
  leftContentSx?: SxProps;
  rightContent?: React.ReactNode;
  rightContentSx?: SxProps;
  bottomContent?: React.ReactNode;
  button?: {
    sx?: SxProps;
    wrapperSx?: SxProps;
    text: string;
    onClick: () => void;
  };
  image?: CdnImage;
  mobileImage?: CdnImage;
  imageSx?: SxProps;
  sx?: SxProps;
  sectionContainer?: SectionContainerProps;
  revertGradient?: boolean;
  gap?: { xs: string; sm?: string };
  bgColor?: { xs: string; sm?: string };
  smallFontSize?: boolean;
};

export const RoundedColorizedSectionV2: React.FC<RoundedColorizedSection> = ({
  sectionTitle,
  leftContent,
  leftContentSx = {},
  rightContent,
  rightContentSx = {},
  bottomContent,
  button,
  accentColor = "warning",
  image,
  mobileImage,
  imageSx,
  sx = {},
  sectionContainer = {},
  revertGradient,
  gap,
  smallFontSize = false,
  bgColor,
}) => {
  return (
    <SectionContainer {...sectionContainer}>
      <Stack
        borderRadius={"2rem"}
        width={"100%"}
        sx={{
          background:
            bgColor ?? getBackgroundByAccentColor(accentColor, revertGradient),
          p: { xs: "1.25rem", sm: "2.5rem" },
          pb: { xs: !bottomContent && image ? "0" : undefined },
          position: "relative",
          ...sx,
        }}
      >
        <Stack
          width={"100%"}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
          }}
          gap={
            gap ?? {
              xs: "2rem",
              sm: "7.5rem",
            }
          }
        >
          <Stack direction={"column"} flex={"1 1 0"}>
            <SectionTitle
              accentColor={accentColor}
              sx={{
                fontSize: smallFontSize
                  ? { xs: "18px", sm: "32px" }
                  : { xs: "1.75rem", sm: "2.25rem" },
              }}
              {...sectionTitle}
            />
            <LeftContent
              content={leftContent}
              button={button}
              accentColor={accentColor}
              sx={{ display: { xs: "none", sm: "flex" }, ...leftContentSx }}
            />
          </Stack>
          <Stack
            flex={"1 1 0"}
            sx={{
              ...rightContentSx,
            }}
          >
            {rightContent}
          </Stack>
        </Stack>
        {bottomContent && (
          <Stack
            sx={{ position: "relative", marginTop: { xs: "", sm: "2rem" } }}
          >
            {image && (
              <>
                {getPicture(
                  image.src,
                  image.width,
                  image.height,
                  {
                    display: { xs: "none", sm: "block" },
                    position: { xs: "initial", sm: "absolute" },
                    bottom: "100%",
                    right: 0,
                    ...imageSx,
                  },
                  {
                    display: { xs: "none", sm: "block" },
                    position: { xs: "initial", sm: "absolute" },
                    bottom: "100%",
                    right: 0,
                    ...imageSx,
                  },
                  "discover"
                )}
                {mobileImage &&
                  getPicture(
                    mobileImage.src,
                    mobileImage.width,
                    mobileImage.height,
                    {
                      display: { xs: "block", sm: "none" },
                      position: { xs: "initial", sm: "absolute" },
                      bottom: "100%",
                      right: 0,
                      ...imageSx,
                    },
                    {
                      display: { xs: "block", sm: "none" },
                      position: { xs: "initial", sm: "absolute" },
                      bottom: "100%",
                      right: 0,
                      ...imageSx,
                    },
                    "discover"
                  )}
              </>
            )}
            {bottomContent}
          </Stack>
        )}

        {!bottomContent && image && (
          <>
            {getPicture(
              image.src,
              image.width,
              image.height,
              {
                display: { xs: "none", sm: "block" },
                position: { xs: "relative", sm: "absolute" },
                bottom: 0,
                right: { xs: 0, sm: "2.5rem" },
                order: { xs: "1", sm: undefined },
                ...imageSx,
              },
              {
                display: { xs: "none", sm: "block" },
                position: { xs: "relative", sm: "absolute" },
                bottom: 0,
                right: { xs: 0, sm: "2.5rem" },
                order: { xs: "1", sm: undefined },
                ...imageSx,
              },
              "discover"
            )}
            {mobileImage &&
              getPicture(
                mobileImage.src,
                mobileImage.width,
                mobileImage.height,
                {
                  display: { xs: "block", sm: "none" },
                  position: { xs: "relative", sm: "absolute" },
                  bottom: 0,
                  right: { xs: 0, sm: "2.5rem" },
                  order: { xs: "1", sm: undefined },
                  ...imageSx,
                },
                {
                  display: { xs: "block", sm: "none" },
                  position: { xs: "relative", sm: "absolute" },
                  bottom: 0,
                  right: { xs: 0, sm: "2.5rem" },
                  order: { xs: "1", sm: undefined },
                  ...imageSx,
                },
                "discover"
              )}
          </>
        )}
        <LeftContent
          content={leftContent}
          button={button}
          accentColor={accentColor}
          sx={{
            display: { xs: "flex", sm: "none" },
            marginBottom: { xs: "1.25rem" },
            ...leftContentSx,
          }}
        />
      </Stack>
    </SectionContainer>
  );
};
