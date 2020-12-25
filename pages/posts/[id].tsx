import Layout from '../../components/layout';
import { useRouter } from 'next/router'

export default function Post({name, build_time, id}){
  const router = useRouter();
  const postId = router.query.id;
  return (
    <>
      <Layout>
        <p>私は {name} です</p>
        <p>ビルドした日時は {build_time} です</p>
        <p>idは {id} です</p>
        <p>userRouterで取得したidは {postId} です</p>
      </Layout>
    </>
  )
}

export async function getStaticProps({params}) {
  // ビルド時刻の取得
  const date = new Date();
  const build_time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return {
    props: {
      name: 'Ren Machida',
      build_time,
      id: params.id
    },
    revalidate: 60
  }
}

export async function getStaticPaths(){
  return {
    paths: [
      {
        params:{
          id:'1'
        }
      },
      {
        params:{
          id:'2'
        }
      },
      {
        params:{
          id:'3'
        }
      },
    ],
    fallback: false
  }
}