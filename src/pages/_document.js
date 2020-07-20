import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const page = ctx.renderPage();
    // extract css to render in SSR
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, ...page };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/favicon-180x180.png" />

          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="64x64" href="/static/favicon/favicon-64x64.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/static/favicon/favicon-512x512.png" />

          <link rel="icon" href="/static/favicon/favicon.ico" />

          <link rel="manifest" href="/static/favicon/site.webmanifest" />

          <link rel="mask-icon" href="/static/favicon/favicon.svg" color="#FF0000" />
          <link rel="shortcut icon" href="/static/favicon/favicon.png" />

          <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
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
