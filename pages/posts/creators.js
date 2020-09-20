import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Top() {
  return (
    <Layout>
      <Head>
        <title>Creators</title>
      </Head>
      <h1>Welcome To Creators</h1>
      <p>See the Developers who Made this Website!</p>
      <h2>
        <Link href="/">
          <a>Back</a>
        </Link>
      </h2>
    </Layout>
  );
}
