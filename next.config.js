const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const nextConfig = {
  distDir: 'build',
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'all',
  },
};

module.exports = withSass(
  withCSS({
    cssModules: true,
    cssLoaderOptions: {
      url: false,
      localIdentName: '[local]___[hash:base64:5]',
    },
    ...nextConfig,
  })
);
