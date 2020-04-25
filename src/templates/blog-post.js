import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from 'components/Layout'
import Content, { HTMLContent } from 'components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  prev,
  next,
  author,
  publishDate,
  timeToRead
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section post">
      {helmet || ''}
      <nav className="breadcrumb is-centered is-small" aria-label="breadcrumbs">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
          <li className="is-active"><a aria-current="page">{title}</a></li>
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
                <a href="/about">
                  <img className="author-thumb"
                      src="data:image/png;base64,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"
                     alt={author} width="48" height="48"/>
                </a>
              </div>
              <div className="author-info">
                <div className="author-description">
                  <a className="link-dark" href="/about">{author}</a>
                  <a href="/about" className="author-major">Developer</a>
                </div>
                {/* <span className="author-major"></span> */}
                <div className="flex-post-date">
                  <span className="post-date">{publishDate}</span>
                  <span className="dot">·</span>
                  <span className="post-read">{timeToRead} min read</span>
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
            <a className="pagination-previous" href={prev} title="This is the first page" disabled={!prev}>Previous</a>
            <a className="pagination-next" href={next} disabled={!next}>Next page</a>
            {/*<ul className="pagination-list list-style-none" >*/}
              {/*<li>*/}
                {/*<a className="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>*/}
              {/*</li>*/}
              {/*<li>*/}
                {/*<a className="pagination-link" aria-label="Goto page 2">2</a>*/}
              {/*</li>*/}
              {/*<li>*/}
                {/*<a className="pagination-link" aria-label="Goto page 3">3</a>*/}
              {/*</li>*/}
            {/*</ul>*/}
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
  prev: PropTypes.string,
  next: PropTypes.string,
  author: PropTypes.string,
  publishDate: PropTypes.string,
  timeToRead: PropTypes.number
}

const BlogPost = ({ data, location, pageContext }) => {
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
        publishDate={post.frontmatter.date}
        timeToRead={post.timeToRead}
        author={post.frontmatter.author}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        prev={pageContext.prevSlug}
        next={pageContext.nextSlug}
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
        date(formatString: "DD MMMM YYYY")
        title
        description
        tags
        author
      }
      timeToRead
    }
  }
`
