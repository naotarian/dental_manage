import Head from '@/components/Common/Head'
import Header from '@/components/Parts/Template/Header'
import PageTitle from '@/components/Parts/Template/PageTitle'
import SideBar from '@/components/Parts/Template/SideBar'
import Template from '@/components/Template/Index'
import { useAuth } from '@/hooks/auth'

export default function Home() {
  const { user } = useAuth({ middleware: 'auth' })
  return (
    <>
      <Head title="管理画面TOPページ" />
      <Header user={user} />
      {user && (
        <>
          <SideBar />
          <div className="manage-container">
            {/* <PageTitle title="管理画面TOP" /> */}
            <div className="content-wrap-1200">
              <Template />
            </div>
          </div>
        </>
      )}
    </>
  )
}
