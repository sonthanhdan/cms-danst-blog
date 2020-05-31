import { useStaticQuery, graphql } from "gatsby"
export const useMyDocs = () => {

    const data  = useStaticQuery(graphql`
    query MyDocs {
      allMarkdownRemark(limit: 1000, sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: { templateKey: {eq: "docs-page"} }}) {
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
              title
              description
            }
          }
        }
      }
  }
  `)

    return data.allMarkdownRemark.edges;
}