const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const nextTranspileModules = require('next-transpile-modules');

const nextConfig = {
  distDir: 'build',
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'all',
    NODE_ENV: process.env.NODE_ENV,
    BUILT_AT: process.env.BUILT_AT,
  },
};

const withTM = nextTranspileModules(['gg-components']);

module.exports = withTM(
  withSass(
    withCSS({
      cssModules: true,
      cssLoaderOptions: {
        url: false,
        localIdentName: '[local]___[hash:base64:5]',
      },
      ...nextConfig,
    })
  )
);
