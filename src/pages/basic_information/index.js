import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Header from '@/components/Parts/Template/Header'
import SideBar from '@/components/Parts/Template/SideBar'
import PageTitle from '@/components/Parts/Template/PageTitle'
//Template
import Template from '@/components/Template/basicInformation/Index'
//mui
const Index = () => {
  const { user } = useAuth({ middleware: 'auth' })
  return (
    <>
      <Head>
        <title>医院基本情報設定ページ</title>
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
            <PageTitle title="医院基本情報" />
            <div className="content-wrap-1200">
              <Template />
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default Index
