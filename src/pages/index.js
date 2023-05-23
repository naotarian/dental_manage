import Head from 'next/head'

import Header from '@/components/Parts/Template/Header'
import PageTitle from '@/components/Parts/Template/PageTitle'
import SideBar from '@/components/Parts/Template/SideBar'
import { useAuth } from '@/hooks/auth'

export default function Home() {
  const { user } = useAuth({ middleware: 'auth' })
  return (
    <>
      <Head>
        <title>管理画面TOPページ</title>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans"
          rel="stylesheet"
        />
      </Head>
      <Header user={user} />
      {user && (
        <>
          <SideBar />
          <div className="manage-container">
            <PageTitle title="管理画面TOP" />
          </div>
        </>
      )}
    </>
  )
}
