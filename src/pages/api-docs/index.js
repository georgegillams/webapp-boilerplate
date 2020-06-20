import React from 'react';

import ApiDocs from 'containers/ApiDocs';
import CommonLayout from 'components/CommonLayout';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { BUILT_AT, NODE_ENV } = publicRuntimeConfig;

export class Page extends React.PureComponent {
  render() {
    return (
      <CommonLayout>
        <ApiDocs builtAt={parseInt(BUILT_AT, 10)} nodeEnv={NODE_ENV} {...this.props} />
      </CommonLayout>
    );
  }
}

Page.propTypes = {};

export default Page;
