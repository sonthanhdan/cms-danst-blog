exports.mainQuery = `
    {
        allMarkdownRemark(limit: 1000, sort: {order: DESC, fields: frontmatter___date}) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        tags
                        templateKey
                    }
                }
                next {
                    fields {
                        slug
                    }
                }
                previous {
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;