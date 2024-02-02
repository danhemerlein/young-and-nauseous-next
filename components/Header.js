'use client'

import Account from './Account'

const Header = () => {
  return (
    <header className="fixed top-4 right-4 lg:top-8 lg:right-24 flex bg-beige justify-between z-10 items-center cursor-pointer">
      <div className="w-4 h-4 rounded-full bg-red mr-2"></div>
      <div className="w-6 h-6">
        <Account />
      </div>
    </header>
  )
}

export default Header
