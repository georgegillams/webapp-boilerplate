import React from 'react';

import MagicLogin from 'containers/MagicLogin';
import CommonLayout from 'components/common/CommonLayout';

const Page = props => {
  return (
    <CommonLayout>
      <MagicLogin {...props} />
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
