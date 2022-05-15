import React from 'react';

import CSSHack from 'components/common/CSSHack';
import Home from 'containers/HomePage';
import CommonLayout from 'components/common/CommonLayout';
import Text from '@george-gillams/components/text';

const Page = props => {
  return (
    <CommonLayout>
      <CSSHack pageName="index" />
      <Home {...props} />
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
