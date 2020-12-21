import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps() {
  // ビルド時刻の取得
  const date = new Date();
  const build_time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return {
    props: {
      name: 'Ren Machida',
      build_time
    },
    revalidate: 60
  }
}

export default function Profile({name, build_time}){
  return (
  <>
    <Head>
      <title>Profile</title>
    </Head>
    <h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h1>
    <h1>
      <Link href="/ssg-test">
        <a>Link SSG TEST</a>
      </Link>
    </h1>
    <p>私は {name} です</p>
    <p>ビルドした日時は {build_time} です</p>
  </>
  )
}