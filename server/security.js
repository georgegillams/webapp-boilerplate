import appConfig from 'helpers/appConfig';
import cors from 'cors';
import helmet from 'helmet';
import slowDown from 'express-slow-down';

const { NODE_ENV } = process.env;

const applySecurityPractises = server => {
  // Helmet
  server.use(helmet());

  // Cors
  server.use(
    cors({
      origin: appConfig.siteUrl,
    })
  );

  // Rate limiting
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
};

export default applySecurityPractises;
