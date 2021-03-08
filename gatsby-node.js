exports.onCreateWebpackConfig = ({actions}) => {

  actions.setWebpackConfig({
    resolve: {
      fallback: {
        https: require.resolve('https-browserify'),
        http: require.resolve('stream-http')
      }
    }
  })
}
