import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { SectionTitleProps } from "./types";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { accentColorBase } from "./utils";
import { withCustomTheme } from "../../hoc/withCustomTheme";

export const SectionTitle: React.FC<SectionTitleProps> = withCustomTheme(
  (props) => {
    const {
      title,
      renderTitle,
      preTitle,
      preTitleWrapperSx = {},
      accentColor = "primary",
      sx = {},
      wrapperSx = {},
      button,
      renderButtons,
      description,
      renderDescription,
      descriptionSx = {},
      centered,
      transitionTime = 0.2,
      buttonProps = {},
      textContainerSx,
    } = props;

    const accent = accentColorBase[accentColor];
    return (
      <Stack direction={"column"} sx={wrapperSx}>
        {preTitle && (
          <Stack
            alignItems={"center"}
            direction={"row"}
            mb={".75rem"}
            position={"relative"}
            sx={{
              mx: centered ? "auto" : undefined,
              mb: { xs: ".5rem", sm: ".75rem" },
              px: { xs: "3rem", sm: "3.5rem" },
              ...preTitleWrapperSx,
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
                my: "0.875rem",
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
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"flex-end"}
          width={"100%"}
          sx={{
            verticalAlign: "middle",
            ...textContainerSx,
          }}
        >
          <Stack
            direction={"column"}
            sx={{
              width: centered ? "100%" : undefined,
              textAlign: centered ? "center" : undefined,
            }}
          >
            <Typography
              variant="h3"
              fontSize={"2.25rem"}
              fontWeight={"600"}
              sx={{
                fontSize: { xs: "1.75rem", sm: "2.25rem" },
                lineHeight: "1.32",
                "& > span > *": {
                  transition: `all ${transitionTime}s linear`,
                },
                ...sx,
              }}
            >
              <span>
                {renderTitle
                  ? renderTitle(accent.main, `color ${transitionTime}s linear`)
                  : title}
              </span>
            </Typography>
            {(description || renderDescription) && (
              <Typography
                variant={"body1"}
                fontSize={"1.125rem"}
                color={"text.secondary"}
                sx={{
                  marginTop: { xs: "1rem", sm: "1.5rem" },
                  ...descriptionSx,
                }}
              >
                {renderDescription
                  ? renderDescription(
                      accent.main,
                      `color ${transitionTime}s linear`
                    )
                  : description}
              </Typography>
            )}
          </Stack>
          {renderButtons &&
            renderButtons(accent.main, `color ${transitionTime}s linear`)}
          {button && (
            <Button
              onClick={button.onClick}
              variant={button.variant || "outlined"}
              size="small"
              color={accentColor || "primary"}
              sx={{
                display: { xs: "none", sm: "flex" },
                flexShrink: 0,
                height: "2.625rem",
                fontSize: "1rem",
                fontWeight: 600,
                px: "1.25rem",
                "&:hover > svg": {
                  transform: "rotate(180deg) translateX(-0.125rem)",
                },
                ...button.sx,
              }}
              {...buttonProps}
            >
              {button.text}{" "}
              <ArrowBackOutlinedIcon
                sx={{
                  ml: "0.5rem",
                  transform: "rotate(180deg)",
                  transition: "transform .1s linear",
                  position: "relative",
                  height: "22px",
                  width: "18px",
                }}
              />
            </Button>
          )}
        </Stack>
      </Stack>
    );
  }
);
