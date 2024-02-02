/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
'use client'

import { AuthContext, UseAuthState } from '@/hooks/UseAuth'
import { CartContext, UseCartState } from '@/hooks/UseCart'
import { ModalContext, UseModalState } from '@/hooks/UseModal'

export default ({ children }) => {
  const cart = UseCartState()
  const session = UseAuthState()
  const modal = UseModalState()

  return (
    <AuthContext.Provider value={session}>
      <CartContext.Provider value={cart}>
        <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
      </CartContext.Provider>
    </AuthContext.Provider>
  )
}
