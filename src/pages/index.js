import React from 'react';

import Home from 'containers/Home';

export class IndexPage extends React.PureComponent {
  render() {
    return <Home {...this.props} />;
  }
}

IndexPage.propTypes = {};

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default IndexPage;
