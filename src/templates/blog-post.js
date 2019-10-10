import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <nav className="breadcrumb is-centered is-small" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li className="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </nav>
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div className="row post-top-meta">
              <div className="author-avatar">
                <a href="author.html">
                  <img className="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal" width="48" height="48"/>
                </a>
              </div>
              <div className="author-info">
                <div className="author-description">
                  <a className="link-dark" href="author.html">Dan St</a>
                  <a href="#" className="author-major">Developer</a>
                </div>
                {/* <span className="author-major"></span> */}
                <div className="flex-post-date">
                  <span className="post-date">22 July 2017</span>
                  <span className="dot">·</span>
                  <span className="post-read">6 min read</span>
                </div>
              </div>
            </div>
            <p className="post-description">{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <div className="tags">
                  {tags.map(tag => (
                      <span className="tag has-text-black" key={tag + `tag`}>
                         <Link className="tag-word" to={`/tags/${kebabCase(tag)}/`} >
                         {tag}
                         </Link>
                      </span>
                  ))}
                  
                </div>
               
              </div>
            ) : null}
          </div>
          
        </div>
        
      </div>
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
          <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <a className="pagination-previous" title="This is the first page" disabled>Previous</a>
            <a className="pagination-next">Next page</a>
            <ul className="pagination-list list-style-none" >
              <li>
                <a className="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 2">2</a>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 3">3</a>
              </li>
            </ul>
          </nav>
          </div>
        </div>
      </div>
    
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
