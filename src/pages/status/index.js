import React from 'react';

import Status from 'containers/Status';
import CommonLayout from 'components/CommonLayout';
import Head from 'next/head';
import appConfig from 'helpers/appConfig';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { BUILT_AT, NODE_ENV } = publicRuntimeConfig;

export class Page extends React.PureComponent {
  render() {
    return (
      <CommonLayout>
        <Head>
          <title>Status - {appConfig.projectTitle}</title>
        </Head>
        <Status builtAt={BUILT_AT} nodeEnv={NODE_ENV} {...this.props} />
      </CommonLayout>
    );
  }
}

Page.propTypes = {};

export default Page;
