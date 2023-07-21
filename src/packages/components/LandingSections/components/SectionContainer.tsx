import React, { PropsWithChildren } from 'react'
import { SectionContainerProps } from './types'
import { Container, SxProps } from '@mui/material'
import { SectionTitle } from './SectionTitle'

const twoColumnsSx = {
  display: 'flex',
  flexDirection: { sm: 'row', xs: 'column' },
  alignItems: 'center',
  gap: { xs: '1.25rem', sm: '2.75rem' },
}

const disablePaddingsSx = {
  p: { xs: 0, sm: 0 },
}

export const SectionContainer: React.FC<PropsWithChildren<SectionContainerProps>> = ({
  children,
  sx = {},
  twoColumns,
  sectionTitle,
  accentColor,
  disableContainerPaddings,
}) => {
  let additionalSx: SxProps = {}
  if (twoColumns) additionalSx = { ...additionalSx, ...twoColumnsSx }
  if (disableContainerPaddings) additionalSx = { ...additionalSx, ...disablePaddingsSx }
  return (
    <Container
      maxWidth={'md'}
      component={'section'}
      sx={{
        gap: { xs: '2.5rem', sm: '3.75rem' },
        py: { xs: '3rem', sm: '6.25rem' },
        position: 'relative',
        zIndex: 1,
        ...additionalSx,
        ...sx,
      }}
    >
      {sectionTitle && (
        <SectionTitle
          accentColor={accentColor}
          wrapperSx={{ paddingBottom: { xs: '2rem', sm: '3.75rem' } }}
          {...sectionTitle}
        />
      )}
      {children}
    </Container>
  )
}
