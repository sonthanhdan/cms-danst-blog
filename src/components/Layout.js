import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import Footer from './Footer'
import Navbar from './NavBar'
import useSiteMetadata from 'hooks/site-meta-data'
import './base.styles.sass'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://danst.tech/" />
        <link rel="alternate" href="https://danst.tech/" hrefLang="en-US" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>{title} - Personal Blog</title>
        <meta name="title" content="Dan Blog's - Personal Blog" />
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <meta name="geo.position" content="latitude; longitude" />
        <meta name="geo.placename" content="Place Name" />
        <meta name="geo.region" content="Country Subdivision Code" />
        <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34=" />
        <meta name="google" content="notranslate" />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-32x32.png`}
            sizes="32x32"
        />
        <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-16x16.png`}
            sizes="16x16"
        />

        <link
            rel="mask-icon"
            href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
            color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
            property="og:image"
            content={`${withPrefix('/')}img/og-image.jpg`}
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://danst.tech/" />
        <meta property="og:title" content="Dan Blog's - Personal Blog" />
        <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://danst.tech/" />
        <meta property="twitter:title" content="Dan Blog's - Personal Blog" />
        <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
        <meta property="og:title" content="Dan Blog's - Personal Blog" />
        <meta property="og:description" content="Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support." />
        <meta property="og:url" content="https://danst.tech/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://www.apple.com/ac/structured-data/images/open_graph_logo.png?201809210816" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dan Blog's - Personal Blog" />
      </Helmet>
      <Navbar />
      <div className="container is-fluid is-widescreen is-fullhd">{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
