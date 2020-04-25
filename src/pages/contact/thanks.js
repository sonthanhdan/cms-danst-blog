import React from 'react'
import Layout from 'components/Layout'

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content has-text-centered thank-you">
          <h1>Thank you!</h1>
          <p>This is a custom thank you page for form submissions</p>
          <br/>
            <a href="/" className="button is-small is-light">Continue reading</a>
        </div>
      </div>
    </section>
  </Layout>
)
