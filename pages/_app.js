import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Layout from '../src/components/layout/Layout.js';
import Head from 'next/head';
import { Html } from 'next/document';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
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
