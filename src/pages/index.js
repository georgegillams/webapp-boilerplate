import React from 'react';

import Home from 'containers/HomeBP';
import CommonLayout from 'components/CommonLayout';

export class Page extends React.PureComponent {
  render() {
    return (
      <CommonLayout>
        <Home style={{ background: 'black' }} {...this.props} />
      </CommonLayout>
    );
  }
}

Page.propTypes = {};

export default Page;
