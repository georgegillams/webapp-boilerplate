import React from 'react';

import CSSHack from 'gg-webapp/components/CSSHack';
import LegacyCommonLayout from 'gg-webapp/components/LegacyCommonLayout';
import NotFound from 'containers/common/NotFound';

const Page = props => {
  return (
    <LegacyCommonLayout>
      <CSSHack pageName="404" />
      <NotFound {...props}></NotFound>
    </LegacyCommonLayout>
  );
};

Page.propTypes = {};

export default Page;
