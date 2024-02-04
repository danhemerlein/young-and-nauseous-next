'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { UseModal } from '@/hooks/UseModal'

const AccountMenu = ({ menuOpen, session }) => {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleLogOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  const { toggleModal } = UseModal()

  const handleButton = () => {
    if (!session) {
      toggleModal()
    } else {
      handleLogOut()
    }
  }

  return (
    <div
      className={cn(
        'transition-cubic-bezier absolute right-0 top-full z-50 flex w-36 flex-col gap-4 border border-solid border-ink bg-beige p-4 text-reverse opacity-0 transition-opacity',
        menuOpen && 'opacity-100',
      )}
    >
      {session && (
        <Link className="link" href="/moodring">
          create a mood ring
        </Link>
      )}

      {session && (
        <Link className="link" href="/dashboard">
          dashboard
        </Link>
      )}

      <button onClick={handleButton} className="button">
        {session ? 'log out' : 'log in'}
      </button>

      {session && (
        <Image
          src="/images/angel-boy.jpg"
          alt="Handrawn illustration of Saturn."
          width="150"
          height="150"
        />
      )}
    </div>
  )
}

export default AccountMenu
