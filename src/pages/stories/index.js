import React from 'react'
import {Link} from "gatsby";
import { useMyStoriesPost } from 'hooks/my-stories-posts'
import Layout from 'components/Layout'
import PreviewCompatibleImage from 'components/PreviewCompatibleImage'
import { removeAccents } from '../../helpers'

export default () => {
    const posts = useMyStoriesPost()

    return <Layout>
        <div>
            <figure className="image is-fullwidth">
                <img className="lazyload" data-src="/img/emile-perron-xrvdyzrgdw4-unsplash.jpg" />
            </figure>
        </div>
        <section className="section">
            <div className="container">
                <div className="content has-text-centered thank-you">
                    {Object.keys(posts).length > 0 ? posts.map(({ node: post }) => (
            <div className="card-h" key={post.id}>
            <div className="card-content-h">
            
                {Object.keys(post.frontmatter.featuredimage.childImageSharp).length < 0 ? (
                    <div className="card-content-left-image">
                        <a href="/doc-for-react-project/"></a>
                        <div className="card-image-h">
                        <PreviewCompatibleImage
                            imageInfo={{
                                image: post.frontmatter.featuredimage,
                                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                            />
                        </div> 
                  </div>
                  ) : (
                  <div className="card-content-post-date card-content-left-image">
                    {post.frontmatter.date.split("-")[0]}
                    <span>{post.frontmatter.date.split("-")[1]}</span>
                    </div>)
                  }
            
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
                    to={removeAccents(post.fields.slug)}
                  >
                    {post.frontmatter.title}
                  </Link>
  
                </h2>
                <p className="card-description-h">
                {post.excerpt.substr(0,100)}
                </p>
                <div className="btn-readmore">
                <Link to={removeAccents(post.fields.slug)}>
                  Keep Reading →
                </Link>
            
                </div>
              </div>
            </div>
          </div>
          )) : <h1>Chuyen cua dev comming soon!</h1>}
                
                </div>
            </div>
        </section>
    </Layout>
}
