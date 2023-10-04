'use client'

import { useCart } from '@/hooks/useCart'
import MiniCart from './MiniCart'
import { useState } from 'react'

const Header = () => {
  const { totalItems } = useCart()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <header className="fixed ml-[-2rem] top-0 w-[calc(100%+2rem)] flex bg-reverse justify-between p-4 border-ink broder-solid border-2 border-top-0 border-right-0 border-left-0 z-10">
      <h1 className="text-ink ml-4">young and nauseous</h1>

      {totalItems > 0 && (
        <button className="text-ink mr-4" onClick={handleClick}>
          cart {totalItems}
        </button>
      )}

      <MiniCart open={open} handleClick={handleClick} />
    </header>
  )
}

export default Header
