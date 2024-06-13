import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { accentColorBase } from "./utils";
import { AccentColor } from "./types";
import { iconBase } from "../icons";

export type SectionList1Props = {
  list: {
    text: string | React.ReactNode;
    iconName: keyof typeof iconBase;
  }[];

  accentColor?: AccentColor;
};

export const SectionList1: React.FC<SectionList1Props> = ({
  list,
  accentColor = "primary",
}) => {
  const accent = accentColorBase[accentColor];
  return (
    <Stack gap={"1.25rem"}>
      {list.map(({ text, iconName }, idx) => (
        <Stack
          key={typeof text === "string" ? text : iconName}
          direction={"row"}
          alignItems={"center"}
          sx={{
            backgroundColor: idx ? "#fff" : accent.main,
            borderRadius: "1.25rem",
            p: { xs: "1rem", sm: "1.5rem" },
          }}
        >
          <Box
            component={"span"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexShrink={"0"}
            sx={{
              height: { xs: "2rem", sm: "2.5rem" },
              width: { xs: "2rem", sm: "2.5rem" },
              marginRight: { xs: "1rem", sm: "1.25rem" },
              "& > svg  path": {
                fill: idx ? accent.main : "#ffffff",
              },
            }}
          >
            {iconBase[iconName]}
          </Box>
          <Typography
            variant="h4"
            display={"flex"}
            alignItems={"center"}
            sx={{
              lineHeight: 1.42,
              fontSize: { xs: "1rem", sm: "1.125rem" },
              minHeight: { xs: "2.25rem", sm: "2.5rem" },
            }}
          >
            {text}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};
