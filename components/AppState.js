'use client'

import { CartContext, UseCartState } from '@/hooks/UseCart'
import { ModalContext, UseModalState } from '@/hooks/UseModal'

const AppState = ({ children }) => {
  const cart = UseCartState()
  const modal = UseModalState()

  return (
    <CartContext.Provider value={cart}>
      <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
    </CartContext.Provider>
  )
}
export default AppState
