const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      items: allContentfulMovies {
        nodes {
          image {
            title
          }
          episode
        }
      }
      types: allContentfulMovies {
        nodes {
          type
        }
      }
    }
  `)

  result.data.items.nodes.forEach(node => {
    createPage({
      path: `/${node.image.title}`,
      component: path.resolve(`src/templates/template-single-movie.jsx`),
      context: {
        title: node.image.title,
      },
    })
  })
  result.data.types.nodes.forEach(node => {
    createPage({
      path: `/danh-sach/${node.type}`,
      component: path.resolve(`src/templates/template-danh-sach.jsx`),
      context: {
        type: node.type,
      },
    })
  })
  result.data.items.nodes.forEach(node => {
    createPage({
      path: `/${node.image.title}/${node.episode}`,
      component: path.resolve(`src/templates/template-watch-movie.jsx`),
      context: {
        title: node.image.title,
        episode: node.episode,
      },
    })
  })
}
