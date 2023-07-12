"use client"
import Link from 'next/link'
import SignInButton from './SignInButton'
import { useSession } from 'next-auth/react'

const Header = () => {
  const { data: session, status } = useSession()
  console.log(session)
  return (
    <header className='flex h-24 flex-col justify-center bg-stone-100'>
      <nav className='container'>
        <ul className='flex items-center justify-between gap-8 font-medium tracking-wider text-stone-500'>
          <li className='text-sm'>
            <Link href='/'>Home</Link>
          </li>
          {/* session?.data.user?.role ==="admin" */}
          {session?.user?.role === "admin" ?
          <li className='text-sm'>
            <Link href='/protected/server'>Protected (server)</Link>
          </li> : null}
          <li className='text-sm'>
            <Link href='/protected/client'>Protected (client)</Link>
          </li>
          <li>
            <SignInButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
