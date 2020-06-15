import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import appConfig from 'helpers/appConfig';

import Header from 'components/Header';
import Banner from 'components/Banner';
import Footer from 'components/Footer';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{appConfig.app.title}</title>
        {appConfig.app.head.meta.map(m => (
          <meta key={m.property} name={m.property} content={m.content} />
        ))}
      </Head>
      <Header />
      <main>
        <Banner />
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
