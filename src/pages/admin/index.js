import React from 'react';

import CSSHack from '@george-gillams/webapp/components/CSSHack';
import Admin from 'containers/Admin/Navigation';
import LegacyCommonLayout from 'components/common/LegacyCommonLayout';

const Page = props => {
  return (
    <LegacyCommonLayout>
      <CSSHack pageName="admin" />
      <Admin {...props} />
    </LegacyCommonLayout>
  );
};

Page.propTypes = {};

export default Page;
