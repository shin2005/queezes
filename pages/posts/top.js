import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Top() {
  return (
    <Layout>
      <Head>
        <title>Popular</title>
      </Head>
      <h1>Welcome To Favorites</h1>
      <p>Go through top searched equations</p>
      <h2>
        <Link href="/">
          <a>Back</a>
        </Link>
      </h2>
    </Layout>
  );
}
