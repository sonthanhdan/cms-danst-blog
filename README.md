# Dan's Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/85b4b641-0796-4aa7-89da-8d1391d5eddd/deploy-status)](https://app.netlify.com/sites/dandev/deploys)
**Note:** This repo uses [Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/).

This repo is my personal blog website that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS Starter](https://www.netlifycms.org): **[https://danst.tech](https://danst.tech)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Features

- A simple landing page with blog functionality built with Netlify CMS
- Editabe Pages: Landing, About, Blog-Collection and Contact page with Netlify Form support
- Create Blog posts from Netlify CMS
- Tags: Separate page for posts under each tag
- Uses Bulma for styling, but size is reduced by `purge-css-plugin`
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatsby-image` with Netlify-CMS preview support
- Uses `gatsby-plugin-canonical-urls` for canonical url
- Uses `gatsby-plugin-html-minifier` for minify html
- Uses `gatsby-plugin-minify-classnames` for minify css classnames
- Uses `gatsby-image` with Netlify-CMS preview support
- Netlify deploy configuration
- Perfect score on Lighthouse for SEO, Accessibility and Performance (wip:PWA)

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

## Getting Started (Recommended)

### Access Locally

Pulldown a local copy of the Github repository Netlify created for you, with the name you specified in the previous step
```
$ git clone https://github.com/sonthanhdan/cms-danst-blog.git your-project-name
$ cd your-project-name
$ yarn or npm start
```

## CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).
