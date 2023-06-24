import Head from '@/components/Common/Head'
import Header from '@/components/Parts/Template/Header'
import PageTitle from '@/components/Parts/Template/PageTitle'
import SideBar from '@/components/Parts/Template/SideBar'
import Template from '@/components/Template/Reserve/Calendar/Index'
import { useAuth } from '@/hooks/auth'
const calendar = () => {
  const { user } = useAuth({ middleware: 'auth' })
  return (
    <>
      <Head title="予約一覧ページ" />
      <Header user={user} />
      {user && (
        <>
          <SideBar />
          <div className="manage-container">
            <PageTitle title="予約カレンダー" />
            <div className="content-wrap-1000">
              <Template />
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default calendar
