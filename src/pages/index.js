import React from 'react';
import PropTypes from 'prop-types';

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
