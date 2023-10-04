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
    <div className="relative w-full flex">
      <button onClick={handleClick}>cart {totalItems}</button>
      <MiniCart open={open} handleClick={handleClick} />
    </div>
  )
}

export default Header
