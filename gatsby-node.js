const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const utils = require('./utils')
const { mainQuery } = require('./graphql-queries')
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
require("dotenv").config({ path: `.env.${activeEnv}`})

const clearUrl = (url) => {
  return url.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(mainQuery).then(result => {
    if (result.errors) {
      result.errors.forEach(error => console.error(error.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    const TEMPLATE_ABOUT = 'about-page'
    const TEMPLATE_BLOG = 'blog-post'
    const TEMPLATE_DOCS = 'docs-page'
    const TEMPLATE_INDEX = 'index-page'

    posts.forEach(edge => {
      const id = edge.node.id
      const templateKey = edge.node.frontmatter.templateKey
      let prevSlug = null
      let nextSlug = null
      let context = {
        id,
      };

      switch (templateKey) {
        case TEMPLATE_BLOG:
          prevSlug = edge.previous ? edge.previous.fields.slug : null
          nextSlug = edge.next ? edge.next.fields.slug : null
          context = _.merge(context, { prevSlug, nextSlug })
        case TEMPLATE_ABOUT:
        case TEMPLATE_DOCS:
        case TEMPLATE_INDEX:
        default:

      }

      let slug = clearUrl(edge.node.fields.slug)
      let paramsPage = {
        path: slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(`src/templates/${String(templateKey)}.js`),
        context: context
      }
      createPage(paramsPage)
    })

    let tags = utils.getTagsFromPost(posts); // Tag pages:
    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: path.resolve(`src/templates/tags-page.js`),
        context: {
          tag,
        },
      })
    })

  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

}


async function onCreateNode({ node, actions, loadNodeContent, createNodeId, createContentDigest, getNode }) {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }


}

exports.onCreateNode = onCreateNode;
exports.onCreateWebpackConfig = ({stage, rules, loaders, plugins, actions}) => {
  const { setWebpackConfig } = actions;

  setWebpackConfig({
    externals: {
      jquery: 'jQuery', // important: 'Q' capitalized
    }
  })
}