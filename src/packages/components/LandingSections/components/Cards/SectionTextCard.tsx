import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";
import React from "react";
import { iconBase } from "../../icons";
import { AccentColor } from "../types";
import { accentColorBase } from "../utils";

type SectionTextCardPropsShared = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  iconName?: keyof typeof iconBase | (string & {});
  renderIcon?: (icon: JSX.Element, color: string) => React.ReactNode;

  title?: string | React.ReactNode;
  renderTitle?: (
    text: string | React.ReactNode | undefined,
    color: string
  ) => React.ReactNode;
  text?: string | React.ReactNode;
  renderText?: (color: string) => React.ReactNode;

  sx?: SxProps;
  accentColor?: AccentColor;
  iconColor?: string;
  isHighlighted?: boolean;
};

export const SectionTextCard1: React.FC<SectionTextCardPropsShared> = (
  props
) => {
  const {
    sx,
    accentColor = "primary",
    renderText,
    renderTitle,
    text,
    iconName,
    title,
  } = props;

  const accent = accentColorBase[accentColor].main;
  return (
    <Stack sx={sx}>
      <Stack direction={"row"}>
        {iconName && (
          <Box
            component={"span"}
            flexShrink={"0"}
            sx={{
              width: { xs: "2rem", sm: "2.5rem" },
              "& path": {
                fill: accent,
              },
              marginRight: "12px",
            }}
          >
            {iconBase[iconName as keyof typeof iconBase]}
          </Box>
        )}
        <Typography
          variant="h3"
          color={"text.primary"}
          sx={{
            fontSize: { sm: "1.25rem", xs: "1rem" },
            fontWeight: "600",
            lineHeight: "1.44",
            display: "flex",
            alignItems: "center",
          }}
        >
          {renderTitle ? (
            renderTitle(title, accent)
          ) : (
            <span style={{ color: accent }}>{title}</span>
          )}
        </Typography>
      </Stack>
      <Box
        component={"hr"}
        sx={{
          height: "1px",
          backgroundColor: "#000",
          opacity: 0.12,
          width: "100%",
          my: { xs: "0.75rem", sm: "1.25rem" },
        }}
      />
      {(text || renderText) && (
        <Typography
          variant={"body2"}
          fontSize={"1.125rem"}
          color={"text.secondary"}
          sx={{
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          {renderText ? renderText(accent) : text}
        </Typography>
      )}
    </Stack>
  );
};

export const SectionTextCard2: React.FC<
  SectionTextCardPropsShared & { disableBorder?: boolean }
> = (props) => {
  const {
    sx,
    accentColor = "primary",
    renderText,
    renderTitle,
    text,
    iconName,
    title,
    disableBorder,
  } = props;
  const accent = accentColorBase[accentColor].main;
  return (
    <Stack
      sx={{
        backgroundColor: "#fff",
        borderRadius: "1.25rem",
        p: "1.25rem",
        borderBottom: "none",
        height: { sm: "100%" },
        ...sx,
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          marginBottom: { sm: "1.25rem", xs: ".75rem" },
        }}
      >
        {iconName && (
          <Box
            component={"span"}
            flexShrink={"0"}
            sx={{
              display: "flex",
              // width: { xs: '2rem', sm: '2.5rem' },
              "& path": {
                fill: accent,
              },
              "& > svg": {
                width: { xs: "2rem", sm: "2.5rem" },
                height: { xs: "2rem", sm: "2.5rem" },
              },
              marginRight: "12px",
            }}
          >
            {iconBase[iconName as keyof typeof iconBase]}
          </Box>
        )}
        <Typography
          variant="h3"
          color={"text.primary"}
          sx={{
            fontSize: { sm: "1.25rem", xs: "1rem" },
            fontWeight: "600",
            lineHeight: "1.44",
            display: "flex",
            alignItems: "center",
          }}
        >
          {renderTitle ? (
            renderTitle(title, accent)
          ) : (
            <span style={{ color: accent }}>{title}</span>
          )}
        </Typography>
      </Stack>
      {!disableBorder && (
        <Box
          component={"hr"}
          sx={{
            height: "1px",
            backgroundColor: "#000",
            opacity: 0.12,
            width: "100%",
            mt: "0",
            mb: { xs: "0.75rem", sm: "1.25rem" },
          }}
        />
      )}
      {(text || renderText) && (
        <Typography
          variant={"body2"}
          fontSize={"1.125rem"}
          color={"text.secondary"}
          sx={{
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          {renderText ? renderText(accent) : text}
        </Typography>
      )}
    </Stack>
  );
};

export const SectionTextCard4: React.FC<SectionTextCardPropsShared> = (
  props
) => {
  const {
    sx,
    accentColor = "primary",
    renderText,
    renderTitle,
    renderIcon,
    text,
    iconName,
    title,
    iconColor,
  } = props;
  const accent = iconColor ? iconColor : accentColorBase[accentColor].main;
  const icon = iconName && iconBase[iconName as keyof typeof iconBase];
  return (
    <Stack
      sx={{
        backgroundColor: "#fff",
        borderRadius: "1.25rem",
        p: "1.25rem",
        borderBottom: "none",
        height: { sm: "100%" },
        ...sx,
      }}
    >
      <Stack
        direction={"column"}
        sx={{
          marginBottom: { sm: ".75rem", xs: ".75rem" },
        }}
      >
        {icon && renderIcon ? (
          renderIcon(icon, accent)
        ) : (
          <Box
            component={"span"}
            flexShrink={"0"}
            className={"SectionTextCard4_icon"}
            sx={{
              "& path": {
                fill: accent,
              },
              "& > svg": {
                width: { xs: "2rem", sm: "2.5rem" },
                height: { xs: "2rem", sm: "2.5rem" },
              },
              marginBottom: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            {iconBase[iconName as keyof typeof iconBase]}
          </Box>
        )}
        <Typography
          variant="h3"
          sx={{
            fontSize: { sm: "1.125rem", xs: "1rem" },
            fontWeight: "600",
            lineHeight: "1.44",
            display: "flex",
            alignItems: "center",
          }}
        >
          {renderTitle ? renderTitle(title, accent) : <span>{title}</span>}
        </Typography>
      </Stack>
      {(text || renderText) && (
        <Typography
          variant={"body2"}
          fontSize={"1.125rem"}
          color={"text.secondary"}
          sx={{
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          {renderText ? renderText(accent) : text}
        </Typography>
      )}
    </Stack>
  );
};

export const SectionTextCard6: React.FC<SectionTextCardPropsShared> = (
  props
) => {
  const {
    sx,
    accentColor = "primary",
    renderTitle,
    renderIcon,
    iconColor,
    iconName,
    title,
  } = props;
  const accent = iconColor ? iconColor : accentColorBase[accentColor].main;

  const icon = iconName && iconBase[iconName as keyof typeof iconBase];
  return (
    <Stack
      sx={{
        backgroundColor: "#fff",
        borderRadius: "1.25rem",
        p: "1.25rem",
        borderBottom: "none",
        height: { sm: "100%" },
        ...sx,
      }}
    >
      <Stack direction={"row"} alignItems={"center"} gap={"1.125rem"}>
        {icon && renderIcon ? (
          renderIcon(icon, accent)
        ) : (
          <Box
            component={"span"}
            flexShrink={"0"}
            className={"SectionTextCard4_icon"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "48px", sm: "68px" },
              height: { xs: "48px", sm: "68px" },
              borderRadius: { xs: "12px", sm: "16px" },
              backgroundColor: "#ffffff",
              "& path": {
                fill: accent,
              },
              "& > svg": {
                width: { xs: "2rem", sm: "2.5rem" },
                height: { xs: "2rem", sm: "2.5rem" },
              },
            }}
          >
            {iconBase[iconName as keyof typeof iconBase]}
          </Box>
        )}
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: ".75rem", sm: "1.125rem" },
            fontWeight: "600",
            lineHeight: "1.44",
            display: "flex",
            alignItems: "center",
            "& span": { border: "none" },
          }}
        >
          {renderTitle ? (
            renderTitle(title, accent)
          ) : (
            <span style={{ border: "none" }}>{title}</span>
          )}
        </Typography>
      </Stack>
    </Stack>
  );
};

export type SectionTextCardProps = SectionTextCardPropsShared & {
  variant?: "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7";
};

export const SectionTextCard: React.FC<SectionTextCardProps> = ({
  variant,
  ...restProps
}) => {
  if (variant === "v5") {
    return (
      <SectionTextCard4
        renderIcon={(icon, color) => (
          <Box
            component={"span"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={".75rem"}
            sx={{
              width: { xs: "2.5rem", sm: "3rem" },
              height: { xs: "2.5rem", sm: "3rem" },
              border: `1px solid ${color}`,
              "& > svg": {
                width: { xs: "1.125rem", sm: "1.5rem" },
                height: { xs: "1.125rem", sm: "1.5rem" },
                "& path": {
                  fill: color,
                },
              },
              marginBottom: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            {icon}
          </Box>
        )}
        {...restProps}
      />
    );
  }

  if (variant === "v4") {
    return <SectionTextCard4 {...restProps} />;
  }

  if (variant === "v6") {
    const iconColor = accentColorBase["primary"].main;
    return (
      <SectionTextCard4
        // sx={{ '& .MuiStack-root': { width: { xs: '100%', sm: undefined } } }}
        renderTitle={(text) => (
          <Box
            component={"span"}
            fontSize={{ xs: "12px", sm: "18px" }}
            width={"100%"}
          >
            {text}
          </Box>
        )}
        renderIcon={(icon) => (
          <Box
            component={"span"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"100px"}
            width={"100%"}
            sx={{
              alignSelf: "center",
              backgroundColor: "#FFF",
              width: "100%",
              maxWidth: { xs: "38px", sm: "46px" },
              height: { xs: "38px", sm: "46px" },
              "& > svg": {
                width: "1.125rem",
                height: "1.125rem",
                "& path": {
                  fill: iconColor,
                },
              },
              marginBottom: { xs: "0", sm: "1.25rem" },
            }}
          >
            {icon}
          </Box>
        )}
        {...restProps}
      />
    );
  }

  if (variant === "v3") {
    return (
      <SectionTextCard2
        renderTitle={(text) => (
          <Box component={"span"} sx={{ color: "primary.main" }}>
            {text}
          </Box>
        )}
        disableBorder
        {...restProps}
      />
    );
  }

  if (variant === "v2") {
    return <SectionTextCard2 {...restProps} />;
  }

  if (variant === "v7") {
    return <SectionTextCard6 {...restProps} />;
  }

  return <SectionTextCard1 {...restProps} />;
};
