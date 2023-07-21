import { ButtonProps } from '@mui/material'
import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx'
import { ReactNode } from 'react'

export type AccentColor = 'primary' | 'warning' | 'error'

export type SectionTitleProps = {
  title?: string | ReactNode
  transitionTime?: number
  renderTitle?: (color: string, transition: string) => string | React.ReactNode
  preTitle?: string
  description?: string
  renderDescription?: (color: string, transition: string) => string | React.ReactNode

  sx?: SxProps
  wrapperSx?: SxProps
  accentColor?: AccentColor
  descriptionSx?: SxProps
  centered?: boolean

  // preTitleRef?: (el: HTMLDivElement | null | undefined) => void

  button?: {
    text: string
    onClick: () => void
  }
  renderButtons?: (color: string, transition: string) => string | React.ReactNode
  buttonProps?: ButtonProps
}

export type SectionContainerProps = {
  sx?: SxProps
  twoColumns?: boolean
  sectionTitle?: SectionTitleProps
  accentColor?: AccentColor
  disableContainerPaddings?: boolean
}

export type SectionTwoColumnsContainerProps = {
  sectionContainerSx?: SectionContainerProps['sx']
  firstColumn: React.ReactNode
  secondColumn: React.ReactNode
  disableContainerPaddings?: boolean
}

export type SectionImageColumnProps = {
  sectionTitle?: SectionTitleProps
  image: string
  imageSx?: SxProps
}
