import React from 'react';

import CSSHack from 'gg-webapp/components/CSSHack';
import EmailVerification from 'containers/common/EmailVerification';
import LegacyCommonLayout from 'gg-webapp/components/LegacyCommonLayout';

const Page = props => {
  return (
    <LegacyCommonLayout>
      <CSSHack pageName="email-verification" />
      <EmailVerification {...props} />
    </LegacyCommonLayout>
  );
};

Page.propTypes = {};

export default Page;
