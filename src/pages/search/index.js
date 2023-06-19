import Head from 'next/head'

import Header from '@/components/Parts/Template/Header'
import PageTitle from '@/components/Parts/Template/PageTitle'
import SideBar from '@/components/Parts/Template/SideBar'
import Template from '@/components/Template/search/Index'
import { useAuth } from '@/hooks/auth'
const access = () => {
  const { user } = useAuth({ middleware: 'auth' })
  return (
    <>
      <Head>
        <title>医院アクセス情報設定ページ</title>
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
            <PageTitle title="ポータルサイト検索設定" />
            <div className="content-wrap">
              <Template />
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default access
