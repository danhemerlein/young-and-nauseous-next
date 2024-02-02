'use client'
import { useState } from 'react'
import Account from './Account'
import AccountMenu from './AccountMenu'
import { useAuth } from '@/hooks/useAuth'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)
  const toggleModal = () => setMenuOpen(!menuOpen)
  const { session } = useAuth()

  return (
    <header
      className="fixed top-4 right-4 lg:top-8 lg:right-24 flex bg-beige justify-between z-10 cursor-pointer font-lack"
      onMouseLeave={closeMenu}
    >
      <div className="relative">
        <div
          className="flex flex-col relative after:asolute after:top-0 after:w-full after:h-[50px] after:z-40"
          onMouseEnter={openMenu}
        >
          <button onClick={toggleModal} className="flex items-center">
            {session && (
              <div className="w-4 h-4 rounded-full bg-red mr-2"></div>
            )}
            <div className="w-6 h-6">
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
