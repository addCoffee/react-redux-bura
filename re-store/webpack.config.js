const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: ['./src/index.js', './src/base/index.scss']
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
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|js|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: [
          {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                esModule: false,
              },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/base/index.html'
    })
  ]
};