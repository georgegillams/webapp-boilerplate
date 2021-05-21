import React from 'react';

import CSSHack from '@george-gillams/webapp/components/CSSHack';
import Home from 'containers/HomePage';
import CommonLayout from 'components/common/CommonLayout';

const Page = props => {
  return (
    <CommonLayout>
      <CSSHack pageName="index" />
      <Home {...props} />
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
