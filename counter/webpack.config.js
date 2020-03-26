const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: ['./src/base/index.js', './src/base/index.scss']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[contenthash].js",
  },
  devServer: {
    compress: true,
    port: 8080,
    open: true,
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-react"],
            },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/base/index.html'
    })
  ]
};