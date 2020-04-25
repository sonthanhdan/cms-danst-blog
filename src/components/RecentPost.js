import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Link, graphql, StaticQuery } from 'gatsby'

class RecentPost extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
 
    return (
      <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
        <div className="card-h" key={post.id}>
          <div className="card-content-h">
            <div className="card-content-post-date card-content-left-image">
              {post.frontmatter.date.split(" ")[1]}
              <span>{post.frontmatter.date.split(" ")[0]}</span>
            </div>
            
            <div className="card-content-right">
              <div className="card-tags">
                {post.frontmatter.tags && post.frontmatter.tags.map(tag => (
                  <a key={tag + Date.now()} href={'/tags/'+ kebabCase(tag)}> 
                  #{tag}
                  </a>
                ))}
              </div>
              <h2 className="card-title-h">
                <Link
                  className="title has-text-primary is-size-4"
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>

              </h2>
              <p className="card-description-h">
              {post.excerpt.substr(0,100)}
              </p>
              <div className="btn-readmore">
              <Link to={post.fields.slug}>
                Keep Reading →
              </Link>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    )
  }
}

RecentPost.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query RecentPostQuery {
        allMarkdownRemark(
          limit: 7,
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                author
                templateKey
                date(formatString: "MMMM DD YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <RecentPost data={data} count={count} />}
  />
)
