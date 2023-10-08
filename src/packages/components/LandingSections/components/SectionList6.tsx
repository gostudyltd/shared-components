import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { AccentColor } from "./types";
import { accentColorBase } from "./utils";
import { iconBase } from "../icons";
import { montserratFamily } from "../../../constants/themeVars";
import { withCustomTheme } from "../../hoc/withCustomTheme";

type DataItem = {
  title: string;
  list?: string[];
  text?: string;
  button?: {
    text: string;
    onClick?: () => void;
  };
  isHighlighted?: boolean;
};

type CardItemProps = {
  data: DataItem;
  accentColor: AccentColor;
  idx: number;
};

const CardItem: React.FC<CardItemProps> = ({ data, accentColor, idx }) => {
  const accent = accentColorBase[accentColor];
  return (
    <>
      <Stack
        sx={{
          backgroundColor: data.isHighlighted ? accent.light : "#fff",
          borderRadius: "1.25rem",
          p: "1.25rem",
          height: { sm: "100%" },

          "& > div:first-of-type": {
            flexDirection: "column",
          },
        }}
      >
        <Stack direction={"row"}>
          <Box
            component={"span"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexShrink={0}
            sx={{
              marginBottom: { xs: "1rem", sm: "1.25rem" },
              width: { xs: "2.5rem", sm: "3rem" },
              height: { xs: "2.5rem", sm: "3rem" },
              border: `1px solid ${data.isHighlighted ? "#fff" : accent.light}`,
              borderRadius: ".75rem",
              "& path": {
                fill: data.isHighlighted ? "#fff" : accent.light,
              },

              "& > svg": {
                margin: 0,
              },
            }}
          >
            {iconBase[`step${idx + 1}` as keyof typeof iconBase]}
          </Box>
          <Typography
            variant="h3"
            color={"text.primary"}
            sx={{
              fontSize: { sm: "1.125rem", xs: "1rem" },
              fontWeight: "600",
              lineHeight: "1.44",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component={"div"}
              style={{
                color: data.isHighlighted ? "#fff" : undefined,
              }}
            >
              {data.title}
              {data.list && (
                <>
                  <br />
                  <br />
                  <Stack>
                    <Box
                      component={"ul"}
                      sx={{
                        margin: "0",
                        color: accent.light,
                        pl: "1.75rem",
                      }}
                    >
                      {data.list.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </Box>
                  </Stack>
                </>
              )}
              {data.button && (
                <Stack sx={{ mt: "auto" }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={data.button.onClick}
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.125rem" },
                      height: { xs: "2.625rem", sm: "3.5rem" },
                      backgroundColor: accent.light,
                      justifySelf: "flex-end",
                      mt: {
                        xs: "1.5rem",
                        sm: "2rem",
                      },
                      padding: 0,
                    }}
                  >
                    {data.button.text}
                  </Button>
                </Stack>
              )}
            </Box>
          </Typography>
        </Stack>

        {data.text && (
          <Typography
            variant={"body2"}
            fontSize={"1.125rem"}
            color={"text.secondary"}
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            {data.text}
          </Typography>
        )}
      </Stack>
    </>
  );
};

export type SectionList6Props = {
  data: DataItem[];
  accentColor?: AccentColor;
  postDescription?: string;
};

export const SectionList6: React.FC<SectionList6Props> = withCustomTheme(
  (props) => {
    const { data, accentColor = "primary", postDescription } = props;
    const [first, ...rest] = data;
    return (
      <Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={{ xs: "1rem", sm: "1.5rem" }}
        >
          <Stack sx={{ flex: "1 1 0" }}>
            <CardItem accentColor={accentColor} data={first} idx={0} />
          </Stack>
          <Stack display={"flex"} sx={{ flex: "2 2 0" }}>
            <Grid container spacing={{ xs: 2, sm: 3 }}>
              {rest.map((data, idx) => (
                <Grid key={data.title} item sm={6} xs={12}>
                  <CardItem
                    key={data.title}
                    accentColor="primary"
                    data={data}
                    idx={idx + 1}
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
        {postDescription && (
          <Box
            sx={{
              marginTop: { xs: "2rem", sm: "2.5rem" },
              mx: { xs: "1.25rem", sm: "1.5rem" },
            }}
          >
            <Typography
              fontFamily={montserratFamily}
              color={"rgba(0,0,0,0.54)"}
              sx={{ display: { xs: "none", sm: "block" }, fontSize: "1rem" }}
            >
              {postDescription}
            </Typography>
            <Typography
              color={"rgba(0,0,0,0.54)"}
              sx={{ display: { xs: "block", sm: "none" }, fontSize: ".875rem" }}
            >
              {postDescription}
            </Typography>
          </Box>
        )}
      </Stack>
    );
  }
);
