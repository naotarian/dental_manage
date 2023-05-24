import Head from '@/components/Common/Head'

import Header from '@/components/Parts/Template/Header'
import PageTitle from '@/components/Parts/Template/PageTitle'
import SideBar from '@/components/Parts/Template/SideBar'
import { useAuth } from '@/hooks/auth'

import Template from '@/components/Template/Staff/Index'

const staffs = () => {
  const { user } = useAuth({ middleware: 'auth' })
  return (
    <>
      <Head title="スタッフ管理ページ" />
      <Header user={user} />
      {user && (
        <>
          <SideBar />
          <div className="manage-container">
            <PageTitle title="スタッフ管理" />
            <div className="content-wrap-1000">
              <Template />
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default staffs
