import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}
export const defaultFontFamily = '"Inter","Helvetica","Arial",sans-serif';
export const montserratFamily = `"Montserrat",${defaultFontFamily}`;

export const typography = {
  allVariants: {
    letterSpacing: "-0.2px",
  },
  fontFamily: defaultFontFamily,
  h1: {
    fontFamily: montserratFamily,
    fontWeight: 300,
    fontSize: "6em",
    letterSpacing: "-1.5px",
  },
  h2: {
    fontFamily: montserratFamily,
    fontWeight: 600,
    fontSize: "2.25em",
    lineHeight: "132%",
  },
  h3: {
    fontFamily: montserratFamily,
    fontWeight: 400,
    fontSize: "3em",
  },
  h4: {
    fontFamily: montserratFamily,
    fontWeight: 600,
    fontSize: "1.25em",
  },
  h5: {
    fontFamily: montserratFamily,
    fontWeight: 600,
    fontSize: "1.5em",
  },
  h6: {
    fontFamily: montserratFamily,
    fontWeight: 500,
    fontSize: "1.25em",
    lineHeight: "142%",
  },
  body1: {
    fontWeight: 400,
    fontSize: "1em",
  },
  body2: {
    fontWeight: 400,
    fontSize: "0.875em",
  },
  body3: {
    fontWeight: 500,
    fontSize: "0.875em",
  },
  subtitle1: {
    fontFamily: montserratFamily,
    fontWeight: 600,
    fontSize: "1em",
  },
  subtitle2: {
    fontFamily: montserratFamily,
    fontWeight: 500,
    fontSize: "0.875em",
  },
  overline: {
    fontWeight: 400,
    fontSize: "0.75em",
  },
  caption: {
    fontWeight: 400,
    fontSize: "0.75em",
    lineHeight: "1.5em",
  },
} as TypographyOptions;
