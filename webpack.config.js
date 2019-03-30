const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')
// require("font-awesome-webpack");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
const jqueryplugin=    new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
})
module.exports = {
  entry: { main: './src/index.js' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
    ]
  },
  plugins: [htmlPlugin,jqueryplugin],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  }
};