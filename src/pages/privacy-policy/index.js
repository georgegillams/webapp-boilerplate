import React from 'react';

import CSSHack from '@george-gillams/webapp/components/CSSHack';
import PrivacyPolicy from 'containers/common/PrivacyPolicy';
import LegacyCommonLayout from '@george-gillams/webapp/components/LegacyCommonLayout';

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
