import React, { ReactNode, useRef, useState } from "react";
import { Container, Stack, Typography, SxProps } from "@mui/material";
import { Box } from "@mui/system";
import { RoundedPlusIcon } from "../Icons/RoundedPlus";
import { SectionTitle } from "./components/SectionTitle";
import { montserratFamily } from "../../constants/themeVars";
// import { SectionContainerWrapperColorized } from "./components/SectionContainerWrapperColorized";
import { withCustomTheme } from "../hoc/withCustomTheme";
import { AccentColor } from "./components";
// import { accentColorBase } from "./components/utils";

type AccordionItemProps = {
  title: string | ReactNode;
  text?: string | ReactNode;
  renderText?: () => string | React.ReactNode;
  useItsOwnState?: boolean;
};

type AccordionProps = {
  title: string | ReactNode;
  text?: string | ReactNode;
  renderText?: () => string | React.ReactNode;
  isActive?: boolean;
  onClick: (title: string) => void;
  useItsOwnState?: boolean;
  accentColor: AccentColor;
  id: string;
};

const AccordionItem: React.FC<AccordionProps> = (props) => {
  const [active, setActive] = useState<boolean>(false);
  const textRef = useRef<null | HTMLDivElement>(null);
  const isActive = props.isActive || active;
  const maxHeight = isActive
    ? (textRef.current?.firstChild as HTMLSpanElement)?.scrollHeight
    : 0 + "px";
  // const accent = accentColorBase[props.accentColor].main;
  const handleClick = (id: string) => {
    if (props.useItsOwnState) setActive((st) => !st);
    else props.onClick(id);
  };
  return (
    <Box
      key={props.id}
      width={"100%"}
      p={"1rem"}
      onClick={() => handleClick(props.id)}
      sx={{
        backgroundColor: "background.paper",
        "& + &": {
          marginTop: "1rem",
        },
        cursor: "pointer",
        WebkitTapHighlightColor: "transparent",
        background: "rgba(227, 242, 253, 1)",
      }}
      borderRadius={{ xs: "12px", sm: "24px" }}
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
                fill: "rgba(41, 98, 255, 1)",
              },
            }}
          >
            <RoundedPlusIcon />
          </Box>
        </Box>
      </Box>
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
            fontSize: { xs: "16px", sm: "16px" },
            lineHeight: { xs: "20.8px", sm: "20.8px" },
            color: "rgba(0,0,0,0.87)",
          }}
        >
          {props.renderText ? props.renderText() : props.text}
        </Box>
      </Typography>
    </Box>
  );
};

export type AccordionSectionProps = {
  title: string;
  renderTitle?: (color: string, transition: string) => string | React.ReactNode;
  description: string | ReactNode;
  firstColumnData: AccordionItemProps[];
  secondColumnData: AccordionItemProps[];
  accentColor?: AccentColor;
  descriptionSx?: SxProps;
};

export const AccordionsSectionV2: React.FC<AccordionSectionProps> =
  withCustomTheme(
    ({
      title,
      renderTitle,
      description,
      firstColumnData,
      secondColumnData,
      accentColor = "primary",
      descriptionSx,
    }) => {
      const [activeAccordionTitle, setActiveAccordionTitle] = useState<
        null | string
      >(null);
      const handleAccordionItemClick = (id: string) => {
        setActiveAccordionTitle((st) => {
          if (st === id) return null;
          return id;
        });
      };

      return (
        <Container
          maxWidth={"md"}
          component={"section"}
          sx={{
            display: "flex",
            flexDirection: { xs: "column" },
            justifyContent: { xs: "flex-start", sm: "flex-start" },
            alignItems: "center",
            gap: { xs: "2.5rem", sm: "3.75rem" },
            py: { xs: "3rem", sm: "6.25rem" },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box width={"100%"} maxWidth={{ sm: "816px" }}>
            <SectionTitle
              title={title}
              renderTitle={renderTitle}
              sx={{ fontSize: { xs: "32px", sm: "42px" } }}
              // wrapperSx={{ marginBottom: { xs: "40px", sm: "50px" } }}
              centered
              description={description}
              descriptionSx={{
                fontSize: { xs: "20px", sm: "22px" },
                ...descriptionSx,
              }}
            />

            {/* <Typography
              variant={"body1"}
              fontSize={"1.1rem"}
              color={"text.secondary"}
            >
              {description}
            </Typography> */}
          </Box>
          <Stack
            sx={{
              width: "100%",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "flex-start", sm: "flex-start" },
              alignItems: "flex-start",
              gap: { xs: ".75rem", sm: "1.5rem" },
            }}
          >
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-start"}
            >
              {firstColumnData.map((i, idx) => (
                <AccordionItem
                  id={`l-${idx}`}
                  key={`l-${idx}`}
                  {...i}
                  isActive={`l-${idx}` === activeAccordionTitle}
                  onClick={handleAccordionItemClick}
                  accentColor={accentColor}
                />
              ))}
            </Box>
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-start"}
            >
              {secondColumnData.map((i, idx) => (
                <AccordionItem
                  id={`r-${idx}`}
                  key={`r-${idx}`}
                  {...i}
                  isActive={`r-${idx}` === activeAccordionTitle}
                  onClick={handleAccordionItemClick}
                  accentColor={accentColor}
                />
              ))}
            </Box>
          </Stack>
        </Container>
      );
    }
  );
