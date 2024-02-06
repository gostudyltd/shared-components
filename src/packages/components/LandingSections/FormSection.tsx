import { Box, Container, Stack, Typography } from "@mui/material";
import React, { MutableRefObject } from "react";
import { AccentColor } from "./components/types";
import { accentColorBase } from "./components/utils";
import {
  HubspotForm,
  HubspotFormTranslations,
} from "./components/SectionHubspotForm";
import { withCustomTheme } from "../hoc/withCustomTheme";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
// import { ReactComponent as Bg } from "./images/background.svg";
import { Background } from "./images/background";

export type FormFields = {
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
};

export type FormSectionProps = {
  title?: string | React.ReactNode;
  renderTitle?: (color: string) => string | React.ReactNode;
  formTranslations: HubspotFormTranslations;
  description: string | React.ReactNode;
  nodeRef?: MutableRefObject<HTMLDivElement | null>;
  accentColor?: AccentColor;
  hubspotConfig: {
    portalId: string;
    formId: string;
    onSubmit?: VoidFunction;
  };
  buttonColor?: string;
  bgColor?: string;
};

const getBackgroundByAccentColor = (accentColor: AccentColor): string => {
  if (accentColor === "warning")
    return "linear-gradient(282.72deg, #FFEDD1 31.93%, #FFF3E0 31.94%)";
  // if (accentColor === 'error') return 'linear-gradient(282.72deg, #FFEDD1 31.93%, #FFF3E0 31.94%)'
  return "linear-gradient(282.72deg, #D3EEFF 31.93%, #E1F3FF 31.94%)";
};

export const FormSection: React.FC<FormSectionProps> = withCustomTheme(
  (props) => {
    const {
      title,
      renderTitle,
      description,
      nodeRef,
      accentColor = "warning",
      formTranslations,
      hubspotConfig,
      bgColor,
      buttonColor,
    } = props;
    const accent = accentColorBase[accentColor];

    return (
      <Container ref={nodeRef} maxWidth={"md"} component={"section"}>
        <Box
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "flex-start", sm: "center" },
            alignItems: "center",
            gap: { xs: "2em", sm: "3.75em" },
            my: { xs: "3em", sm: "6.25em" },
            padding: { xs: "1.25em", sm: "2.5em" },
            background: bgColor ?? getBackgroundByAccentColor(accentColor),
            borderRadius: bgColor ? { xs: "24px", sm: "40px" } : "2em",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {bgColor && (
            <Background
              sx={{
                position: "absolute",
                right: "0",
                bottom: "0",
                height: { xs: "389px", sm: "100%" },
                width: { xs: "402px", sm: "704px" },
                transform: { xs: "rotate(356deg)", sm: "none" },
                zIndex: "0",
              }}
            />
          )}
          <Stack
            gap={{ xs: "1em", sm: "1.5em" }}
            textAlign={{ xs: "center", sm: "left" }}
            width={"100%"}
            zIndex={"1"}
          >
            <Typography variant="h3" fontSize={"1.75rem"} fontWeight={"600"}>
              {renderTitle ? renderTitle(accent.main) : title}
            </Typography>
            <Typography
              variant={"body1"}
              fontSize={"1.125rem"}
              color={"text.secondary"}
            >
              {description}
            </Typography>
          </Stack>
          <HubspotProvider>
            <HubspotForm
              buttonColor={buttonColor}
              hubspotConfig={hubspotConfig}
              translations={
                formTranslations ?? {
                  language: "en",
                  content: {
                    acceptTerms: "string",
                    formSubmitted: "string",
                  },
                }
              }
            />
          </HubspotProvider>
        </Box>
      </Container>
    );
  }
);
