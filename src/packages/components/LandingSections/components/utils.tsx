import { palette } from '../../../constants/themeVars';
import { AccentColor } from './types';

export const accentColorBase: {
  [accentColor in AccentColor]: {
    main: string;
    secondary: string;
    light: string;
  };
} = {
  warning: {
    main: palette.warning?.main ?? '#ED6C02',
    light: palette.primary?.light ?? '#42A5F5',
    secondary: '#FFF3E0',
  },
  primary: {
    main: palette.primary?.main ?? '#0B4E83',
    light: palette.primary?.light ?? '#42A5F5',
    secondary: '#E1F3FF',
  },
  error: {
    main: '#D32F2F',
    light: palette.error?.light ?? 'rgba(239, 83, 80, 1)',
    secondary: '#FEEBEE',
  },
};
