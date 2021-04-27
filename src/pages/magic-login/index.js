import React from 'react';

import CSSHack from 'gg-webapp/components/CSSHack';
import MagicLogin from 'containers/common/MagicLogin';
import LegacyCommonLayout from 'gg-webapp/components/LegacyCommonLayout';

const Page = props => {
  return (
    <LegacyCommonLayout>
      <CSSHack pageName="magic-login" />
      <MagicLogin {...props} />
    </LegacyCommonLayout>
  );
};

Page.propTypes = {};

export default Page;
