import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from '@/lib/axios'
import Head from '@/components/Common/Head'
import Header from '@/components/Parts/Template/Header'
import PageTitle from '@/components/Parts/Template/PageTitle'
import SideBar from '@/components/Parts/Template/SideBar'
import Template from '@/components/Template/Reserve/Detail/Index'
import { useAuth } from '@/hooks/auth'
const detail = () => {
  const { user } = useAuth({ middleware: 'auth' })
  const router = useRouter()
  const [manageId, setManageId] = useState('')
  const [dental, setDental] = useState(null)
  useEffect(() => {
    ;(async () => {
      if (!router.isReady) return
      const id = router.query.id
      setManageId(id)
      const res = await axios.post('/api/manages/reserve/detail', { id })
      setDental(res.data.reserve)
    })()
  }, [router.asPath])
  return (
    <>
      <Head title="予約詳細ページ" />
      <Header user={user} />
      {user && (
        <>
          <SideBar />
          <div className="manage-container">
            <PageTitle title="予約詳細管理" />
            <div className="content-wrap-1000">
              {dental && <Template dental={dental} />}
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default detail
