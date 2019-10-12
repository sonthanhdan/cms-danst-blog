import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
      <section className="hero is-fullheight is-full-fullhd ">
      <div className="hero-body">
          <div className="container has-text-centered">
              <h1 className="title">
                  404
              </h1>
              <h2 className="subtitle">
                  Page not found
              </h2>
              <p>Sorry the page you are looking for doesn&#39;t exist. <br/><br/><strong className="sad-icon">:(</strong></p><br/>
              <a href="/" className="button is-small is-light">Back</a>
          </div>
        </div>
      </section>
  </Layout>
)

export default NotFoundPage
