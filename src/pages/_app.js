import React from 'react';

import { Provider } from 'react-redux';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import Head from 'next/head';
import App from 'next/app';

import withReduxStore from 'utils/redux/with-redux-store';
import appConfig from 'helpers/appConfig';
import Navigation from 'containers/NavigationBarWrapper';

import 'global-styles.scss';
import 'typeface-metropolis';
import '@typefaces-pack/typeface-inter';

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
          <CacheProvider value={cache}>
            <Navigation />
            <Component {...pageProps} />
          </CacheProvider>
        </Provider>
      </React.StrictMode>
    );
  }
}

export default withReduxStore(Srr);
