import React from 'react';

import CSSHack from 'gg-webapp/components/CSSHack';
import Home from 'containers/HomePage';
import CommonLayout from 'gg-webapp/components/CommonLayout';

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
