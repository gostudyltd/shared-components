import { ButtonProps } from "@mui/material/Button";
import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";
import { ReactNode } from "react";
import { CdnImage } from "../../../types/components";
// import { CdnImage } from "../../../types/components";

export type AccentColor = "primary" | "warning" | "error";

export type SectionTitleProps = {
  title?: string | ReactNode;
  transitionTime?: number;
  renderTitle?: (color: string, transition: string) => string | React.ReactNode;
  preTitle?: string;
  preTitleWrapperSx?: SxProps;
  description?: string | ReactNode;
  renderDescription?: (
    color: string,
    transition: string
  ) => string | React.ReactNode;

  sx?: SxProps;
  wrapperSx?: SxProps;
  accentColor?: AccentColor;
  descriptionSx?: SxProps;
  centered?: boolean;
  textContainerSx?: SxProps;

  // preTitleRef?: (el: HTMLDivElement | null | undefined) => void

  button?: {
    sx?: SxProps;
    text: string;
    variant?: "outlined" | "contained";
    onClick: () => void;
  };
  renderButtons?: (
    color: string,
    transition: string
  ) => string | React.ReactNode;
  buttonProps?: ButtonProps;
};

export type SectionContainerProps = {
  sx?: SxProps;
  twoColumns?: boolean;
  sectionTitle?: SectionTitleProps;
  accentColor?: AccentColor;
  disableContainerPaddings?: boolean;
  titleVersion?: "v1" | "v2";
};

export type SectionTwoColumnsContainerProps = {
  sectionContainerSx?: SectionContainerProps["sx"];
  firstColumn: React.ReactNode;
  secondColumn: React.ReactNode;
  firstColumnSx?: SxProps;
  secondColumnSx?: SxProps;
  disableContainerPaddings?: boolean;
};

// export type SectionImageColumnProps = {
//   sectionTitle?: SectionTitleProps;
//   image: CdnImage;
//   imageSx?: SxProps;
//   withBorder?: boolean;
//   accentColor?: AccentColor;
// };
export type SectionImageColumnProps = {
  sectionTitle?: SectionTitleProps;
  image: string;
  imageSx?: SxProps;
};

export type SectionImageColumnPropsV2 = {
  sectionTitle?: SectionTitleProps;
  image: CdnImage;
  imageSx?: SxProps;
  withBorder?: boolean;
  accentColor?: AccentColor;
};
