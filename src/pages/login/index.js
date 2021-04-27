import React from 'react';

import CSSHack from '@george-gillams/webapp/components/CSSHack';
import Login from 'containers/common/Login';
import LegacyCommonLayout from '@george-gillams/webapp/components/LegacyCommonLayout';

const Page = props => {
  return (
    <LegacyCommonLayout>
      <CSSHack pageName="login" />
      <Login {...props} />
    </LegacyCommonLayout>
  );
};

Page.propTypes = {};

export default Page;
