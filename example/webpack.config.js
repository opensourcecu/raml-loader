var webpack = require("webpack");
var path = require("path");

module.exports = {

  entry: "./index.js",

  output: {
    path: __dirname,
    filename: "out.js"
  },

  module: {
    loaders: [
      { test: /\.raml$/, loader: path.resolve(__dirname, "..", "index.js") }
    ]
  }

}
