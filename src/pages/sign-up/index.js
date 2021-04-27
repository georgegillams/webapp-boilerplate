import React from 'react';

import CSSHack from 'gg-webapp/components/CSSHack';
import SignUp from 'containers/common/SignUp';
import LegacyCommonLayout from 'gg-webapp/components/LegacyCommonLayout';

const Page = props => {
  return (
    <LegacyCommonLayout>
      <CSSHack pageName="sign-up" />
      <SignUp {...props} />
    </LegacyCommonLayout>
  );
};

Page.propTypes = {};

export default Page;
