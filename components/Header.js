'use client'

import { useCart } from '@/hooks/useCart'
import MiniCart from './MiniCart'
import { useState, useCallback, useEffect } from 'react'
import Button from './Button'

const Header = () => {
  const { totalItems } = useCart()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const closeAllModals = useCallback((e) => {
    if (e.keyCode === 27) {
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', closeAllModals)
  }, [setOpen, closeAllModals])

  return (
    <header className="fixed top-0 w-full flex bg-reverse justify-between p-4 border-ink broder-solid border border-t-0 border-r-0 border-l-0 z-10 items-center">
      <Button classes="rounded-lg " text="nausea network" playButton={true} />

      <Button
        handler={handleClick}
        text={`cart (${totalItems})`}
        classes="!border-0 !p-0"
        noHoverState={true}
      />

      <MiniCart open={open} handleClick={handleClick} />
    </header>
  )
}

export default Header
