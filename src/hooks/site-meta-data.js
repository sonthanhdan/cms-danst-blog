import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaDataQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
