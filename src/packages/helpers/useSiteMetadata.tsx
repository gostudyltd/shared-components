import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          supportedLanguages
          fallbackLanguage
          cdnurlStrapi
          cdnurlStatic
          cdnurlApp
        }
      }
    }
  `)

  return data.site.siteMetadata
}
