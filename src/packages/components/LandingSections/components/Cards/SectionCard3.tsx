import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";
import React from "react";
import { AccentColor } from "../types";
import { Box, Stack } from "@mui/system";
import { accentColorBase } from "../utils";

export type SectionCard3Props = {
  author: string;
  description: string;
  text: string;
  accentColor?: AccentColor;
  sx?: SxProps;
  avatar?: string;
};

export const SectionCard3: React.FC<SectionCard3Props> = ({
  author,
  description,
  text,
  accentColor = "primary",
  sx = {},
  avatar,
}) => {
  const accent = accentColorBase[accentColor];
  const firstLettersOfFullName = author
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <Stack
      sx={{
        backgroundColor: "background.paper",
        p: { xs: "1rem", sm: "1.25rem" },
        borderRadius: "1.25rem",
        overflow: "hidden",
        height: "100%",
        ...sx,
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        sx={{ marginBottom: "1rem" }}
      >
        {avatar ? (
          <Box
            component="img"
            src={avatar}
            sx={{
              flexShrink: "0",
              width: { xs: "4rem", sm: "5rem" },
              height: { xs: "4rem", sm: "5rem" },
              borderRadius: "50%",
              marginRight: { xs: "1rem", sm: "1.25rem" },
            }}
          />
        ) : (
          <Box
            display={"flex"}
            alignItems={"center"}
            flexShrink={"0"}
            justifyContent={"center"}
            sx={{
              width: { xs: "4rem", sm: "5rem" },
              height: { xs: "4rem", sm: "5rem" },
              backgroundColor: accent.secondary,
              borderRadius: "50%",
              marginRight: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            <Typography
              variant="h3"
              fontWeight={"600"}
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.75rem" },
                color: accent.main,
              }}
            >
              {firstLettersOfFullName}
            </Typography>
          </Box>
        )}
        <Stack>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem" },
              marginBottom: "0.5rem",
            }}
          >
            {author}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              color: "rgba(0,0,0,0.54)",
            }}
          >
            {description}
          </Typography>
        </Stack>
      </Stack>
      <Typography
        sx={{
          fontSize: { xs: "0.875rem", sm: "1rem" },
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};
