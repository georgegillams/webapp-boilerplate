import React from 'react';

import CSSHack from '@george-gillams/webapp/components/CSSHack';
import Debug from 'containers/common/Debug';
import LegacyCommonLayout from '@george-gillams/webapp/components/LegacyCommonLayout';

const Page = props => {
  return (
    <LegacyCommonLayout>
      <CSSHack pageName="debug" />
      <Debug {...props} />
    </LegacyCommonLayout>
  );
};

Page.propTypes = {};

export default Page;
