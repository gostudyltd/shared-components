/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line unused-imports/no-unused-imports
import React from 'react'
import { palette } from '../constants/themeVars'
import { blue, blueGrey, deepOrange, deepPurple, green } from '@mui/material/colors'
import {
  AutoStoriesRounded,
  CommentRounded,
  LibraryBooksRounded,
  NewspaperRounded,
  StorageRounded,
} from '@mui/icons-material'
import { ArrayElement } from './typehelper'
import { WindowLocation } from '@reach/router'
import { Category } from '../types/api/MediaCategories'

interface chipDetail {
  color?: string
  hoverColor: string
  icon: JSX.Element
}

export const getPaginationHref = (page: number | null, currentPage: number, location: WindowLocation<unknown>) => {
  if (!page || page === currentPage) return

  if (currentPage === 1) {
    return `${location.pathname}${page}`
  }

  const replaceIndex = location.pathname.lastIndexOf('/', location.pathname.lastIndexOf('/') - 1)

  if (page === 1) {
    return location.pathname.slice(0, replaceIndex)
  }

  return `${location.pathname.slice(0, replaceIndex + 1)}${page}`
}

export const createCategoryPath = (category: Category) => {
  const categorySlug = category.category ? `${category.category.slug}/${category.slug}` : category.slug
  return `/${category.locale}/media/${categorySlug}`
}

export const getPostPath = (post: ArrayElement<Queries.MediaPageQuery['allStrapiTestPost']['nodes']>) => {
  if (post.category?.category) {
    return `/${post.locale}/media/${post.category.category.slug}/${post.category.slug}/${post.slug}`
  }
  return `/${post.locale}/media/null/${post.category?.slug}/${post.slug}`
}

export const subCategoryChipDetails: { [key: string]: chipDetail } = {
  '*': {
    color: blueGrey[500],
    hoverColor: blueGrey[50],
    icon: <LibraryBooksRounded color='inherit' />,
  },
  Experience: {
    color: blueGrey[500],
    hoverColor: blueGrey[50],
    icon: <LibraryBooksRounded color='inherit' />,
  },
  Interview: {
    color: blueGrey[500],
    hoverColor: blueGrey[50],
    icon: <LibraryBooksRounded color='inherit' />,
  },
  Career: {
    color: blueGrey[500],
    hoverColor: blueGrey[50],
    icon: <LibraryBooksRounded color='inherit' />,
  },
}

export const categoryChipDetails: { [key: string]: chipDetail } = {
  '*': {
    color: palette.primary?.light,
    hoverColor: blue[50],
    icon: <StorageRounded color='inherit' />,
  },
  blog: {
    color: green[400],
    hoverColor: green[50],
    icon: <CommentRounded color='inherit' sx={{ width: '18.67px' }} />,
  },
  knowledge: {
    color: deepOrange[400],
    hoverColor: deepOrange[50],
    icon: <AutoStoriesRounded color='inherit' sx={{ width: '18.67px' }} />,
  },
  news: {
    color: deepPurple[400],
    hoverColor: deepPurple[50],
    icon: <NewspaperRounded color='inherit' sx={{ width: '18.67px' }} />,
  },
  novosti: {
    color: deepPurple[400],
    hoverColor: deepPurple[50],
    icon: <NewspaperRounded color='inherit' sx={{ width: '18.67px' }} />,
  },
}

export const getChipAttribute = (
  postCategory: Category | undefined | null,
  language: string,
  attribute: 'color' | 'icon' | 'hoverColor',
  isSubCategory?: boolean
) => {
  if (!postCategory) {
    categoryChipDetails['*'][attribute]
  }

  const slug = postCategory?.category ? postCategory?.category.slug : postCategory?.slug

  // if (language === 'ru') {
  //   switch (slug) {
  //     case 'novosit':
  //       slug = 'news'
  //       break
  //     case 'znaniya':
  //       slug = 'knowledge'
  //       break
  //     case 'blog':
  //       slug = 'blog'
  //       break
  //     default:
  //       break
  //   }
  // }

  // if (language === 'uk') {
  //   switch (slug) {
  //     case 'novyny':
  //       slug = 'news'
  //       break
  //     case 'znannya':
  //       slug = 'knowledge'
  //       break
  //     case 'blog':
  //       slug = 'blog'
  //       break
  //     default:
  //       break
  //   }
  // }

  if (isSubCategory) {
    return subCategoryChipDetails[slug ?? '*']
      ? subCategoryChipDetails[slug ?? '*'][attribute]
      : subCategoryChipDetails['*'][attribute]
  }

  return categoryChipDetails[slug ?? '*'] ? categoryChipDetails[slug ?? '*'][attribute] : categoryChipDetails['*'][attribute]
}
