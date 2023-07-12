import * as Colors from '@mui/material/colors'
import { PaletteOptions } from '@mui/material'
import { colorChannel } from '@mui/system'

declare module '@mui/material/styles' {
  interface Palette {
    Signed: Palette['primary']
    Default: Palette['primary']
    Accepted: Palette['primary']
    Waiting: Palette['primary']
    Sign: Palette['primary']
    Error: Palette['primary']
    Expired: Palette['primary']
  }
  interface PaletteOptions {
    Signed: PaletteOptions['primary']
    Default: PaletteOptions['primary']
    Accepted: PaletteOptions['primary']
    Waiting: PaletteOptions['primary']
    Sign: PaletteOptions['primary']
    Error: PaletteOptions['primary']
    Expired: PaletteOptions['primary']
  }

  interface PaletteColorOptions {
    light?: string
    main: string
    dark?: string
    contrastText?: string
    states?: {
      hover: string
      outlinedBorder: string
      focus?: string
    }
  }
}
/**
 * Builds missing tokens by alpha
 * @param color
 * @param alpha
 * @returns
 */
const buildStatesTokens = (color: string, alpha: number): string => `rgba(${colorChannel(color)}/${alpha})`

export const palette = {
  primary: {
    main: '#0B4E83',
    dark: '#0E5E9C',
    light: '#42A5F5',
    contrastText: '#FFFFFF',
    states: {
      hover: buildStatesTokens('#0B4E83', 0.04),
      outlinedBorder: buildStatesTokens('#0B4E83', 0.5),
    },
  },
  secondary: {
    main: '#E1F3FF',
    dark: '#D3EEFF',
    light: '#BA68C8',
    contrastText: '#0B4E83',
    states: {
      focus: buildStatesTokens('#E1F3FF', 0.12),
    },
  },
  action: {
    hover: 'rgba(0, 0, 0, 0.04)',
    selected: 'rgba(0, 0, 0, 0.08)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    active: 'rgba(29, 77, 149, 0.4)',
  },
  error: {
    main: 'rgba(211, 47, 47, 1)',
    dark: 'rgba(198, 40, 40, 1)',
    light: 'rgba(239, 83, 80, 1)',
    contrastText: 'rgba(255, 255, 255, 1)',
    states: {
      hover: 'rgba(211, 47, 47, 0.04)',
      outlinedBorder: 'rgba(211, 47, 47, 0.5)',
    },
  },
  background: {
    default: 'white',
    paper: 'white',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(53, 68, 91, 0.38)',
  },
  Signed: {
    main: Colors.purple[50],
    light: Colors.purple[600],
    dark: Colors.purple[900],
    contrastText: Colors.purple[800],
  },
  Expired: {
    main: Colors.grey[50],
    light: Colors.grey[600],
    dark: Colors.grey[900],
    contrastText: Colors.grey[800],
  },
  Default: {
    main: Colors.lightBlue[50],
    light: Colors.lightBlue[600],
    dark: Colors.lightBlue[900],
    contrastText: Colors.lightBlue[800],
  },
  Accepted: {
    main: Colors.green[50],
    light: Colors.green[600],
    dark: Colors.green[900],
    contrastText: Colors.green[800],
  },
  Waiting: {
    main: Colors.yellow[50],
    light: Colors.yellow[600],
    dark: Colors.yellow[900],
    contrastText: Colors.yellow[800],
  },
  Sign: {
    main: Colors.indigo[50],
    light: Colors.indigo[600],
    dark: Colors.indigo[900],
    contrastText: Colors.indigo[800],
  },
  Error: {
    main: Colors.red[50],
    light: Colors.red[600],
    dark: Colors.red[900],
    contrastText: Colors.red[800],
  },
} as PaletteOptions
