import React from 'react';

import CSSHack from 'gg-webapp/components/CSSHack';
import Account from 'containers/common/Account';
import LegacyCommonLayout from 'gg-webapp/components/LegacyCommonLayout';

const Page = props => {
  return (
    <LegacyCommonLayout>
      <CSSHack pageName="account" />
      <Account {...props} />
    </LegacyCommonLayout>
  );
};

Page.propTypes = {};

export default Page;
