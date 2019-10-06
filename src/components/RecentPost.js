import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class RecentPost extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
        <div>
        <div className="section-title">
        <h2>
            <span>All Stories</span>
        </h2>
        </div>
  <div className="card-columns listrecent">
  {posts &&
          posts.map(({ node: post }) => (
    <div className="card">
      <a href="post.html">
    
        {post.frontmatter.featuredimage ? (
                    <div className="img-fluid featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.title}`,
                        }}
                      />
                    </div>
                  ) : null}
      </a>
      <div className="card-block">
        <h2 className="card-title">
          <a href="post.html">Little red dress and a perfect summer</a>
        </h2>
        <h4 className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </h4>
        <div className="metafooter">
          <div className="wrapfooter">
            <span className="meta-footer-thumb">
              <a href="author.html">
                <img
                  className="author-thumb"
                  src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                  alt="Sal"
                />
              </a>
            </span>
            <span className="author-meta">
              <span className="post-name">
                <a href="author.html">Sal</a>
              </span>
              <br />
              <span className="post-date">22 July 2017</span>
              <span className="dot" />
              <span className="post-read">6 min read</span>
            </span>
            <span className="post-read-more">
              <a href="post.html" title="Read Story">
                <svg
                  className="svgIcon-use"
                  width={25}
                  height={25}
                  viewBox="0 0 25 25"
                >
                  <path
                    d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
          ))
          }
  </div>


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
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <RecentPost data={data} count={count} />}
  />
)
