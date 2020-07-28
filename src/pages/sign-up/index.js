import React from 'react';

import SignUp from 'containers/SignUp';
import CommonLayout from 'components/common/CommonLayout';

const Page = props => {
  return (
    <CommonLayout>
      <SignUp {...props} />
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
