import * as React from "react";
import Grid, { GridProps } from "@mui/material/Grid";
import { AccentColor } from "./components/types";

export type SectionBasicCardListProps<T extends object> = {
  keyName: keyof T;
  data: T[];
  renderCard: (data: T, accentColor: AccentColor) => React.ReactNode;

  accentColor?: AccentColor;
  gridContainerProps?: GridProps;
  gridItemProps?: GridProps;
};

export const SectionBasicCardList = <T extends object>({
  data,
  renderCard,

  accentColor = "primary",
  gridContainerProps = {},
  gridItemProps = {},
}: SectionBasicCardListProps<T>) => {
  return (
    <Grid
      container
      spacing={{ xs: "1.25rem", sm: "1.5rem" }}
      width={"100%"}
      {...gridContainerProps}
    >
      {data.map((i) => (
        <Grid item key={JSON.stringify(i)} xs={12} sm={6} {...gridItemProps}>
          {renderCard(i, accentColor)}
        </Grid>
      ))}
    </Grid>
  );
};
