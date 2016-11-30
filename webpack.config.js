module.exports = {
  entry: {
    "/bundle.js": "./home.js",
    "base/bundle.js": "./base/main.js",
    "biocrowds/bundle.js": "./biocrowds/main.js"
  },
  output: {
      path: __dirname,
      filename: "[name]"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.md$/, 
        loader: "html!markdown" 
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    port: 7000
  }
};