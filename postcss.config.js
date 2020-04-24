module.exports = {
  plugins: {
    'postcss-mixins': {
      mixinsFiles: [
        // 'node_modules/@sflpro/dresscode/lib/mixins/grid.css',
        // 'node_modules/@sflpro/dresscode/lib/mixins/typography.css',
        // 'node_modules/@sflpro/dresscode/lib/fonts.css',
        './app/src/assets/css/fonts.css',
        // './static/assets/css/customMixins.css',
      ],
    },
    'postcss-preset-env': {
      importFrom: [
        // 'node_modules/@sflpro/dresscode/lib/defaults.css',
        // 'node_modules/@sflpro/dresscode/lib/colorScheme.css',
        'node_modules/react-responsive-carousel/lib/styles/carousel.min.css',
        './app/src/assets/css/colorScheme.css',
        './app/src/assets/css/defaults.css',
        './app/src/assets/css/customMedia.css',
        // './static/assets/css/main.css',
      ],
      features: {
        'nesting-rules': true,
        'custom-properties': {
          preserve: false,
        },
        'custom-media-queries': true,
      },
    },
  },
};
