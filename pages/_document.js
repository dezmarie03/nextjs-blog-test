import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import ReactOneSignal from '../components/ReactOneSignal';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <Head>
          <ReactOneSignal />
        </Head>
        <body
          className={`antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
