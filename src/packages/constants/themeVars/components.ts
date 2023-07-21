import { montserratFamily } from '../../constants/themeVars/typography';
import { Components, Theme } from '@mui/material';

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    Signed: true;
    Default: true;
    Accepted: true;
    Waiting: true;
    Sign: true;
    Error: true;
    Expired: true;
  }
}
declare module '@mui/material/FormControl' {
  interface FormControlPropsOverrides {
    variants: { custom: true };
  }
}

export const components = {
  MuiMenu: {
    defaultProps: {
      disableScrollLock: true,
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        '&.customfilled': {
          padding:
            ownerState.size === 'small' ? '0.25em 0.5em' : '0.5em 0.75em',
          borderRadius: '0.75em',
          backgroundColor: 'rgba(0, 117, 255, 0.05)',
          '& .MuiInput-root': {
            '&:before': {
              content: 'none',
            },
          },
          '& .MuiInput-input': {
            padding: 0,
          },
          '& .Mui-focused': {
            '&:after': {
              content: 'none',
            },
          },
          '& .MuiInputLabel-root': {
            top: ownerState.size === 'small' ? '0.25em' : '0.5em',
            left: ownerState.size === 'small' ? '0.5em' : '0.75em',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.palette.action.disabled,
          },
          '& .MuiInputAdornment-root .MuiSvgIcon-root': {
            color: theme.palette.text.disabled,
          },
        },
      }),
    },
  },
  MuiChip: {
    variants: [
      {
        props: { size: 'small' },
        style: { fontSize: '0.625em', fontWeight: '500' },
      },
      {
        props: { variant: 'outlined' },
        style: {},
      },
    ],
  },
  MuiSvgIcon: {
    variants: [
      {
        props: { fontSize: 'medium' },
        style: { fontSize: '1.25em' },
      },
      {
        props: { fontSize: 'small' },
        style: { fontSize: '0.875em' },
      },
    ],
  },
  MuiLink: {
    defaultProps: {
      sx: { textDecoration: 'none' },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButton: {
    styleOverrides: {
      sizeMedium: {
        fontSize: '0.875em',
        fontWeight: '600',
        lineHeight: '1.5em',
      },
      sizeLarge: {
        fontSize: '1em',
        fontWeight: '600',
        lineHeight: '1.625em',
      },
      root: {
        textTransform: 'none',
        fontFamily: montserratFamily,
      },
    },
  },
  MuiIconButton: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        root: {
          width: '24px',
          height: '30px',
        },
        '& .MuiSvgIcon-root': {
          color: theme.palette.action.active,
        },
        '&.Mui-checked .MuiSvgIcon-root': {
          color: theme.palette.primary.main,
        },
      }),
    },
  },
  MuiRadio: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiSvgIcon-root': {
          color: theme.palette.action.active,
        },
        '&.Mui-checked .MuiSvgIcon-root': {
          color: theme.palette.primary.main,
        },
      }),
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        margin: '0',
        boxShadow: 'none',

        ':before': {
          display: 'none',
        },
        '&.Mui-expanded': {
          margin: '0',
          minHeight: 'unset',
        },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        minHeight: 'unset',
        padding: '0',

        '&.Mui-expanded': {
          minHeight: 'unset',
        },
      },
      content: {
        margin: '0',

        '&.Mui-expanded': {
          margin: '0',
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: '0',
      },
    },
  },
} as Components<Omit<Theme, 'components'>>;
