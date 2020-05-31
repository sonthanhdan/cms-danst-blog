import React from 'react'
import Layout from 'components/Layout'
import {Link} from "gatsby";
import { useMyDocs } from 'hooks/use-docs'

export default () => {
    const docs = useMyDocs();

    return (
      <Layout>
          <section className="section section--gradient">
              <div className="container">
                  <div className="section">
                      <div className="columns">
                          <div className="column is-10 is-offset-1">
                              <div className="content">
                                  <div className="column is-12">
                                      <h1 className="has-text-weight-bold is-size-1">
                                          Share Book and Resource
                                      </h1>
                                      <ul className="list-docs">
                                          {docs ? docs.map( ({ node: doc }) => (
                                              <li key={doc.id}>
                                                  <Link to={`${doc.fields.slug}`}>
                                                      {doc.frontmatter.title}
                                                  </Link>
                                              </li>
                                          )) : null}
                                      </ul>
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


