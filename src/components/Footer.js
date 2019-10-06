import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    const copyRightYear = new Date().getFullYear();
    return (
      <footer className="footer ">
        <div className="content has-text-centered">
          {/*<img*/}
            {/*src={logo}*/}
            {/*alt="Kaldi"*/}
            {/*style={{ width: '14em', height: '10em' }}*/}
          {/*/>*/}
      
       
              {/* </div> */}
              
              
            {/* </div> */}
          {/* </div> */}
          
        </div>
        <div class="copyright">
            <div class="clearfix"></div>
            <p class="pull-left color-white">
              Copyright © {copyRightYear} Dan Blog's. All rights reserved.  
            </p>
            <p class="pull-right">
               Power by <a target="_blank" href="https://github.com/netlify-templates/gatsby-starter-netlify-cms">GatsbyJS</a>
            </p>
            
          </div>
      </footer>
    )
  }
}

export default Footer
