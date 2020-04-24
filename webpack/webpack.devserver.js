const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');

let gallery_path = path.resolve(__dirname, '..');
module.exports = env => {
  return merge(common(env), {
    devtool: 'inline-source-map',
    watch: true,
    mode: 'development',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(env)
      }),
    ],
    devServer: {
      contentBase: path.resolve(gallery_path, 'public'),
      compress: true,
      port: 8000,
      // https: true,
      hot: false,
      host: '0.0.0.0',
      public: 'localhost:8000',
      historyApiFallback: true,
      stats: 'minimal',
      open: true,
      allowedHosts: [
        '.local',
      ],
      overlay: {
        warnings: false,
        errors: true
      }
    }
  });
};
