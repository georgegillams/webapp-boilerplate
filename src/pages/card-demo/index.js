import React from 'react';

import CSSHack from 'components/common/CSSHack';
import CardDemo from 'containers/CardDemo';
import CommonLayout from 'components/common/CommonLayout';

const Page = props => {
  return (
    <CommonLayout>
      <CSSHack pageName="card-demo" />
      <CardDemo {...props} />
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
