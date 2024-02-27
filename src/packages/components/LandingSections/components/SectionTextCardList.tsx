import Grid, { GridProps } from "@mui/material/Grid";
import React from "react";
import { SectionTextCardProps, SectionTextCard } from "./Cards/SectionTextCard";
import { AccentColor } from "./types";
import { Box, Link, Typography } from "@mui/material";
import { montserratFamily } from "../../../constants/themeVars";
import { ChevronRight } from "@mui/icons-material";

type SectionTextCardListProps = {
  data: SectionTextCardProps[];
  cardVariant?: SectionTextCardProps["variant"];

  accentColor?: AccentColor;
  gridContainerProps?: GridProps;
  gridItemProps?: GridProps;
};

export const SectionTextCardList: React.FC<SectionTextCardListProps> = ({
  data,
  cardVariant,

  accentColor,
  gridContainerProps = {},
  gridItemProps = {},
}) => {
  return (
    <Grid
      container
      spacing={{ xs: "1rem", sm: "1.5rem" }}
      width={"100%"}
      {...gridContainerProps}
    >
      {data.map((i, idx) => (
        <Grid
          item
          key={i.title?.toString() ?? idx}
          xs={12}
          sm={6}
          {...gridItemProps}
        >
          <SectionTextCard
            variant={cardVariant}
            accentColor={accentColor}
            {...i}
          />
          {i.link && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: { xs: "8px 16px", sm: "16px 20px" },
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: montserratFamily,
                  fontSize: "16px",
                  lineHeight: "22.88px",
                  fontWeight: "600",
                  color: "text.secondary",
                }}
              >
                {i.link.title}
              </Typography>
              <Link
                href={i.link.to}
                sx={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  color: "primary.main",
                  fontFamily: montserratFamily,
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  textDecoration: "none",
                  padding: { xs: "6px 8px", sm: "6px 8px" },
                }}
              >
                {i.link.text}
                <ChevronRight
                  sx={{ width: "20px", sm: "20px", flexShrink: 0 }}
                />
              </Link>
            </Box>
          )}
        </Grid>
      ))}
    </Grid>
  );
};
