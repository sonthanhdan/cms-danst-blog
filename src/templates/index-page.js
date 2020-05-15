import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/Layout'
import BlogRoll from 'components/BlogRoll'
import RecentPost from 'components/RecentPost'

export const IndexPageTemplate = () => (
  <div className="home">
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2-mobile ss-size-2-tablet is-size-2-desktop is-size-2-fullhd">
                    Latest stories
                  </h3>
                  <RecentPost/>
                  <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                          Read more
                      </Link>
                  </div>
                  <div className="clearfix"></div>
                    <h3 className="has-text-weight-semibold is-size-2-mobile ss-size-2-tablet is-size-2-desktop is-size-2-fullhd">
                    Recent posts
                  </h3>
                  <BlogRoll />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

const IndexPage = () => {

  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

export default IndexPage
