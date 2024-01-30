import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";
import React, { ReactNode } from "react";
// import { Link } from '../Link'
import { AccentColor } from "./components/types";
import { accentColorBase } from "./components/utils";
import { SectionTwoColumnsContainer } from "./components/SectionTwoColumnsContainer";
import {
  HorizontalListWithSeparator,
  HorizontalListWithSeparatorProps,
} from "./components/HorizontalListWithSeparator";
import { SectionContainer } from "./components/SectionContainer";
import { getPicture } from "../../helpers/CloudinaryImage";
import { CdnImage } from "../../types/components";
import { withCustomTheme } from "../hoc/withCustomTheme";
import { montserratFamily } from "../../constants/themeVars";
// import { getSrc, getSrcSet } from '../../helpers/residence'

export type IntroSectionPropsV2 = {
  testButton?: boolean;
  preTitle?: string;
  title?: string | React.ReactNode;
  renderTitle?: (color: string) => string | React.ReactNode;
  description?: string | ReactNode;
  renderDescription?: (color: string) => string | React.ReactNode;
  descriptionSx?: SxProps;
  titleSx?: SxProps;
  image: CdnImage & { sx?: SxProps };
  mobileImage?: CdnImage & { sx?: SxProps };
  button?: {
    text: string;
    onClick: () => void;
    sx?: SxProps;
  };
  leftSectionContainerSx?: SxProps;
  containerSx?: SxProps;

  accentColor?: AccentColor;
  bottomListData?: HorizontalListWithSeparatorProps["data"];
  info: { text: string; color?: string; bgColor?: string }[];
  secondColumn?: ReactNode;
};

type ImageProps = {
  imageSrc: CdnImage & { sx?: SxProps };
  mobileImageSrc?: CdnImage & { sx?: SxProps };
};

export const Image: React.FC<ImageProps> = withCustomTheme((props) => {
  const { imageSrc, mobileImageSrc } = props;
  if (mobileImageSrc) {
    return (
      <>
        {getPicture(
          imageSrc.src,
          imageSrc.width,
          imageSrc.height,
          {
            maxWidth: "588px",
            mx: "auto",
            width: "100%",
            display: { xs: "none", sm: "block" },
          },
          {
            maxWidth: imageSrc.width,
            mx: "auto",
            width: "100%",
            display: { xs: "none", sm: "block" },
            ...imageSrc.sx,
          }
        )}
        {getPicture(
          mobileImageSrc.src,
          mobileImageSrc.width,
          mobileImageSrc.height,
          {
            maxWidth: "375px",
            mx: "auto",
            width: "100%",
            display: { xs: "block", sm: "none" },
          },
          {
            maxWidth: "375px",
            mx: "auto",
            width: "100%",
            display: { xs: "block", sm: "none" },
            ...mobileImageSrc.sx,
          }
        )}
      </>
    );
  }
  return getPicture(
    imageSrc.src,
    imageSrc.width,
    imageSrc.height,
    { maxWidth: "588px", mx: "auto", width: "100%" },
    { maxWidth: "588px", mx: "auto", width: "100%", ...imageSrc.sx }
  );
});

export const IntroSectionV2: React.FC<IntroSectionPropsV2> = withCustomTheme(
  (props) => {
    const {
      title,
      renderTitle,
      description,
      image,
      mobileImage,
      button,
      accentColor = "primary",
      preTitle,
      bottomListData,
      leftSectionContainerSx = {},
      containerSx = {},
      titleSx,
      descriptionSx,
      info,
      renderDescription,
      secondColumn,
    } = props;

    const accent = accentColorBase[accentColor];
    return (
      <SectionContainer
        disableContainerPaddings
        sx={{
          position: "relative",
          padding: bottomListData
            ? { xs: "0 0 8.25rem 0", sm: "0 0 3.75rem 0" }
            : undefined,
          ...containerSx,
        }}
      >
        <SectionTwoColumnsContainer
          sectionContainerSx={{
            gap: { xs: "2.5em", sm: "2.75em" },
            py: { xs: "3em", sm: "7.5em" },
            "& > *:first-of-type": {
              maxWidth: { xs: "100%", sm: "484px" },
            },
            ...leftSectionContainerSx,
          }}
          firstColumn={
            <Stack
              sx={{
                alignItems: { xs: "stretch", sm: "flex-start" },
              }}
            >
              {info && (
                <Stack
                  direction={"row"}
                  gap={"8px"}
                  sx={{
                    marginBottom: { xs: ".5rem", sm: "1.25" },
                  }}
                >
                  {info.map((item) => (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        height: "24px",
                        px: { xs: "16px", sm: "20px" },
                        backgroundColor:
                          item.bgColor ?? "rgba(86, 139, 255, 1)",
                        borderRadius: "100px",
                      }}
                    >
                      <Typography
                        color={item.color ?? "#FFF"}
                        fontFamily={montserratFamily}
                        fontSize={{ xs: "12px", sm: "14px" }}
                        fontWeight={600}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              )}
              <Stack
                gap={{ xs: "1em", sm: "1.5em" }}
                sx={{ marginBottom: { xs: "2em", sm: "3em" } }}
              >
                {preTitle && (
                  <Stack
                    alignItems={"center"}
                    direction={"row"}
                    position={"relative"}
                    sx={{
                      px: { xs: "3rem", sm: "3.5rem" },
                    }}
                  >
                    <Box
                      component={"span"}
                      sx={{
                        width: { xs: "2rem", sm: "2.5rem" },
                        height: "0.125rem",
                        transition: "all .2s linear",
                        backgroundColor: accent.main,
                        marginRight: "1rem",
                        flexShrink: 0,
                        position: "absolute",
                        left: 0,
                        top: 0,
                        my: "11px",
                        display: "block",
                        borderRadius: "0.125rem",
                      }}
                    />

                    <Typography
                      variant="h5"
                      sx={{
                        color: accent.main,
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        transition: "all .2s linear",
                      }}
                    >
                      {preTitle}
                    </Typography>
                  </Stack>
                )}
                <Typography
                  variant="h1"
                  fontSize={"3rem"}
                  display={{ xs: "none", sm: "block" }}
                  lineHeight={"63.38px"}
                  fontWeight={600}
                  sx={titleSx}
                >
                  {renderTitle ? renderTitle(accent.main) : title}
                </Typography>
                <Typography
                  variant="h2"
                  display={{ xs: "block", sm: "none" }}
                  fontWeight={600}
                  sx={titleSx}
                >
                  {renderTitle ? renderTitle(accent.main) : title}
                </Typography>
                <Typography
                  variant={"body1"}
                  fontSize={"1.125rem"}
                  color={"text.secondary"}
                  sx={descriptionSx}
                >
                  {renderDescription
                    ? renderDescription(accent.main)
                    : description}
                </Typography>
              </Stack>
              {button && (
                <Stack direction={{ xs: "column", sm: "row" }} gap={"1.375rem"}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={button.onClick}
                    color={accentColor}
                    sx={{
                      minWidth: { xs: "100%", sm: "10rem" },
                      px: { xs: "0", sm: "2rem" },
                      fontSize: {
                        xs: "1rem",
                        sm: "1.125rem",
                      },
                      height: { xs: "2.625rem", sm: "3.5rem" },
                      ...button.sx,
                    }}
                  >
                    {button.text}
                  </Button>
                </Stack>
              )}
            </Stack>
          }
          secondColumn={
            secondColumn ?? (
              <Image imageSrc={image} mobileImageSrc={mobileImage} />
            )
          }
        />
        {bottomListData && (
          <Box position={"absolute"} bottom={"0"} left={"0"} right={"0"}>
            <Box maxWidth={"md"} mx={"auto"} position={"relative"}>
              <HorizontalListWithSeparator
                data={bottomListData}
                sx={{
                  width: "calc(100% - 2rem)",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </Box>
          </Box>
        )}
      </SectionContainer>
    );
  }
);
