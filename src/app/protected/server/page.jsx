
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import SideBar from '@/components/admin/SideBar'

const ServerProtectedPage = async () => {
  const session = await getServerSession(authOptions)
  console.log(session)

  if (session?.user.role !== "admin") {
    redirect('/signin?callbackUrl=/protected/server')
  }

  return (
   <SideBar />
  )
}

export default ServerProtectedPage
 


