import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { withConfig, ConfigContext } from '../Config';

const CSSHack = (props) => {
  const { appConfig, pageName } = props;

  if (appConfig.isProduction) {
    return null;
  }

  const cssUrl = `/_next/static/pages/${pageName}.css?ts=${new Date().valueOf()}`;
  // eslint-disable-next-line no-console
  console.log(`Loading CSS using hack`, cssUrl);

  return (
    <Head>
      <link rel="preload" href={cssUrl} as="style" />
      <link rel="stylesheet" href={cssUrl} />
    </Head>
  );
};

CSSHack.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default withConfig(CSSHack);
