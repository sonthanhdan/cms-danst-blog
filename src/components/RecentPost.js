import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

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
                24
                <span>May</span>
              </div>
              {/* <div className="card-content-left-image">
                <a href="/doc-for-react-project/"></a>
                <div className="card-image-h">
                  <picture>
                    <source />
                    <source />
                    <img
                      src="/img/preview.jpg"
                      alt="post preview"
                    />
                  </picture>
                  <noscript></noscript>
                </div> */}
              {/* </div> */}
            {/* </div> */}
            <div className="card-content-right">
              <div className="card-tags">
              {/* {post.frontmatter.tags && post.frontmatter.tags.map(tag => (
                             // <span className="tag has-text-black" key={tag + `tag`}>
                                 <Link to={`/tags/${kebabCase(tag)}/`} >
                                 {tag}
                                 </Link>
                             // </span>
                          ))} */}
                <a href="/tags/markdown/">#blog</a>
                <a href="/tags/markdown/">#markdown</a>
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
                {/* <a href="/doc-for-react-project/">Read More</a> */}
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
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
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
