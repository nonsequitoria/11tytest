module.exports = (eleventyConfig) => {
    eleventyConfig.addCollection("posts", (collection) => {
      return collection.getAll().filter((item) => {
        return 'type' in item.data && item.data.type === 'post'
      })
    })
  }