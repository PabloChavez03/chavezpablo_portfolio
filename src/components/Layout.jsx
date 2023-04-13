import Footer from '@components/Footer'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from '@components/Header'

export default function Layout ({ children, title }) {
  const route = useRouter()
  const status = route.pathname === '/'
  return (
    <div className="flex flex-wrap justify-center h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="logopc.png" type="image/png" sizes="16x16" />
      </Head>

      <Header />
      {children}
      <ToastContainer />
      {!status ? null : <Footer />}
    </div>
  )
}
