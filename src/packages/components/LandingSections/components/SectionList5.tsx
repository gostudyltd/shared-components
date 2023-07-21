import React from 'react';
import { Box, Button, ButtonProps, Stack, Typography } from '@mui/material';
import { AccentColor } from './types';
import { accentColorBase } from './utils';
import { CheckInCircle } from '../../Icons/CheckInCircle';
import { withCustomTheme } from '../../hoc/withCustomTheme';
// import CheckRoundedIcon from '@mui/icons-material/CheckRounded'

type DataItem = {
  badge?: string;
  title: string;
  description: string;
  list: string[];
  button?: {
    text: string;
    onClick: () => void;
  };

  /** From MUI */
  buttonProps?: ButtonProps;
};

export type SectionList5Props = {
  accentColor: AccentColor;
  data: DataItem[];
};

type CardItemProps = {
  accentColor: AccentColor;
  data: DataItem;
};

const CardItem: React.FC<CardItemProps> = (props) => {
  const { data, accentColor } = props;
  const { title } = data;
  const accent = accentColorBase[accentColor];
  return (
    <Stack sx={{ height: 'inherit', flex: '1 1 0', pt: '42px' }}>
      <Stack
        sx={{
          p: '1.25rem',
          backgroundColor: 'background.paper',
          borderRadius: '1.25rem',
          position: 'relative',
          height: '100%',
        }}
      >
        <Typography
          variant='h3'
          lineHeight={'1.44'}
          sx={{
            mb: '.5rem',
            fontWeight: '600',
            color: accent.main,
            fontSize: { xs: '1.25rem', sm: '1.75rem' },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            mb: { xs: '1.5rem', sm: '2.5rem' },
            fontSize: { xs: '0.875rem', sm: '1rem' },
            color: 'rgba(0,0,0,0.54)',
          }}
        >
          {data.description}
        </Typography>

        <Stack mb={'auto'}>
          {data.list.map((text) => (
            <Stack
              direction={'row'}
              alignItems={'flexStart'}
              key={text}
              sx={{
                '& + *': {
                  marginTop: '0.625rem',
                },
              }}
            >
              <Box
                component='span'
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                flexShrink={'0'}
                sx={{
                  marginRight: '.75rem',
                  height: '1.5rem',
                  width: '1.5rem',
                  backgroundColor: accent.light,
                  lineHeight: '1.43',
                  borderRadius: '50%',
                }}
              >
                <CheckInCircle />
              </Box>
              <Typography
                variant='h5'
                sx={{
                  fontSize: {
                    xs: '1.125rem',
                    sm: '1rem',
                  },
                }}
              >
                {text}
              </Typography>
            </Stack>
          ))}
        </Stack>
        {data.button && (
          <Button
            variant='contained'
            size='large'
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem' },
              height: { xs: '2.625rem', sm: '3.5rem' },
              backgroundColor: accent.light,
              justifySelf: 'flex-end',
              mt: {
                xs: '1.5rem',
                sm: '2.5rem',
              },
            }}
          >
            {data.button.text}
          </Button>
        )}

        <Box
          position={'absolute'}
          sx={{
            py: '.5rem',
            px: { sm: '1.5rem', xs: '1.25rem' },
            top: '-42px',
            left: '0',
            height: '107px',
            borderRadius: '1.25rem',
            backgroundColor: '#FBC02D',
            zIndex: '-1',
          }}
        >
          <Typography
            variant='h5'
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem' },
              color: 'background.paper',
            }}
          >
            {data.badge}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export const SectionList5: React.FC<SectionList5Props> = withCustomTheme(
  (props) => {
    const { data, accentColor = 'primary' } = props;
    return (
      <Stack
        gap={{ xs: '1.25rem', sm: '1.5rem' }}
        direction={{ sm: 'row', xs: 'column' }}
      >
        {data.map((i) => (
          <CardItem accentColor={accentColor} key={i.title} data={i} />
        ))}
      </Stack>
    );
  }
);
