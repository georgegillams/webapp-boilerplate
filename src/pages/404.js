import React from 'react';

import CommonLayout from 'components/CommonLayout';
import Head from 'next/head';
import appConfig from 'helpers/appConfig';
import NotFound from 'containers/NotFound';

const Page = props => {
  return (
    <CommonLayout>
      <Head>
        <title>404 - {appConfig.projectTitle}</title>
      </Head>
      <NotFound {...props}></NotFound>
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
