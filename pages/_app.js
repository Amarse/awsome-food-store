import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Head from 'next/head';


import Layout from 'src/components/layout/Layout.js';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {


  return (
    <>
      <Head>
        <title>AWESOME FOOD STORE</title>
        <meta name="description" content="food store" />
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <div className="layout-container">
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

export default MyApp;
