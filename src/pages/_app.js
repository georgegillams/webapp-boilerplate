import React from 'react';

import { Provider } from 'react-redux';
import Head from 'next/head';
import App from 'next/app';
import Consent from 'containers/Consent';
import Analytics from 'containers/Analytics';
import Authenticator from 'containers/Authenticator';

import withReduxStore from 'utils/redux/with-redux-store';
import appConfig from 'helpers/appConfig';
import Navigation from 'containers/NavigationBarWrapper';
import AppWrapper from 'components/AppWrapper';

import 'global-styles.scss';

class Srr extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <React.StrictMode>
        <Head>
          <title>{appConfig.projectTitle}</title>
          {appConfig.app.head.meta.map(m => (
            <meta key={m.property} name={m.property} content={m.content} />
          ))}
        </Head>

        <Provider store={reduxStore}>
          <AppWrapper>
            <Navigation />
            <Consent />
            <Analytics />
            <Authenticator />
            <Component {...pageProps} />
          </AppWrapper>
        </Provider>
      </React.StrictMode>
    );
  }
}

export default withReduxStore(Srr);
