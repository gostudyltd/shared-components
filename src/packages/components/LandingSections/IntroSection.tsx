import { Box, Button, Stack, SxProps, Typography } from '@mui/material';
import React from 'react';
// import { Link } from '../Link'
import { AccentColor } from './components/types';
import { accentColorBase } from './components/utils';
import { SectionTwoColumnsContainer } from './components/SectionTwoColumnsContainer';
import {
  HorizontalListWithSeparator,
  HorizontalListWithSeparatorProps,
} from './components/HorizontalListWithSeparator';
import { SectionContainer } from './components/SectionContainer';
import { withCustomTheme } from '../hoc/withCustomTheme';
import { Ukraine } from '../Icons/Ukraine';
import { montserratFamily } from '../../constants/themeVars';

export type IntroSectionProps = {
  preTitle?: string;
  title?: string | React.ReactNode;
  renderTitle?: (color: string) => string | React.ReactNode;
  description: string;
  image: string;
  imageOverlayText?: string;
  button?: {
    text: string;
    onClick: () => void;
  };

  containerSx?: SxProps;
  accentColor?: AccentColor;
  bottomListData?: HorizontalListWithSeparatorProps['data'];
};

export const IntroSection: React.FC<IntroSectionProps> = withCustomTheme(
  (props) => {
    const {
      title,
      renderTitle,
      description,
      image,
      button,
      accentColor = 'primary',
      preTitle,
      bottomListData,
      imageOverlayText,
      containerSx = {},
    } = props;
    const accent = accentColorBase[accentColor];
    return (
      <SectionContainer
        disableContainerPaddings
        sx={{
          position: 'relative',
          padding: bottomListData
            ? { xs: '0 0 8.25rem 0', sm: '0 0 3.75rem 0' }
            : undefined,
        }}
      >
        <SectionTwoColumnsContainer
          sectionContainerSx={{
            gap: { xs: '2.5em', sm: '2.75em' },
            py: { xs: '3em', sm: '7.5em' },
            '& > *:first-of-type': {
              maxWidth: { xs: '100%', sm: '484px' },
            },
            ...containerSx,
          }}
          firstColumn={
            <Stack
              gap={{ xs: '2em', sm: '3em' }}
              sx={{
                alignItems: { xs: 'stretch', sm: 'flex-start' },
              }}
            >
              <Stack gap={{ xs: '1em', sm: '1.5em' }}>
                {preTitle && (
                  <Stack
                    alignItems={'center'}
                    direction={'row'}
                    position={'relative'}
                    sx={{
                      px: { xs: '3rem', sm: '3.5rem' },
                    }}
                  >
                    <Box
                      component={'span'}
                      sx={{
                        width: { xs: '2rem', sm: '2.5rem' },
                        height: '0.125rem',
                        transition: 'all .2s linear',
                        backgroundColor: accent.main,
                        marginRight: '1rem',
                        flexShrink: 0,
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        my: '11px',
                        display: 'block',
                        borderRadius: '0.125rem',
                      }}
                    />

                    <Typography
                      variant='h5'
                      sx={{
                        color: accent.main,
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        transition: 'all .2s linear',
                      }}
                    >
                      {preTitle}
                    </Typography>
                  </Stack>
                )}
                <Typography
                  variant='h1'
                  fontSize={'3rem'}
                  display={{ xs: 'none', sm: 'block' }}
                  fontWeight={600}
                >
                  {renderTitle ? renderTitle(accent.main) : title}
                </Typography>
                <Typography
                  variant='h2'
                  display={{ xs: 'block', sm: 'none' }}
                  fontWeight={600}
                >
                  {renderTitle ? renderTitle(accent.main) : title}
                </Typography>
                <Typography
                  variant={'body1'}
                  fontSize={'1.125rem'}
                  color={'text.secondary'}
                >
                  {description}
                </Typography>
              </Stack>
              {button && (
                // <Link to={'/'} sx={{ width: { sm: '100%' } }}>
                <Button
                  variant='contained'
                  size='large'
                  onClick={button.onClick}
                  color={accentColor}
                  sx={{
                    minWidth: { xs: '100%', sm: '10rem' },
                    px: { xs: '0', sm: '.875rem' },
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    height: { xs: '2.625rem', sm: '3.5rem' },
                  }}
                >
                  {button.text}
                </Button>
                // </Link>
              )}
            </Stack>
          }
          secondColumn={
            <Stack position={'relative'} overflow={'hidden'}>
              <Box
                component={'img'}
                src={image}
                alt=''
                width={'100%'}
                maxWidth={'588px'}
                mx={'auto'}
              />
              {imageOverlayText && (
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  position={'absolute'}
                  sx={{
                    background:
                      'linear-gradient(306deg, #FFEDD1 30.81%, #FFF3E0 30.81%)',
                    padding: { xs: '0.375rem .5rem', sm: '.875rem 1rem' },
                    borderRadius: '.75rem',
                    width: '100%',
                    maxWidth: { xs: '73%', sm: '388px' },

                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  <Box
                    sx={{
                      mr: { xs: '.5rem', sm: '.75rem' },
                      '& svg': {
                        width: { sm: '27px', xs: '24px' },
                        height: { sm: '27px', xs: '24px' },
                      },
                    }}
                  >
                    <Ukraine />
                  </Box>
                  <Typography
                    fontFamily={montserratFamily}
                    fontWeight={'600'}
                    color={'rgba(0,0,0,.54)'}
                    lineHeight={'1.43'}
                    sx={{
                      fontSize: { xs: '10px', sm: '14px' },
                    }}
                  >
                    {imageOverlayText}
                  </Typography>
                </Stack>
              )}
            </Stack>
          }
        />
        {bottomListData && (
          <Box position={'absolute'} bottom={'0'} left={'0'} right={'0'}>
            <Box maxWidth={'md'} mx={'auto'} position={'relative'}>
              <HorizontalListWithSeparator
                accentColor={accentColor}
                data={bottomListData}
                sx={{
                  width: 'calc(100% - 2rem)',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </Box>
          </Box>
        )}
      </SectionContainer>
    );
  }
);
