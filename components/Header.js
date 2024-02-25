'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import UseClickOutside from '@/hooks/UseClickOutside'

import {
  authStateChange,
  isAuthenticatedClient,
} from '../app/utils/isAuthenticatedClient'

import Account from './Account'
import AccountMenu from './AccountMenu'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleModal = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const [clientSession, setClientSession] = useState(null)

  useEffect(() => {
    isAuthenticatedClient().then((session) => {
      setClientSession(session)
    })

    authStateChange(setClientSession)
  }, [])

  const headerRef = useRef()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClickOutside = useCallback(() => closeMenu(), [headerRef])

  UseClickOutside(headerRef, handleClickOutside)

  return (
    <header
      className="bg-transparent z-50 flex justify-between font-lack "
      ref={headerRef}
    >
      {/* min height specified to avoid large layout shifts */}
      <h1 className="min-height-[3.2rem] font-baroque text-[3.2rem]">
        <Link href="/">young and nauseous</Link>
      </h1>
      {process.env.NEXT_PUBLIC_SHOW_ACCOUNT_FEATURES === 'true' && (
        <div className="relative">
          <div className="relative flex flex-col">
            <button
              type="button"
              aria-label="account"
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
          <AccountMenu menuOpen={menuOpen} clientSession={clientSession} />
        </div>
      )}
    </header>
  )
}

export default Header
