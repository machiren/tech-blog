import Layout from '../../components/layaut';
import Head from 'next/head';
import Link from 'next/link';

interface SsgProps {
  props: SsgResultProps;
  revalidate?: number;
}

interface SsgResultProps {
  name: string;
  build_time: string;
}

export async function getStaticProps(): Promise<SsgProps> {
  const res = await fetch('http://localhost:3000/api/hello')
  const json = await res.json()
  const name = json.name;
  // ビルド時刻の取得
  const build_time = new Date().toString();

  return {
    props: {
      name,
      build_time
    },
    revalidate: 120
  }
}

export default function Ssg({ name, build_time }: SsgResultProps){
  return (
    <>
      <Layout>
        <Head>
        <title>SSG TEST</title>
        </Head>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <p>{name}です</p>
        <p>ビルドした時刻は{build_time}です</p>
      </Layout>
    </>
  )
}