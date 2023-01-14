import Head from 'next/head'
import Bienvenida from '../components/Bienvenida'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Layout title={'Bienvenid@'}>
        <Bienvenida/>
      </Layout>
    </div>
  )
}
