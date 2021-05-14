const webpack = require('webpack');
const {merge} = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.js');


module.exports = env => merge(common(env), {
  mode: 'production',
  performance: {
    maxEntrypointSize: 8112000,
    maxAssetSize: 8112000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env)
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      }
    })
  ],
});
