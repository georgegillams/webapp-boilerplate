import React from 'react';

import ApiDocs from 'containers/ApiDocs';
import CommonLayout from 'components/CommonLayout';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { BUILT_AT, NODE_ENV } = publicRuntimeConfig;

const Page = props => {
  return (
    <CommonLayout>
      <ApiDocs builtAt={parseInt(BUILT_AT, 10)} nodeEnv={NODE_ENV} {...props} />
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
