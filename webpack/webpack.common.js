const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');
let gallery_path = path.resolve(__dirname, '..');
let app_path = path.resolve(gallery_path, 'app');

module.exports = env => {
  console.log(`Application ENV: ${env.ENV}`);
  console.log(`Application main PATH: ${gallery_path}`);
  console.log(`Application APP PATH: ${app_path}`);
  return {
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom'
      },
      modules: [
        path.resolve(app_path),
        path.resolve(app_path, 'src'),
        path.resolve(gallery_path, 'node_modules'),
      ],
      plugins: [
        new DirectoryNamedWebpackPlugin()
      ]
    },
    stats: 'minimal', /*errors-only errors-warnings minimal none normal verbose*/
    entry: {
      main: [
        '@babel/polyfill',
        'custom-event-polyfill',
        'url-search-params-polyfill',
        path.resolve(app_path, 'src/bootstrap.js'),
        path.resolve(app_path, 'src/index.js'),
      ],
    },
    output: {
      path: path.resolve(gallery_path, 'public'),
      filename: '[name].[hash].bundle.js',
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: 'babel-loader',
        },
        {
          test: /\.s?[ac]ss$/,
          exclude: [path.resolve(gallery_path,'node_modules/@sflpro')],
          use: [
            MiniCssExtractPlugin.loader,
            {loader: 'css-loader', options: {sourceMap: true}},
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: true,
              }
            },
            {loader: 'postcss-loader'},
            {loader: 'sass-loader', options: {sourceMap: true}}
          ],
        },
        {
          test: /\.(css)$/,
          include: [path.resolve(gallery_path, 'node_modules/@sflpro')],
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },

              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.resolve(gallery_path, 'postcss.config.js'),
                },
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          options: {
            name: '[path][name].[hash].[ext]',
            context: path.resolve(app_path, 'src'),
          },
          loader: 'file-loader',
        },
        {
          test: /\.icon\.svg$/,
          loader: 'inline-loader',
        },
        {
          test: /\.(png|jpg|gif|ico|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
            context: path.resolve(app_path, 'src'),
          },
        },
        {
          test: /\.html$/i,
          exclude: [
            path.resolve('app/index.html')
          ],
          loader: 'html-loader',
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      },
    },
    plugins: [
      new CleanWebpackPlugin({
        dry: true,
        dangerouslyAllowCleanPatternsOutsideProject: true,
        cleanAfterEveryBuildPatterns: [path.resolve(gallery_path, 'public')],
      }),
      new HtmlWebPackPlugin({
        favicon: './app/favicon.ico',
        template: './app/index.html',
        filename: 'index.html',
        templateParameters: {
          APP_VERSION: env.APP_VERSION || 'development',
        },
      }),
      new MiniCssExtractPlugin({
        filename: 'styles.[hash].css'
      }),
      require('autoprefixer'),
      new CopyPlugin([
        {
          from: path.resolve(app_path, 'src/assets'),
          to: 'assets/'
        },
      ]),
    ],
  };
};
