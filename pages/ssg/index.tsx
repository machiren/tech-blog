import Layout from '../../components/layout';
import Head from 'next/head';
import Link from 'next/link';

interface SsgProps {
  props: SsgResultProps;
  revalidate?: number;
}

interface SsgResultProps {
  name: string;
  build_time: string;
  result: any
}

export async function getStaticProps(): Promise<SsgProps> {
  // ビルド時刻の取得
  const build_time = new Date().toString();
  const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tokyo&lang=ja&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)
  const result = await weather.json();
  return {
    props: {
      name: 'Ren Machida',
      build_time,
      result
    },
    revalidate: 60
  }
}

export default function Ssg({ name, build_time, result }: SsgResultProps){
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
        <p>{result.name}の天気は{result.weather[0].main}({result.weather[0].description})です</p>
      </Layout>
    </>
  )
}