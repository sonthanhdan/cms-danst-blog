import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    const copyRightYear = new Date().getFullYear();
    return (
      <footer className="footer">
        <div className="content has-text-centered has-text-grey copyright">
            <p>
              Copyright © {copyRightYear} Dan Blog's. All rights reserved.  
            </p>
            <p>
              Powered by <a className="has-text-primary" target="_blank" href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"> GatsbyJS</a>
            </p>
        </div>
      </footer>
    )
  }
}

export default Footer