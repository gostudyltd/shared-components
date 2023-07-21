import { Box, Stack } from '@mui/material';
import { RoundedColorizedSection } from './RoundedSection';
import { SectionTitle, SectionTitleProps } from './components';
import { withCustomTheme } from '../hoc/withCustomTheme';

type ColorizedWithTwoImagesSectionProps = {
  logo: string;
  image: string;
  sectionTitle: SectionTitleProps;
};

export const ColorizedWithTwoImagesSection: React.FC<ColorizedWithTwoImagesSectionProps> =
  withCustomTheme(({ logo, image, sectionTitle }) => {
    return (
      <RoundedColorizedSection
        sx={{
          alignItems: 'center',
          flexDirection: {
            xs: 'column-reverse',
            sm: 'row',
          },
          '& > *:first-of-type': {
            gap: '0',
            alignItems: 'center',
          },
        }}
        leftContent={
          <Stack>
            <Box
              component={'img'}
              src={logo}
              sx={{
                mb: { xs: '1.5rem', sm: '2rem' },
                mx: {
                  sm: 0,
                  xs: 'auto',
                },
                height: 'auto',
                width: '100%',
                maxWidth: '348px',
              }}
            />
            <SectionTitle {...sectionTitle} />
          </Stack>
        }
        rightContent={<Box component={'img'} src={image} />}
      />
    );
  });
