import React from 'react';

import Debug from 'containers/Debug';
import CommonLayout from 'components/CommonLayout';
import Head from 'next/head';
import appConfig from 'helpers/appConfig';

export class Page extends React.PureComponent {
  render() {
    return (
      <CommonLayout>
        <Head>
          <title>Debug - {appConfig.projectTitle}</title>
        </Head>
        <Debug {...this.props} />
      </CommonLayout>
    );
  }
}

Page.propTypes = {};

export default Page;
