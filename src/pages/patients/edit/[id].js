import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import Head from '@/components/Common/Head'
import Header from '@/components/Parts/Template/Header'
import PageTitle from '@/components/Parts/Template/PageTitle'
import SideBar from '@/components/Parts/Template/SideBar'
import Template from '@/components/Template/Patient/Edit/Index'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'
const detail = () => {
  const { user } = useAuth({ middleware: 'auth' })
  const [detail, setDetail] = useState(null)
  const router = useRouter()
  useEffect(() => {
    ;(async () => {
      if (!router.isReady) return
      const id = router.query.id
      const res = await axios.post('/api/manages/patient/detail', { id })
      setDetail(res.data)
    })()
  }, [router.asPath])
  return (
    <>
      <Head title="患者情報一覧ページ" />
      <Header user={user} />
      {user && (
        <>
          <SideBar />
          <div className="manage-container">
            <PageTitle title="患者情報管理" />
            <div className="content-wrap-1000">
              {detail && <Template detail={detail} setDetail={setDetail} />}
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default detail
