import React from 'react';

import { SectionList5, SectionList5Props } from './components/SectionList5';
import { SectionContainerWrapperColorized } from './components/SectionContainerWrapperColorized';
import { SectionContainer } from './components/SectionContainer';
import { AccentColor, SectionTitleProps } from './components/types';
import { SxProps } from '@mui/material';
import { withCustomTheme } from '../hoc/withCustomTheme';

export type List5SectionProps = {
  accentColor?: AccentColor;
  sectionTitle: SectionTitleProps;
  data: SectionList5Props['data'];
  containerSx?: SxProps;
};

export const List5Section: React.FC<List5SectionProps> = withCustomTheme(
  ({ accentColor = 'primary', sectionTitle = {}, data, containerSx = {} }) => {
    return (
      <SectionContainerWrapperColorized
        accentColor={accentColor}
        overlayVariant='v1'
      >
        <SectionContainer
          sx={containerSx}
          sectionTitle={{
            accentColor,
            ...sectionTitle,
          }}
        >
          <SectionList5 accentColor={accentColor} data={data} />
        </SectionContainer>
      </SectionContainerWrapperColorized>
    );
  }
);
