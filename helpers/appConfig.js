// Note that these values are fixed for the client at build-time.
// They are populated at build-time by babel, so destructuring syntax is not supported
const NODE_ENV = process.env.NODE_ENV;
const PROJECT_UNDER_TEST = process.env.PROJECT_UNDER_TEST;
const PORT = process.env.PORT;
const BUILT_AT = process.env.BUILT_AT;
const HOST = process.env.HOST;

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
const githubRepo = 'georgegillams/webapp-boilerplate';
const githubRepoUrl = `https://github.com/${githubRepo}`;
const port = PORT || 3000;
const useLocalhost = NODE_ENV === 'development' || PROJECT_UNDER_TEST;
const domain = useLocalhost ? `localhost:${port}` : 'webapp-boilerplate.georgegillams.co.uk';
const siteUrl = useLocalhost ? `http://${domain}` : `https://${domain}`;
const apiEndpoint = `${siteUrl}/api`;

module.exports = {
  host: HOST || 'localhost',
  port,
  builtAt: BUILT_AT,
  nodeEnv: NODE_ENV,
  projectUnderTest: !!PROJECT_UNDER_TEST,
  projectName,
  projectTitle,
  projectDescription,
  projectDescriptionShort,
  domain,
  siteUrl,
  apiEndpoint,
  githubRepo,
  githubRepoUrl,
  app: {
    title: `${projectTitle} ${projectDescription}`,
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
          content: `${siteUrl}/static/images/social-preview.png`,
        },
        {
          property: 'twitter:image',
          content: `${siteUrl}/static/images/social-preview.png`,
        },
        {
          property: 'og:url',
          content: `${siteUrl}/`,
        },
        {
          property: 'og:logo',
          content: `${siteUrl}/static/favicon/favicon-180x180.png`,
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
