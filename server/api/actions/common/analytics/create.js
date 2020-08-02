import analyticsAllowedAttributes from './private/analyticsAllowedAttributes';

import { dbCreate } from 'utils/database';
import lockPromise from 'utils/lock';
import authentication from 'utils/authentication';
import reqSecure from 'utils/reqSecure';
import { ipPrefix } from 'utils/ipAddress';

export default function create(req) {
  reqSecure(req, analyticsAllowedAttributes);
  return lockPromise('analytics', () =>
    authentication(req).then(user => {
      let ipAddress = req.connection.remoteAddress;
      if (req.headers['x-forwarded-for']) {
        ipAddress = req.headers['x-forwarded-for'];
      }
      if (ipAddress) {
        req.body.ipAddressPrefix = ipPrefix(ipAddress);
      }
      return dbCreate({ redisKey: 'analytics', user }, req);
    })
  );
}
