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
const projectTitle = 'Web App Boilerplate';
const projectDescription = 'Just some boilerplate for a web app';
const projectDescriptionShort = 'just some boilerplate for a web app';
const domain = 'webapp-boilerplate.georgegillams.co.uk';
const port = PORT || 3000;
const siteUrl = NODE_ENV === 'development' || PROJECT_UNDER_TEST ? `http://localhost:${port}` : `https://${domain}`;
const apiEndpoint = `${siteUrl}/api`;

module.exports = {
  host: process.env.HOST || 'localhost',
  port,
  projectName,
  projectTitle,
  projectDescription,
  projectDescriptionShort,
  domain,
  siteUrl,
  apiEndpoint,
  app: {
    title: 'Web App Boilerplate - just some boilerplate for a web app',
    head: {
      titleTemplate: `${projectTitle}: %s`,
      meta: [
        { property: 'theme-color', content: '#025ca2' },
        {
          property: 'description',
          content: projectDescriptionShort,
        },
        { property: 'og:site_name', content: projectTitle },
        {
          property: 'og:image',
          content: 'https://via.placeholder.com/500x200.png?text=Placeholder',
        },
        {
          property: 'og:url',
          content: `https://${domain}/`,
        },
        {
          property: 'og:logo',
          content: `https://${domain}/favicon.ico`,
        },
        { property: 'og:locale', content: 'en_GB' },
        {
          property: 'og:title',
          content: `${projectTitle} ${projectDescriptionShort}`,
        },
        {
          property: 'og:description',
          content: projectDescription,
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
