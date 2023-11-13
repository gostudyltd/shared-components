import React from "react";
import { AccentColor } from "../types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { accentColorBase } from "../utils";
import { montserratFamily } from "../../../../constants/themeVars";
import { CdnImage } from "../../../../types/components";
import { getPicture } from "../../../../helpers/CloudinaryImage";

export type SectionCard4Props = {
  image: CdnImage;
  title?: string;
  text: string;

  isHighlighted?: boolean;
  accentColor?: AccentColor;
};

export const SectionCard4: React.FC<SectionCard4Props> = (props) => {
  const { image, title, text, accentColor = "primary", isHighlighted } = props;
  const accent = accentColorBase[accentColor];
  return (
    <Stack
      alignItems={"center"}
      height={"100%"}
      p={"1.25rem"}
      borderRadius={"1.25rem"}
      // border={`1px solid ${isHighlighted ? '#E1F5FE' : '#81D4FA'}`}
      sx={{ backgroundColor: "#F7F7F7" }}
      gap={{ xs: "18px", sm: "32px" }}
    >
      {getPicture(
        image.src,
        image.width,
        image.height,
        {
          width: "100%",
          maxWidth: { xs: "400px", sm: "285px" },
          borderRadius: { xs: "10px", sm: "20px" },
        },
        {
          width: "100%",
          maxWidth: { xs: "400px", sm: "285px" },
          height: { xs: "162px", sm: "218px" },
          borderRadius: { xs: "10px", sm: "20px" },
          objectFit: { xs: isHighlighted ? "cover" : "contain", sm: "cover" },
        }
        // 'specialist'
      )}
      <Stack alignItems={"center"}>
        <Typography
          marginBottom={{ xs: ".25rem", sm: ".5rem" }}
          fontSize={{ xs: "1rem", sm: "1.5rem" }}
          lineHeight={{ xs: "19.5px", sm: "29.26px" }}
          fontWeight={"600"}
          color={accent.main}
          fontFamily={montserratFamily}
        >
          {title}
        </Typography>
        <Typography
          fontSize={{ xs: ".75rem", sm: "1.125rem" }}
          fontFamily={montserratFamily}
          color={"#606F87"}
        >
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
};
