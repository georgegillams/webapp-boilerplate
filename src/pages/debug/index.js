import React from 'react';

import Debug from 'containers/Debug';
import CommonLayout from 'components/CommonLayout';

export class Page extends React.PureComponent {
  render() {
    return (
      <CommonLayout>
        <Debug {...this.props} />
      </CommonLayout>
    );
  }
}

Page.propTypes = {};

export default Page;
