exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        nodes {
          slug
          id
          frontmatter {
            title
            date(formatString: "MMMM YYYY")
            intro
            path
          }
        }
      }
    }
  `)

  const pages = data.allMdx.nodes;

  pages.forEach(page => {
    actions.createPage({
      path: page.frontmatter.path,
      component: require.resolve(`./src/templates/case-study/index.js`),
      context: {
        id: page.id,
        title: page.frontmatter.title,
        slug: page.slug
      }
    })
  })
}
