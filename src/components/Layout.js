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
        <html lang="vi" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=contain" />
        <link rel="canonical" href="https://danst.tech/" />
        <link rel="alternate" href="https://danst.tech/" hrefLang="vi-VN" />
        <meta name="robots" content="index, follow" />
        <title>{title} | Personal Blog</title>
        <meta name="referrer" content="always" />
        <meta name="description" content="Personal blog by DanST. I save what I learned." />
        <meta name="keywords" content="danst, danst blog, personal blog, developer blog" />
        <meta name="title" content="Dan Blog's | Personal Blog" />
        <meta name="geo.region" content="VN-SG" />
        <meta name="geo.placename" content="Ward 4" />
        <meta name="geo.position" content="10.75392;106.702191" />
        <meta name="ICBM" content="10.75392, 106.702191" />
        <meta name="google" content="notranslate" />
        <link rel="icon"
              href={`${withPrefix('/')}favicons/favicon.ico`}
        />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}favicons/apple-touch-icon.png`}
        />
        <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}favicons/favicon-32x32.png`}
            sizes="32x32"
        />
        <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}favicons/favicon-16x16.png`}
            sizes="16x16"
        />

        <link
            rel="mask-icon"
            href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
            color="#ff4400"
        />
        <link rel="manifest" href={`${withPrefix('/')}site.webmanifest`} />
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
        <meta property="og:description" content="Personal blog by DanST. I save what I learned." />
        <meta
            property="og:image"
            content={`${withPrefix('/')}img/og-image.jpg`}
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://danst.tech/" />
        <meta property="twitter:title" content="Dan Blog's | Personal Blog" />
        <meta property="twitter:description" content="Personal blog by DanST. I save what I learned." />
        <meta property="twitter:image"
              content={`${withPrefix('/')}img/og-image.jpg`}
        />
        <meta property="og:title" content="Dan Blog's | Personal Blog" />
        <meta property="og:description" content="Personal blog by DanST. I save what I learned." />
        <meta property="og:url" content="https://danst.tech/" />
        <meta property="og:locale" content="vi_VN" />
        <meta
            property="og:image"
            content={`${withPrefix('/')}img/og-image.jpg`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dan Blog's | Personal Blog" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
