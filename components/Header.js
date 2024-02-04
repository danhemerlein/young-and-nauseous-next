'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'

import UseClickOutside from '@/hooks/UseClickOutside'

import Account from './Account'
import AccountMenu from './AccountMenu'

const Header = ({ session }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleModal = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const supabase = createClientComponentClient()
  const [clientSession, setClientSession] = useState(null)

  useEffect(() => {
    const isAuthenticatedClient = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setClientSession(session)
    }
    isAuthenticatedClient()
  })

  const headerRef = useRef()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClickOutside = useCallback(() => closeMenu(), [headerRef])

  UseClickOutside(headerRef, handleClickOutside)

  return (
    <header
      className="bg-transparent z-50 flex justify-between font-lack "
      ref={headerRef}
    >
      <h1 className="font-baroque text-[3.2rem]">
        <Link href="/">young and nauseous</Link>
      </h1>

      <div className="relative">
        <div className="relative flex flex-col">
          <button
            type="button"
            name="account"
            aria-controls="account-menu"
            onClick={toggleModal}
            className="flex items-center"
          >
            {clientSession && (
              <div className="mr-2 h-4 w-4 rounded-full bg-red"></div>
            )}
            <div className="h-6 w-6">
              <Account />
            </div>
          </button>
        </div>
        <AccountMenu menuOpen={menuOpen} session={clientSession} />
      </div>
    </header>
  )
}

export default Header
