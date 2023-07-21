import { ThemeProvider } from '@mui/material';
import theme from '../../config/theme';

export const withCustomTheme =
  <T extends object>(Component: React.ComponentType<T>) =>
  (props: T) => {
    return (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    );
  };
