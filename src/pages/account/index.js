import React from 'react';

import Account from 'containers/Account';
import CommonLayout from 'components/CommonLayout';
import Head from 'next/head';
import appConfig from 'helpers/appConfig';

export class Page extends React.PureComponent {
  render() {
    return (
      <CommonLayout>
        <Head>
          <title>Account - {appConfig.projectTitle}</title>
        </Head>
        <Account style={{ background: 'black' }} {...this.props} />
      </CommonLayout>
    );
  }
}

Page.propTypes = {};

export default Page;
