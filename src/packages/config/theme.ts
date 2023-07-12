import { createTheme, Shadows } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles/createTheme";
import { palette, typography, components } from "../constants/themeVars";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xl: false;
  }
}

export const themeOptions: ThemeOptions = {
  shadows: [
    ...createTheme({}).shadows.map((shadow, i) => {
      switch (i) {
        case 1:
          return "0px 4px 24px rgba(0, 0, 0, 0.05)";
        default:
          return shadow;
      }
    }),
  ] as Shadows,
  shape: {
    borderRadius: 12,
  },
  palette: palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 1024,
      md: 1152,
      lg: 1440,
    },
  },
  typography: typography,
  components: components,
};
const theme = () => createTheme(themeOptions);

export default theme;
