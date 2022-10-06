import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/store', undefined, { shallow: true });
  }, []);

  useEffect(() => {
  }, [router.query.counter]);

  return (
    <div>
      <Head>
        <title>AWESOME FOOD STORE</title>
        <meta name="description" content="food store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}


