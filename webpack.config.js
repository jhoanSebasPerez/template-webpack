const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { SourceMapDevToolPlugin } = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

const port = process.env.PORT || 3000;

const options = {
    extensions: ['js', 'jsx'],
    exclude: [
      '/node_modules/',
    ], // these are the options we'd previously passed in
};

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  context: path.resolve(__dirname),
  devServer: {
    port,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /(\.js|.jsx)$/,
        exclude: /node_modules/,
        use: ['source-map-loader'],
      },
      {
        test: /(\.js|.jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: { loader: 'file-loader' },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './css/styles.css',
    }),
    new SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new ESLintPlugin(options),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.sass'],
    modules: ['node_modules'],
  },
};
