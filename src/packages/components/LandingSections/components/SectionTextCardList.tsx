import Grid, { GridProps } from "@mui/material/Grid";
import React from "react";
import { SectionTextCardProps, SectionTextCard } from "./Cards/SectionTextCard";
import { AccentColor } from "./types";

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
      spacing={{ xs: "1.25rem", sm: "1.5rem" }}
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
        </Grid>
      ))}
    </Grid>
  );
};
