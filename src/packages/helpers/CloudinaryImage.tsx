import React from 'react'
import Box from '@mui/material/Box'
import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx'

/**
 * @type ImageProps
 * @param {string} template name of template
 * @param {string} path relative path to image
 * @param {string} customParams string of custom cloudinary params used only if template parameter is undefined
 */
export type ImageProps = {
  template?:
    | 'ProgramLogo'
    | 'ProgramHero'
    | 'AccommodationLogo'
    | 'AccommodationLogoMobile'
    | 'CartItemLogo'
    | 'ResidenceLogo'
  path: string
  customParams?: string
}

const getFullPath = (path: string) => {
  const serverUrl = process.env.GATSBY_CDN_URL_APP || 'https://images.gostudy.cz/app'
  const realpath = `${serverUrl}/${path}`
  return realpath
}

//! Legacy code. Now its important to work with imgs like below (buildAccommodationImg)
export const buildImageSrcByProps = (props: ImageProps): string => {
  const realpath = props.path.indexOf('http') === 0 ? props.path : getFullPath(props.path)

  switch (props.template) {
    case 'ResidenceLogo':
      return `${realpath}?tx=c_fill,f_webp,f_png,h_180,w_364,g_center`
    case 'CartItemLogo':
      return `${realpath}?tx=c_fill,q_95,f_png,h_60,w_60`
    case 'AccommodationLogo':
      return `${realpath}?tx=c_fill,q_95,f_png,h_162,w_264`
    case 'AccommodationLogoMobile':
      return `${realpath}?tx=c_fill,g_auto,q_95,f_png,h_188,w_955`
    case 'ProgramLogo':
      return `${realpath}?tx=c_pad,b_transparent,q_95,f_png,h_60,w_60`
    case 'ProgramHero':
      return `${realpath}?tx=c_fill,f_webp,h_360,w_924,g_center`
    default:
      return `${realpath}${props.customParams ? `?tx=${props.customParams}` : ''}`
  }
}

export const buildAccommodationImg = (path: string, alt: string): React.ReactElement => {
  const realpath = getFullPath(path)

  return (
    <picture>
      <source
        media='(min-width: 1024px)'
        srcSet={`${realpath}?tx=c_fill,q_95,f_png,h_162,w_264 1x, ${realpath}?tx=c_fill,q_95,f_png,h_324,w_528 2x`}
      />
      <source
        media='(min-width: 500px)'
        srcSet={`${realpath}?tx=c_fill,g_auto,q_95,f_png,h_188,w_1024 1x, ${realpath}?tx=c_fill,g_auto,q_95,f_png,h_376,w_2048 2x`}
      />
      <Box
        component={'img'}
        sx={{
          borderRadius: '12px',
          objectFit: 'cover',
          width: { xs: '100%', sm: '264px' },
          height: { xs: '188px', sm: '162px' },
        }}
        src={`${realpath}?tx=c_fill,g_auto,q_95,f_png,h_188,w_375`}
        alt={alt}
        srcSet={`${realpath}?tx=c_fill,g_auto,q_95,f_png,h_188,w_375 1x, ${realpath}?tx=c_fill,g_auto,q_95,f_png,h_376,w_750 2x`}
      />
    </picture>
  )
}

export const buildResidenceImg = (path: string, alt: string) => {
  const realpath = getFullPath(path)

  return (
    <picture style={{ width: '100%' }}>
      <source
        media='(min-width: 1024px)'
        srcSet={`${realpath}?tx=c_fill,q_95,f_png,h_180,w_456 1x, ${realpath}?tx=c_fill,q_95,f_png,h_360,w_912 2x`}
      />
      <Box
        component={'img'}
        sx={{
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          objectFit: 'cover',
          width: '100%',
          height: { xs: '188px', sm: '162px' },
        }}
        src={`${realpath}?tx=c_fill,g_auto,q_95,f_png,h_164,w_343`}
        alt={alt}
        srcSet={`${realpath}?tx=c_fill,g_auto,q_95,f_png,h_164,w_343 1x, ${realpath}?tx=c_fill,g_auto,q_95,f_png,h_332,w_686 2x`}
      />
    </picture>
  )
}

/**
 * Get cloudinary url from strapi url
 * @param {string} cdnurlStrapi cloudinary url
 * @param {string} imgUrl relative path to strapi image
 * @param {string} customParams string of custom cloudinary params
 */
export const getSrapiImageSrc = (cdnurlStrapi: string, imgUrl: string, width?: number, height?: number) => {
  const imgName = imgUrl.substring(imgUrl.lastIndexOf('/'))
  if (!width && !height) {
    return `${cdnurlStrapi}${imgName}`
  }
  return buildImageSrcByProps({ path: `${cdnurlStrapi}${imgName}`, customParams: `c_fill,h_${height},w_${width}` })
}

export const getSrc = (path: string, width: number, height: number) => {
  return buildImageSrcByProps({ path, customParams: `c_fill,h_${height},w_${width}` })
}

export const getSrapiImageSrcSet = (cdnurlStrapi: string, imgUrl: string, width: number, height: number) => {
  const result: string[] = []

  for (let scale = 1; scale <= 4; scale += 1) {
    const src = getSrapiImageSrc(cdnurlStrapi, imgUrl, width * scale, height * scale)
    const srcset = `${src} ${scale}x`
    result.push(srcset)
  }

  return result.join(',')
}

export const getPicture = (
  src: string,
  width: number,
  height: number,
  pictureSx?: SxProps,
  imageSx?: SxProps,
  alt?: string
) => {
  const getSourceForResolution = (resolution: number) => {
    return (
      <>
        <Box
          component={'source'}
          srcSet={`${src}?tx=c_fill,h_${height * resolution},w_${width * resolution}`}
          media={`(resolution: ${resolution}dppx)`}
        />
        <Box
          component={'source'}
          srcSet={`${src}?tx=c_fill,h_${height * resolution},w_${width * resolution}`}
          media={`(-webkit-min-device-pixel-ratio: ${resolution})`}
        />
      </>
    )
  }

  const sources = [1, 2, 3, 4].map((resolution) => getSourceForResolution(resolution))

  return (
    <Box component={'picture'} sx={pictureSx}>
      {sources}
      <Box component={'img'} src={`${src}?tx=c_fill,h_${height},w_${width}`} sx={imageSx} alt={alt ?? ''} />
    </Box>
  )
}
