import React from 'react'
import { Box, SxProps } from '@mui/material'
import { AccentColor } from './types'
import { accentColorBase } from './utils'
import { SectionContainerOverlay, SectionContainerOverlayProps } from './SectionContainerOverlay'

type Props = {
  accentColor: AccentColor
  sx?: SxProps
  overlayVariant?: SectionContainerOverlayProps['variant']
}

export const SectionContainerWrapperColorized: React.FC<React.PropsWithChildren<Props>> = ({
  accentColor,
  children,
  sx = {},
  overlayVariant,
}) => {
  return (
    <Box sx={{ background: accentColorBase[accentColor].secondary, ...sx }} position={'relative'} overflow={'hidden'}>
      <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>{children}</Box>
      {overlayVariant && <SectionContainerOverlay accentColor={accentColor} variant={overlayVariant} />}
    </Box>
  )
}
