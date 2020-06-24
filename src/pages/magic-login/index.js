import React from 'react';

import MagicLogin from 'containers/MagicLogin';
import CommonLayout from 'components/CommonLayout';

const Page = props => {
  return (
    <CommonLayout>
      <MagicLogin {...props} />
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
