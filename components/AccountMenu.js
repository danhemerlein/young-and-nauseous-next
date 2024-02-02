'use client'

import cn from 'classnames'
import Image from 'next/image'

import { UseAuth } from '@/hooks/UseAuth'
import { UseModal } from '@/hooks/UseModal'
import { supabase } from '@/supabaseClient'

const AccountMenu = ({ menuOpen }) => {
  const handleLogOut = () => {
    supabase.auth.signOut()
  }
  const { toggleModal } = UseModal()

  const { session } = UseAuth()

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
        'transition-cubic-bezier absolute right-0 top-[calc(100%)] flex w-[150px] flex-col gap-4 border border-solid border-ink bg-beige p-4 text-reverse opacity-0 transition-opacity',
        menuOpen && 'opacity-100',
      )}
    >
      {session && <a className="link">create a mood ring</a>}

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
