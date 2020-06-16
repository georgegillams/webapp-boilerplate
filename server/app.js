import { setConfig } from 'next/config';
import nextConfig from '../next.config';
import seo from './seo';
import api from './api/api';

const express = require('express');
const next = require('next');
const { Signale } = require('signale');
import appConfig from 'helpers/appConfig';
import cors from 'cors';
import bodyParser from 'body-parser';
import fileupload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import slowDown from 'express-slow-down';

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

  // Production security - helmet
  server.use(helmet());

  // Production security - cors
  server.use(
    cors({
      origin: appConfig.siteUrl,
    })
  );

  // Production security - rate limiting
  server.use(
    slowDown({
      windowMs: 15 * 60 * 1000, // 15 minutes
      delayAfter: NODE_ENV === 'production' ? 100 : 10000, // allow 50 requests per window without limiting...
      delayMs: 500, // add 1s delay per request above 50...
      maxDelayMs: 10000, // with a maximum delay of 10 seconds
      // request # 1 no delay
      // ...
      // request # 100 no delay
      // request # 101 is delayed by 500ms
      // request # 102 is delayed by 1000ms
      // request # 103 is delayed by 1500ms
      // ...
      // request # 120 is delayed by 10s
      // request # 121 is delayed by 10s <-- won't exceed 10s delay
      //
      // The max request rate is 100 in 0s + 20 in 105s + 85 in 850s = 205 in 15 minutes = 820 in 1 hour
      skip: req => {
        if (req.originalUrl.includes('api')) {
          return false;
        }
        return true;
      },
    })
  );

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
