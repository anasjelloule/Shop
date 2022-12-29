const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')

// require("font-awesome-webpack");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});
const jqueryplugin=    new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
})
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/,         // <-- added `|jsx` here
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.js$/,
        use: ['babel-loader', 'next-babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx"],    // <-- added `.jsx` here
  },
  plugins: [htmlPlugin,jqueryplugin],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  }
};