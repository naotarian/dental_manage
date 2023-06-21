import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import Head from '@/components/Common/Head'
import Header from '@/components/Parts/Template/Header'
import PageTitle from '@/components/Parts/Template/PageTitle'
import SideBar from '@/components/Parts/Template/SideBar'
import Template from '@/components/Template/Reserve/Detail/Index'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'
const detail = () => {
  const { user } = useAuth({ middleware: 'auth' })
  const router = useRouter()
  const [manageId, setManageId] = useState('')
  const [dental, setDental] = useState(null)
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    ;(async () => {
      if (!router.isReady) return
      const id = router.query.id
      setManageId(id)
      const res = await axios.post('/api/manages/reserve/detail', { id })
      setDental(res.data.reserve)
    })()
  }, [router.asPath])
  const update = async () => {
    try {
      const sendData = dental
      await axios.post('/api/manages/reserve/update', sendData)
      setSuccess(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.setTimeout(function () {
        setSuccess(false)
      }, 5000)
    } catch (e) {}
  }
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
              {dental && (
                <Template
                  dental={dental}
                  setDental={setDental}
                  update={update}
                  success={success}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default detail
