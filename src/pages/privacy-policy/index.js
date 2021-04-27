import React from 'react';

import CSSHack from 'gg-webapp/components/CSSHack';
import PrivacyPolicy from 'containers/common/PrivacyPolicy';
import LegacyCommonLayout from 'gg-webapp/components/LegacyCommonLayout';

const Page = props => {
  return (
    <LegacyCommonLayout>
      <CSSHack pageName="privacy-policy" />
      <PrivacyPolicy {...props} />
    </LegacyCommonLayout>
  );
};

Page.propTypes = {};

export default Page;
