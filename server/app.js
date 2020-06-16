import { setConfig } from 'next/config';
import nextConfig from '../next.config';
import seo from './seo';
import applySecurityPractises from './security';
import api from './api/api';

const express = require('express');
const next = require('next');
const { Signale } = require('signale');
import bodyParser from 'body-parser';
import fileupload from 'express-fileupload';
import cookieParser from 'cookie-parser';

setConfig(nextConfig);

const { NODE_ENV } = process.env;
const dev = NODE_ENV !== 'production';

const port = process.env.PORT || 3000;
const app = next({ dev });

const handle = app.getRequestHandler();

const options = {
  scope: 'app server',
};
const signale = new Signale(options);

(async () => {
  await app.prepare();
  const server = express();

  applySecurityPractises(server);

  // enable sending API requests with files in form-data
  server.use(fileupload());

  server.use(bodyParser.json());
  server.use(cookieParser());

  server.use(seo);
  server.use('/api', api);
  server.use('/static', express.static('public/static'));

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  signale.success(`<> React Next Boilerplate ready on localhost:${port}`);
})();
