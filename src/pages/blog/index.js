import React from 'react'
import { Link } from "gatsby";
import Layout from 'components/Layout'
import RecentPost from 'components/RecentPost'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <figure className="image is-fullwidth">
                  <img className="lazyload" data-src="/img/chris-ried-ieic5tq8ymk-unsplash.jpg" />
              </figure>
          </div>

          <section className="section section--gradient">
              <div className="container">
                  <div className="section">
                      <div className="columns">
                          <div className="column is-10 is-offset-1">
                              <div className="content">
                                  <div className="column is-12">
                                      <h1 className="has-text-weight-bold is-size-1" >
                                          Bài viết mới nhất
                                      </h1>
                                      <RecentPost/>
                                      <div className="column is-12 has-text-centered">
                                          <Link className="btn" to="/blog">
                                              Đọc thêm
                                          </Link>
                                      </div>
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
