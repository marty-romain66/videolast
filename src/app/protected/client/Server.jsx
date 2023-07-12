"use client"
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

import { useState } from 'react'

import onSubmit from './action'
import Fetch from './action'




const ClientProtectPage = () => {

    const [profile, setProfile] = useState(null)
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin?callbackUrl=/protected/client')
    }
  })
 



  return (
  <div>
   <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>
          This is a <span className='text-emerald-500'>client-side</span>{' '}
          protected page
        </h1>
        <h2 className='mt-4 font-medium'>You are logged in as:</h2>
     
      </div>
    </section>
 
   </div>
  )
}

export default ClientProtectPage
