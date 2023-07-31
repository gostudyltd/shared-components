import React, { Fragment } from 'react';
import { Box, Stack, SxProps } from '@mui/material';
import { montserratFamily, palette } from '../../../constants/themeVars';
import { iconBase } from '../icons';
import { withCustomTheme } from '../../hoc/withCustomTheme';
import { AccentColor } from './types';
import { accentColorBase } from './utils';

export type HorizontalListWithSeparatorProps = {
  data: {
    // eslint-disable-next-line @typescript-eslint/ban-types
    icon: keyof typeof iconBase | (string & {});
    text: string;
  }[];

  sx?: SxProps;
  itemSx?: SxProps;
  accentColor?: AccentColor;
};
export const HorizontalListWithSeparator: React.FC<HorizontalListWithSeparatorProps> =
  withCustomTheme(({ data, sx = {}, itemSx = {}, accentColor = 'primary' }) => {
    return (
      <Stack
        direction={'row'}
        // alignItems={'center'}
        alignItems={'stretch'}
        justifyContent={'space-between'}
        sx={{
          backgroundColor: palette.primary?.contrastText ?? '#FFFFFF',
          maxWidth: '72rem',
          width: '100%',
          zIndex: 2,
          p: { xs: '1rem', sm: '1.75rem' },
          boxShadow: '1',
          borderRadius: '1.25rem',
          flexDirection: { xs: 'column', sm: 'row' },
          ...sx,
        }}
      >
        {/* <Stack > */}
        {data.map(({ icon, text }, idx, arr) => {
          const itemMaxWIdth =
            data.length === 3
              ? '20.125rem'
              : data.length === 2
              ? '40.25rem'
              : '100%';

          return (
            <Fragment key={text}>
              <Stack
                key={text}
                direction={'row'}
                sx={{
                  width: '100%',
                  maxWidth: {
                    xs: 'inherit',
                    sm: itemMaxWIdth,
                    alignItems: 'center',
                  },
                  '& > svg': {
                    width: { xs: '2rem', sm: '2.5rem' },
                    height: { xs: '2rem', sm: '2.5rem' },
                    marginRight: { xs: '1rem', sm: '1.25rem' },
                    flexShrink: 0,
                    '& path': {
                      fill: accentColorBase[accentColor].main,
                    },
                  },
                  ...itemSx,
                }}
              >
                {iconBase[icon as keyof typeof iconBase] ? (
                  iconBase[icon as keyof typeof iconBase]
                ) : (
                  <Box
                    component={'img'}
                    src={icon}
                    flexShrink={'0'}
                    sx={{
                      width: { xs: '2rem', sm: '2.5rem' },
                      height: { xs: '2rem', sm: '2.5rem' },
                      marginRight: { xs: '1rem', sm: '1.25rem' },
                    }}
                  />
                )}
                <Box
                  fontFamily={montserratFamily}
                  fontSize={'1rem'}
                  fontWeight={600}
                  color={'rgba(0,0,0,0.54)'}
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.43,
                  }}
                >
                  {text}
                </Box>
              </Stack>
              <Box
                component={'span'}
                flexShrink={'0'}
                sx={{
                  backgroundColor: 'rgba(0,0,0,.12)',
                  width: { xs: 'auto', sm: '2px' },
                  height: { xs: '1px', sm: 'auto' },
                  m: { xs: '1.25rem 0', sm: '0' },
                  display: arr.length - 2 >= idx ? 'block' : 'none',
                }}
              />
            </Fragment>
          );
        })}
      </Stack>
    );
  });
