import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Header from '@/components/Parts/Template/Header'
import SideBar from '@/components/Parts/Template/SideBar'
import PageTitle from '@/components/Parts/Template/PageTitle'

export default function Home() {
  return (
    <>
      <Head>
        <title>Laravel</title>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <SideBar />
      <div className="manage-container">
        <PageTitle title="管理画面TOP" />
      </div>
    </>
  )
}
