import React, { useRef, useState } from "react";
import { Container, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { RoundedPlusIcon } from "../Icons/RoundedPlus";
import { SectionTitle } from "../LandingSections/components/SectionTitle";
import { montserratFamily } from "../../constants/themeVars";
import { SectionContainerWrapperColorized } from "./components/SectionContainerWrapperColorized";
import { withCustomTheme } from "../hoc/withCustomTheme";
import { AccentColor } from "./components";
import { accentColorBase } from "./components/utils";
import { ChevronRight } from "@mui/icons-material";

type AccordionItemProps = {
  title: string;
  text?: string;
  renderText?: () => string | React.ReactNode;
  useItsOwnState?: boolean;
  link?: {
    text: string;
    to: string;
  };
};

type AccordionProps = {
  title: string;
  text?: string;
  link?: {
    text: string;
    to: string;
  };
  renderText?: () => string | React.ReactNode;
  isActive?: boolean;
  onClick: (title: string) => void;
  useItsOwnState?: boolean;
  accentColor: AccentColor;
};

const AccordionItem: React.FC<AccordionProps> = (props) => {
  const [active, setActive] = useState<boolean>(false);
  const textRef = useRef<null | HTMLDivElement>(null);
  const isActive = props.isActive || active;
  const maxHeight = isActive
    ? (textRef.current?.firstChild as HTMLSpanElement)?.scrollHeight
    : 0 + "px";
  const accent = accentColorBase[props.accentColor].main;
  const handleClick = (title: string) => {
    if (props.useItsOwnState) setActive((st) => !st);
    else props.onClick(title);
  };
  return (
    <Box
      key={props.title}
      width={"100%"}
      p={"1rem"}
      onClick={() => handleClick(props.title)}
      sx={{
        backgroundColor: "background.paper",
        "& + &": {
          marginTop: "1rem",
        },
        cursor: "pointer",
        WebkitTapHighlightColor: "transparent",
      }}
      borderRadius={".75rem"}
    >
      <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
        <Typography
          sx={{
            fontSize: { sm: "1.125rem", xs: "1rem" },
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            fontFamily: montserratFamily,
          }}
        >
          {props.title}
        </Typography>
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          flexShrink={"0"}
          sx={{
            display: { xs: "flex", sm: "flex" },
            transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform .15s linear",
            width: { xs: "2rem", sm: "2.625rem" },
            height: { xs: "2rem", sm: "2.625rem" },
          }}
        >
          <Box
            component={"span"}
            display={"block"}
            sx={{
              width: { xs: "1.0625rem", sm: "1.25rem" },
              height: { xs: "1.0625rem", sm: "1.25rem" },
              "& path": {
                fill: accent,
              },
            }}
          >
            <RoundedPlusIcon />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          variant={"body2"}
          fontSize={"1.125rem"}
          overflow={"hidden"}
          sx={{
            fontSize: { xs: "0.875rem", sm: "1rem" },
            maxHeight,
            transition: "all .2s linear",
          }}
          ref={textRef}
        >
          <Box
            component={"span"}
            sx={{
              paddingTop: { xs: ".75rem", sm: "1rem" },
              display: "block",
              fontSize: { xs: ".875rem", sm: "1rem" },
              lineHeight: { xs: "1.43", sm: "1.5" },
              color: "rgba(0,0,0,0.54)",
            }}
          >
            {props.renderText ? props.renderText() : props.text}
            {props.link && (
              <Link
                href={props.link.to}
                sx={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  paddingTop: { xs: ".75rem", sm: "1rem" },
                  color: "primary.main",
                  fontFamily: montserratFamily,
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  textDecoration: "none",
                }}
              >
                {props.link.text}
                <ChevronRight
                  sx={{ width: "20px", sm: "20px", flexShrink: 0 }}
                />
              </Link>
            )}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export type AccordionSectionProps = {
  title: string;
  description: string;
  data: AccordionItemProps[];
  accentColor?: AccentColor;
};

export const AccordionSection: React.FC<AccordionSectionProps> =
  withCustomTheme(({ title, description, data, accentColor = "primary" }) => {
    const [activeAccordionTitle, setActiveAccordionTitle] = useState<
      null | string
    >(null);
    const handleAccordionItemClick = (title: string) => {
      setActiveAccordionTitle((st) => {
        if (st === title) return null;
        return title;
      });
    };

    return (
      <SectionContainerWrapperColorized
        accentColor={accentColor}
        overlayVariant="v2"
      >
        <Container
          maxWidth={"md"}
          component={"section"}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "flex-start", sm: "flex-start" },
            gap: { xs: "2.5rem", sm: "3.75rem" },
            py: { xs: "3rem", sm: "6.25rem" },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box width={"100%"} maxWidth={{ sm: "29.125rem" }}>
            <SectionTitle
              title={title}
              wrapperSx={{ marginBottom: { xs: "1.5rem", sm: "1.5rem" } }}
            />

            <Typography
              variant={"body1"}
              fontSize={"1.1rem"}
              color={"text.secondary"}
            >
              {description}
            </Typography>
          </Box>
          <Box width={"100%"} display={"flex"} flexDirection={"column"}>
            {data.map((i) => (
              <AccordionItem
                key={i.title}
                {...i}
                isActive={i.title === activeAccordionTitle}
                onClick={handleAccordionItemClick}
                accentColor={accentColor}
                link={i.link}
              />
            ))}
          </Box>
        </Container>
      </SectionContainerWrapperColorized>
    );
  });
