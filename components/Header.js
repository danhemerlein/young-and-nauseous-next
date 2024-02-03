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
  console.log(menuOpen)

  return (
    <header
      className="bg-transparent z-10 flex justify-between font-lack "
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
        <AccountMenu menuOpen={menuOpen} />
      </div>
    </header>
  )
}

export default Header
