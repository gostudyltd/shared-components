import { palette } from '../../../constants/themeVars';
import { AccentColor } from './types';

type AccentColorBaseType = {
  [accentColor in AccentColor]: {
    main: string;
    secondary: string;
    light: string;
    overlayFill: string;
  };
};

export const accentColorBase: AccentColorBaseType = {
  warning: {
    main: palette.warning?.main ?? '#ED6C02',
    light: '#FFCC80',
    secondary: '#FFF3E0',
    overlayFill: '#FFCC80',
  },
  primary: {
    main: palette.primary?.main ?? '#0B4E83',
    light: palette.primary?.light ?? '#42A5F5',
    secondary: '#E1F3FF',
    overlayFill: '#81D4FA',
  },
  error: {
    main: '#D32F2F',
    light: palette.error?.light ?? 'rgba(239, 83, 80, 1)',
    secondary: '#FEEBEE',
    overlayFill: '#EF9A9A',
  },
};
