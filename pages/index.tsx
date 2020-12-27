import { Link } from '@chakra-ui/react'
import NextLink from "next/link";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
      <Head>
        <title>Welcome Match</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <p>Welcome to</p>
          <p>
            <NextLink href="/profile" passHref>
              <Link>Match Profile!</Link>
            </NextLink>
          </p>
        </h1>
      </main>
    </div>
    </Layout>
  )
}
