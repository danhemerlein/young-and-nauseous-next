'use client'
import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'

import { UseAuth } from '@/hooks/UseAuth'
import UseClickOutside from '@/hooks/UseClickOutside'

import Account from './Account'
import AccountMenu from './AccountMenu'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)
  const toggleModal = () => setMenuOpen(!menuOpen)
  const { session } = UseAuth()

  const componentRef = useRef()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClickOutside = useCallback(() => closeMenu(), [componentRef])

  UseClickOutside(componentRef, handleClickOutside)

  return (
    <header
      className="bg-transparent fixed right-4 top-4 z-10 flex w-[calc(100%-2rem)] cursor-pointer justify-between font-lack lg:right-24 lg:top-8 lg:w-[calc(100%-12rem)]"
      onMouseLeave={closeMenu}
      ref={componentRef}
    >
      <h1 className="font-baroque text-[50px]">
        <Link href="/">young and nauseous</Link>
      </h1>
      <div className="relative">
        <div
          className="relative flex flex-col after:absolute after:right-0 after:top-[100%] after:z-40 after:h-[20px] after:w-[calc(200%)]"
          onMouseEnter={openMenu}
        >
          <button onClick={toggleModal} className="flex items-center">
            {session && (
              <div className="mr-2 h-4 w-4 rounded-full bg-red"></div>
            )}
            <div className="h-6 w-6">
              <Account />
            </div>
          </button>
        </div>
      </div>

      <AccountMenu menuOpen={menuOpen} />
    </header>
  )
}

export default Header
