import React from 'react';
import { SectionContainer } from './components/SectionContainer';
import { Box, Button, Stack, SxProps } from '@mui/material';
import { SectionTitle } from './components/SectionTitle';
import {
  AccentColor,
  SectionContainerProps,
  SectionTitleProps,
} from './components/types';
import { withCustomTheme } from '../hoc/withCustomTheme';

type LeftContentProps = {
  content?: React.ReactNode;
  button?: RoundedColorizedSection['button'];
  sx?: SxProps;
};
const LeftContent: React.FC<LeftContentProps> = ({ content, button, sx }) => {
  return (
    <Stack sx={sx}>
      {content}
      {button && (
        <Box sx={{ marginTop: { xs: '2rem', sm: '2.5rem' } }}>
          <Button
            variant='contained'
            color={'warning'}
            size='large'
            onClick={button.onClick}
            sx={{
              minWidth: { xs: '100%', sm: '10rem' },
              px: { xs: '0', sm: '2rem' },
              fontSize: { xs: '1rem', sm: '1.125rem' },
              height: { xs: '2.625rem', sm: '3.5rem' },
            }}
          >
            {button.text}
          </Button>
        </Box>
      )}
    </Stack>
  );
};

const getBackgroundByAccentColor = (
  accentColor: AccentColor,
  revertGradient?: boolean
): string => {
  if (accentColor === 'warning')
    return `linear-gradient(${
      revertGradient ? '-239.72deg' : '282.72deg'
    }, #FFEDD1 31.93%, #FFF3E0 31.94%)`;
  // if (accentColor === 'error') return 'linear-gradient(282.72deg, #FFEDD1 31.93%, #FFF3E0 31.94%)'
  return `linear-gradient(linear-gradient(${
    revertGradient ? '-239.72deg' : '282.72deg'
  }, #D3EEFF 31.93%, #E1F3FF 31.94%)`;
};

type RoundedColorizedSection = {
  accentColor?: AccentColor;
  sectionTitle?: SectionTitleProps;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  rightContentSx?: SxProps;
  bottomContent?: React.ReactNode;
  button?: {
    text: string;
    onClick: () => void;
  };
  image?: string;
  sx?: SxProps;
  sectionContainer?: SectionContainerProps;
  revertGradient?: boolean;
};

export const RoundedColorizedSection: React.FC<RoundedColorizedSection> =
  withCustomTheme(
    ({
      sectionTitle,
      leftContent,
      rightContent,
      rightContentSx = {},
      bottomContent,
      button,
      accentColor = 'warning',
      image,
      sx = {},
      sectionContainer = {},
      revertGradient,
    }) => {
      return (
        <SectionContainer {...sectionContainer}>
          <Stack
            borderRadius={'2rem'}
            width={'100%'}
            sx={{
              background: getBackgroundByAccentColor(
                accentColor,
                revertGradient
              ),
              p: { xs: '1.25rem', sm: '2.5rem' },
              pb: { xs: !bottomContent && image ? '0' : undefined },
              position: 'relative',
              ...sx,
            }}
          >
            <Stack
              width={'100%'}
              sx={{
                flexDirection: { xs: 'column', sm: 'row' },
              }}
              gap={{
                xs: '2rem',
                sm: '7.5rem',
              }}
            >
              <Stack direction={'column'} flex={'1 1 0'}>
                <SectionTitle
                  accentColor={accentColor}
                  sx={{
                    fontSize: '1.75rem',
                  }}
                  {...sectionTitle}
                />
                <LeftContent
                  content={leftContent}
                  button={button}
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                />
              </Stack>
              <Stack
                flex={'1 1 0'}
                sx={{
                  ...rightContentSx,
                }}
              >
                {rightContent}
              </Stack>
            </Stack>
            {bottomContent && (
              <Stack
                sx={{ position: 'relative', marginTop: { xs: '', sm: '2rem' } }}
              >
                {image && (
                  <Box
                    component={'img'}
                    src={image}
                    sx={{
                      position: { xs: 'initial', sm: 'absolute' },
                      bottom: '100%',
                      right: 0,
                    }}
                  />
                )}
                {bottomContent}
              </Stack>
            )}

            {!bottomContent && image && (
              <Box
                component={'img'}
                src={image}
                sx={{
                  position: { xs: 'relative', sm: 'absolute' },
                  bottom: 0,
                  right: { xs: 0, sm: '2.5rem' },
                  order: { xs: '1', sm: undefined },
                }}
              />
            )}
            <LeftContent
              content={leftContent}
              button={button}
              sx={{
                display: { xs: 'flex', sm: 'none' },
                marginBottom: { xs: '1.25rem' },
              }}
            />
          </Stack>
        </SectionContainer>
      );
    }
  );
