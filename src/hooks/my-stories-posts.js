import { useStaticQuery, graphql } from "gatsby"
export const useMyStoriesPost = () => {
  const data  = useStaticQuery(graphql`
    query MyStoriesPost {
      allMarkdownRemark(limit: 1000, sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {author: {eq: "danst"}}}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
              author
              date(formatString: "DD-MMMM-YYYY")
              main {
                heading
              }
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 120, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              description
            }
            timeToRead
            excerpt
          }
        }
      }
  }
  `)

  return data.allMarkdownRemark.edges;
}