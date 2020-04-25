import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import RecentPost from '../../components/RecentPost'
import { Link } from "gatsby";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/chris-ried-ieic5tq8ymk-unsplash.jpg')`,
          }}
        >

        </div>

          <section className="section section--gradient">
              <div className="container">
                  <div className="section">
                      <div className="columns">
                          <div className="column is-10 is-offset-1">
                              <div className="content">
                                  <div className="column is-12">
                                      <h1
                                          className="has-text-weight-bold is-size-1"
                                          style={{
                                              // boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                                              // backgroundColor: '#f40',
                                              // color: 'white',
                                              // padding: '1rem',
                                          }}
                                      >
                                          Latest Stories
                                      </h1>
                                      <RecentPost/>
                                      <div className="column is-12 has-text-centered">
                                          <Link className="btn" to="/blog">
                                              Read more
                                          </Link>
                                      </div>
                                      <div className="clearfix"></div>
                                      <h3 className="has-text-weight-semibold is-size-2">
                                          Recent posts
                                      </h3>
                                      <BlogRoll />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="columns">
                          <div className="column is-10 is-offset-1">
                              <div className="content">
                                  <div className="column is-12">
                                  <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                                      <a className="pagination-previous" title="This is the first page" >Previous</a>
                                      <a className="pagination-next">Next page</a>
                                  </nav>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </Layout>
    )
  }
}
