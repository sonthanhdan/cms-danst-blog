const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const utils = require('./utils')
const { mainQuery } = require('./graphql-queries')
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
require("dotenv").config({ path: `.env.${activeEnv}`})

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(mainQuery).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges


    posts.forEach(edge => {
      const id = edge.node.id
      const templateKey = edge.node.frontmatter.templateKey;
      const prevSlug = (templateKey == 'blog-post' && edge.previous) ? edge.previous.fields.slug : null;
      const nextSlug = (templateKey == 'blog-post' && edge.next) ? edge.next.fields.slug : null;
      let slug = edge.node.fields.slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
      createPage({
        path: slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(templateKey)}.js`
        ),
        context: {
          id,
          prevSlug,
          nextSlug
        }
      })
    })

    let tags = utils.getTagsFromPost(posts); // Tag pages:

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: path.resolve(`src/templates/tags.js`),
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

exports.onCreateWebpackConfig = ({stage, rules, loaders, plugins, actions}) => {
  const { setWebpackConfig } = actions;

  setWebpackConfig({
    externals: {
      jquery: 'jQuery', // important: 'Q' capitalized
    }
  })
}