const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].[hash].css',
  chunkFilename: '[id].[hash].css',
  ignoreOrder: false
})

module.exports = (env, options) => {
  const production = options.mode === 'production'

  const styleLoader = production
    ? {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: './dist'
      }
    }
    : 'style-loader'

  const config = {
    entry: 'index.tsx',
    resolveLoader: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    context: path.resolve(__dirname, './src'),
    devtool: production ? 'source-map' : 'eval',
    devServer: { disableHostCheck: true, host: '0.0.0.0', historyApiFallback: true },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: [/(\.d\.ts)/, /node_modules/],
          use: {
            loader: 'ts-loader'
          },
        },
        {
          test: /\.css$/,
          use: [
            styleLoader,
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          exclude: /fonts/,
          oneOf: [
            { resourceQuery: /inline/, use: 'url-loader' },
            { loader: 'file-loader?name=[name].[ext]' }
          ]
        },
        {
          test: /\.(woff|woff2)$/,
          use: {
            loader: 'file-loader',
          }
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      plugins: [new TSConfigPathsPlugin()]
    },
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      new CopyWebpackPlugin([
        { from: '../i18n', to: 'locales' },
      ]),
      new webpack.HashedModuleIdsPlugin({
        hashFunction: 'md4',
        hashDigest: 'base64',
        hashDigestLength: 4,
      })
    ],
    optimization: {
      minimize: production,
      minimizer: [new TerserPlugin({ cache: true }), new OptimizeCSSAssetsPlugin()],
      runtimeChunk: true,
      splitChunks: {
        chunks: 'all'
      }
    },
  }

  if (production) {
    config.plugins.push(miniCssExtractPlugin)
  }

  return config
}
