const { NODE_ENV, PROJECT_UNDER_TEST, PORT } = process.env;

const environment = {
  development: {
    isProduction: false,
  },
  production: {
    isProduction: true,
  },
}[NODE_ENV || 'development'];

const projectName = 'WEBAPP_BOILERPLATE';
const domain = 'webapp-boilerplate.georgegillams.co.uk';
const port = PORT || 3000;
const siteUrl = NODE_ENV === 'development' || PROJECT_UNDER_TEST ? `http://localhost:${port}` : `https://${domain}`;
const apiEndpoint = `${siteUrl}/api`;

module.exports = {
  host: process.env.HOST || 'localhost',
  port,
  projectName,
  domain,
  siteUrl,
  apiEndpoint,
  app: {
    title: 'Web App Boilerplate - just some boilerplate for a web app',
    head: {
      titleTemplate: 'Web App Boilerplate: %s',
      meta: [
        { property: 'theme-color', content: '#025ca2' },
        {
          property: 'description',
          content: 'just some boilerplate for a web app',
        },
        { property: 'og:site_name', content: 'Web App Boilerplate' },
        {
          property: 'og:image',
          content: 'https://i.imgur.com/FLA0jkg.jpg',
        },
        {
          property: 'og:url',
          content: 'https://webapp-boilerplate.georgegillams.co.uk/',
        },
        {
          property: 'og:logo',
          content: 'https://webapp-boilerplate.georgegillams.co.uk/favicon.ico',
        },
        { property: 'og:locale', content: 'en_GB' },
        {
          property: 'og:title',
          content: 'Web App Boilerplate - just some boilerplate for a web app',
        },
        {
          property: 'og:description',
          content: 'just some boilerplate for a web app',
        },
        { property: 'og:card', content: 'summary' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'og:site', content: '@georgegillams' },
        { property: 'og:creator', content: '@georgegillams' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' },
      ],
    },
  },
  ...environment,
};
