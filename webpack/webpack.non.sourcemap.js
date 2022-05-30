const webpack = require('webpack');
const {merge} = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
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
    new CssMinimizerPlugin({
      minimizerOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      }
    })
  ],
});
