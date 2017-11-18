const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const autoprefixer = require('autoprefixer');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
    },
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor-[hash].js',
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'app/index.pug'),
    path: path.join(__dirname, 'www')
  }),
  new webpack.HotModuleReplacementPlugin()
];

const rules = [
  {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        'plugins': ['react-hot-loader/babel']
      }
  },
  {
      test: /\.pug$/,
      loader: 'pug-loader',
      exclude: /node_modules/
  },
  {
      test: /\.s?css$/,
      loader: 'css-loader',
      exclude: /node_modules/
  },
];

module.exports = [{
  name: 'client',
  entry: path.join(__dirname, 'app/Main.js'),
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './www',
     hot: true
  },
  module: {
    rules,
  },
  plugins,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'www')
  }
},
// server build, 
{
  name: 'server',
  entry: path.join(__dirname, 'app','server','index.js'),
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {
              'targets': {
                'node': 'current'
              }
            }]
          ]
        }
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
  ],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  }
}];
