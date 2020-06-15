import React from 'react';
import { Global, css } from '@emotion/core';
import { extractCritical } from 'emotion-server';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const page = ctx.renderPage();
    // extract css to render in SSR
    const styles = extractCritical(page.html);
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html>
        <Global
          styles={css`
            ::selection {
              background-color: #26bd5a;
              color: #fff;
            }
            body,
            html {
              margin: 0;
              padding: 0;
              font-family: 'Inter';
            }
          `}
        />

        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#000000" />
          <link rel="shortcut icon" href="/static/favicon/favicon.png" />
          <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
          <style data-emotion-css={this.props.ids.join(' ')} dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
