import React from 'react';

import CSSHack from 'gg-webapp/components/CSSHack';
import Debug from 'containers/common/Debug';
import LegacyCommonLayout from 'gg-webapp/components/LegacyCommonLayout';

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
