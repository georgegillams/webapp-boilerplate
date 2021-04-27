import React from 'react';

import CSSHack from 'gg-webapp/components/CSSHack';
import ApiDocs from 'containers/common/ApiDocs';
import LegacyCommonLayout from 'gg-webapp/components/LegacyCommonLayout';

const Page = props => {
  return (
    <LegacyCommonLayout>
      <CSSHack pageName="api-docs" />
      <ApiDocs {...props} />
    </LegacyCommonLayout>
  );
};

Page.propTypes = {};

export default Page;
