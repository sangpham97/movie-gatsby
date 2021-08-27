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
}
